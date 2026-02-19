import { TRPCError } from "@trpc/server";
import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";
import { z } from "zod";

const DEFAULT_PARAMETERS = [
  {
    fullName: "Alkalinity",
    abbreviatedName: "KH",
    unit: "dKH",
    displayDecimals: 1,
    lowerBound: 7.3,
    upperBound: 12.0,
    displayOrder: 0,
  },
  {
    fullName: "Calcium",
    abbreviatedName: "Ca",
    unit: "ppm",
    displayDecimals: 0,
    lowerBound: 400,
    upperBound: 450,
    displayOrder: 1,
  },
  {
    fullName: "Magnesium",
    abbreviatedName: "Mg",
    unit: "ppm",
    displayDecimals: 0,
    lowerBound: 1300,
    upperBound: 1350,
    displayOrder: 2,
  },
  {
    fullName: "Nitrate",
    abbreviatedName: "NO₃",
    unit: "ppm",
    displayDecimals: 1,
    lowerBound: 5,
    upperBound: 10,
    displayOrder: 3,
  },
  {
    fullName: "Phosphate",
    abbreviatedName: "PO₄",
    unit: "ppm",
    displayDecimals: 2,
    lowerBound: 0.01,
    upperBound: 0.1,
    displayOrder: 4,
  },
];

export const systemRouter = createTRPCRouter({
  listMine: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.system.findMany({
      where: { createdById: ctx.session.user.id },
      orderBy: [{ displayOrder: "asc" }, { createdAt: "desc" }],
      select: {
        id: true,
        name: true,
        displayOrder: true,
        createdBy: {
          select: {
            id: true,
            name: true,
          },
        },
        parameters: {
          orderBy: { displayOrder: "asc" },
          select: {
            id: true,
            abbreviatedName: true,
            unit: true,
            showOnOverview: true,
            displayDecimals: true,
            logs: {
              orderBy: { loggedAt: "desc" },
              take: 1,
              select: {
                value: true,
              },
            },
          },
        },
      },
    });
  }),

  create: protectedProcedure
    .input(
      z
        .object({
          name: z.string().trim().min(1).max(80).optional(),
        })
        .optional()
    )
    .mutation(async ({ ctx, input }) => {
    const [systemCount, existing] = await Promise.all([
      ctx.db.system.count({
        where: { createdById: ctx.session.user.id },
      }),
      ctx.db.system.findMany({
        where: { createdById: ctx.session.user.id },
        select: { displayOrder: true },
      }),
    ]);

    const maxDisplayOrder = existing.reduce(
      (max, system) => Math.max(max, system.displayOrder),
      -1
    );

    return ctx.db.system.create({
      data: {
        name: input?.name ?? `System ${systemCount + 1}`,
        displayOrder: maxDisplayOrder + 1,
        createdBy: { connect: { id: ctx.session.user.id } },
        parameters: {
          create: DEFAULT_PARAMETERS,
        },
      },
      include: {
        parameters: {
          orderBy: { displayOrder: "asc" },
        },
      },
    });
    }),

  updateName: protectedProcedure
    .input(
      z.object({
        id: z.string().cuid(),
        name: z.string().trim().min(1).max(80),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const existing = await ctx.db.system.findFirst({
        where: {
          id: input.id,
          createdById: ctx.session.user.id,
        },
        select: { id: true },
      });

      if (!existing) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      return ctx.db.system.update({
        where: { id: input.id },
        data: { name: input.name },
      });
    }),

  delete: protectedProcedure
    .input(
      z.object({
        id: z.string().cuid(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const existing = await ctx.db.system.findFirst({
        where: {
          id: input.id,
          createdById: ctx.session.user.id,
        },
        select: { id: true },
      });

      if (!existing) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      await ctx.db.system.delete({
        where: { id: input.id },
      });

      return { id: input.id };
    }),

  moveSystem: protectedProcedure
    .input(
      z.object({
        systemId: z.string().cuid(),
        direction: z.enum(["up", "down"]),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const systems = await ctx.db.system.findMany({
        where: { createdById: ctx.session.user.id },
        orderBy: [{ displayOrder: "asc" }, { createdAt: "desc" }],
        select: { id: true, displayOrder: true },
      });

      const currentIndex = systems.findIndex((system) => system.id === input.systemId);
      if (currentIndex === -1) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      const targetIndex = input.direction === "up" ? currentIndex - 1 : currentIndex + 1;
      if (targetIndex < 0 || targetIndex >= systems.length) {
        return [];
      }

      const reordered = [...systems];
      const current = reordered[currentIndex];
      const target = reordered[targetIndex];
      if (!current || !target) {
        return [];
      }

      reordered[currentIndex] = target;
      reordered[targetIndex] = current;

      const updates = reordered
        .map((system, index) => ({ id: system.id, displayOrder: index }))
        .filter((nextOrder) => {
          const previous = systems.find((system) => system.id === nextOrder.id);
          return previous?.displayOrder !== nextOrder.displayOrder;
        });

      if (updates.length === 0) {
        return [];
      }

      await ctx.db.$transaction(
        updates.map((update) =>
          ctx.db.system.update({
            where: { id: update.id },
            data: { displayOrder: update.displayOrder },
          })
        )
      );

      return updates;
    }),

  updateParameter: protectedProcedure
    .input(
      z
        .object({
          parameterId: z.number().int().positive(),
          fullName: z.string().trim().min(1).max(80).optional(),
          abbreviatedName: z.string().trim().min(1).max(12).optional(),
          unit: z.string().trim().max(16).optional(),
          showOnOverview: z.boolean().optional(),
          displayDecimals: z.number().int().min(0).max(4).optional(),
          lowerBound: z.number().finite().optional(),
          upperBound: z.number().finite().optional(),
          displayOrder: z.number().int().min(0).optional(),
        })
        .refine(
          (input) =>
            input.fullName !== undefined ||
            input.abbreviatedName !== undefined ||
            input.unit !== undefined ||
            input.showOnOverview !== undefined ||
            input.displayDecimals !== undefined ||
            input.lowerBound !== undefined ||
            input.upperBound !== undefined ||
            input.displayOrder !== undefined,
          { message: "At least one field is required to update" }
        )
    )
    .mutation(async ({ ctx, input }) => {
      const existing = await ctx.db.systemParameter.findFirst({
        where: {
          id: input.parameterId,
          system: { createdById: ctx.session.user.id },
        },
        select: { id: true },
      });

      if (!existing) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      return ctx.db.systemParameter.update({
        where: { id: input.parameterId },
        data: {
          fullName: input.fullName,
          abbreviatedName: input.abbreviatedName,
          unit: input.unit,
          showOnOverview: input.showOnOverview,
          displayDecimals: input.displayDecimals,
          lowerBound: input.lowerBound,
          upperBound: input.upperBound,
          displayOrder: input.displayOrder,
        },
      });
    }),

  moveParameter: protectedProcedure
    .input(
      z.object({
        parameterId: z.number().int().positive(),
        direction: z.enum(["up", "down"]),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const current = await ctx.db.systemParameter.findFirst({
        where: {
          id: input.parameterId,
          system: { createdById: ctx.session.user.id },
        },
        select: {
          id: true,
          systemId: true,
          displayOrder: true,
        },
      });

      if (!current) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      const adjacent = await ctx.db.systemParameter.findFirst({
        where: {
          systemId: current.systemId,
          displayOrder:
            input.direction === "up"
              ? { lt: current.displayOrder }
              : { gt: current.displayOrder },
        },
        orderBy: {
          displayOrder: input.direction === "up" ? "desc" : "asc",
        },
        select: {
          id: true,
          displayOrder: true,
        },
      });

      if (!adjacent) {
        return [];
      }

      return ctx.db.$transaction([
        ctx.db.systemParameter.update({
          where: { id: current.id },
          data: { displayOrder: adjacent.displayOrder },
          select: { id: true, displayOrder: true },
        }),
        ctx.db.systemParameter.update({
          where: { id: adjacent.id },
          data: { displayOrder: current.displayOrder },
          select: { id: true, displayOrder: true },
        }),
      ]);
    }),

  createParameter: protectedProcedure
    .input(
      z.object({
        systemId: z.string().cuid(),
        fullName: z.string().trim().max(80).optional(),
        abbreviatedName: z.string().trim().max(12).optional(),
        unit: z.string().trim().max(16).optional(),
        showOnOverview: z.boolean().optional(),
        displayDecimals: z.number().int().min(0).max(4).optional(),
        lowerBound: z.number().finite().optional(),
        upperBound: z.number().finite().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const system = await ctx.db.system.findFirst({
        where: { id: input.systemId, createdById: ctx.session.user.id },
        select: { id: true },
      });

      if (!system) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      const existing = await ctx.db.systemParameter.findMany({
        where: { systemId: input.systemId },
        select: { abbreviatedName: true, displayOrder: true },
      });

      const usedAbbreviations = new Set(existing.map((p) => p.abbreviatedName));
      let nextIndex = 1;
      while (usedAbbreviations.has(`P${nextIndex}`)) {
        nextIndex += 1;
      }

      const maxOrder = existing.reduce(
        (max, parameter) => Math.max(max, parameter.displayOrder),
        -1
      );

      const nextFullName =
        input.fullName && input.fullName.length > 0
          ? input.fullName
          : `Parameter ${nextIndex}`;

      const nextAbbreviation =
        input.abbreviatedName && input.abbreviatedName.length > 0
          ? input.abbreviatedName
          : `P${nextIndex}`;

      if (usedAbbreviations.has(nextAbbreviation)) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Parameter abbreviation already exists in this system",
        });
      }

      return ctx.db.systemParameter.create({
        data: {
          systemId: input.systemId,
          fullName: nextFullName,
          abbreviatedName: nextAbbreviation,
          unit: input.unit ?? "",
          showOnOverview: input.showOnOverview ?? true,
          displayDecimals: input.displayDecimals ?? 0,
          lowerBound: input.lowerBound ?? 0,
          upperBound: input.upperBound ?? 0,
          displayOrder: maxOrder + 1,
        },
      });
    }),

  deleteParameter: protectedProcedure
    .input(z.object({ parameterId: z.number().int().positive() }))
    .mutation(async ({ ctx, input }) => {
      const existing = await ctx.db.systemParameter.findFirst({
        where: {
          id: input.parameterId,
          system: { createdById: ctx.session.user.id },
        },
        select: { id: true },
      });

      if (!existing) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      await ctx.db.systemParameter.delete({
        where: { id: input.parameterId },
      });

      return { id: input.parameterId };
    }),

  getFilterMedia: protectedProcedure
    .input(z.object({ systemId: z.string().cuid() }))
    .query(async ({ ctx, input }) => {
      const system = await ctx.db.system.findFirst({
        where: {
          id: input.systemId,
          createdById: ctx.session.user.id,
        },
        select: { id: true },
      });

      if (!system) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      return ctx.db.filterMedia.findMany({
        where: {
          systemId: input.systemId,
        },
        orderBy: [{ addedAt: "desc" }, { id: "desc" }],
      });
    }),

  createFilterMedia: protectedProcedure
    .input(
      z.object({
        systemId: z.string().cuid(),
        name: z.string().trim().min(1).max(120),
        addedAt: z.coerce.date(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const system = await ctx.db.system.findFirst({
        where: {
          id: input.systemId,
          createdById: ctx.session.user.id,
        },
        select: { id: true },
      });

      if (!system) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      const [media] = await ctx.db.$transaction([
        ctx.db.filterMedia.create({
          data: {
            systemId: input.systemId,
            name: input.name,
            addedAt: input.addedAt,
          },
        }),
        ctx.db.systemActivity.create({
          data: {
            systemId: input.systemId,
            type: "FILTER_MEDIA_ADDED",
            loggedAt: input.addedAt,
            note: input.name,
          },
        }),
      ]);

      return media;
    }),

  replaceFilterMedia: protectedProcedure
    .input(
      z.object({
        mediaId: z.number().int().positive(),
        replacedAt: z.coerce.date(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const existing = await ctx.db.filterMedia.findFirst({
        where: {
          id: input.mediaId,
          system: { createdById: ctx.session.user.id },
        },
        select: { id: true, name: true, systemId: true },
      });

      if (!existing) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      const [media] = await ctx.db.$transaction([
        ctx.db.filterMedia.update({
          where: { id: input.mediaId },
          data: {
            lastReplacedAt: input.replacedAt,
          },
        }),
        ctx.db.systemActivity.create({
          data: {
            systemId: existing.systemId,
            type: "FILTER_MEDIA_REPLACED",
            loggedAt: input.replacedAt,
            note: existing.name,
          },
        }),
      ]);

      return media;
    }),

  deleteFilterMedia: protectedProcedure
    .input(
      z.object({
        mediaId: z.number().int().positive(),
        removedAt: z.coerce.date(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const existing = await ctx.db.filterMedia.findFirst({
        where: {
          id: input.mediaId,
          system: { createdById: ctx.session.user.id },
        },
        select: { id: true, name: true, systemId: true },
      });

      if (!existing) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      await ctx.db.$transaction([
        ctx.db.filterMedia.delete({
          where: { id: input.mediaId },
        }),
        ctx.db.systemActivity.create({
          data: {
            systemId: existing.systemId,
            type: "FILTER_MEDIA_REMOVED",
            loggedAt: input.removedAt,
            note: existing.name,
          },
        }),
      ]);

      return { id: input.mediaId };
    }),

  logParameter: protectedProcedure
    .input(
      z.object({
        parameterId: z.number().int().positive(),
        value: z.number().finite(),
        loggedAt: z.coerce.date(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const parameter = await ctx.db.systemParameter.findFirst({
        where: {
          id: input.parameterId,
          system: { createdById: ctx.session.user.id },
        },
        select: { id: true, systemId: true },
      });

      if (!parameter) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      const [log] = await ctx.db.$transaction([
        ctx.db.systemParameterLog.create({
          data: {
            parameterId: input.parameterId,
            value: input.value,
            loggedAt: input.loggedAt,
          },
        }),
        ctx.db.systemActivity.create({
          data: {
            systemId: parameter.systemId,
            parameterId: parameter.id,
            type: "PARAMETER_LOGGED",
            value: input.value,
            loggedAt: input.loggedAt,
          },
        }),
      ]);

      return log;
    }),

  logWaterChange: protectedProcedure
    .input(
      z.object({
        systemId: z.string().cuid(),
        loggedAt: z.coerce.date(),
        gallons: z.number().positive(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const system = await ctx.db.system.findFirst({
        where: {
          id: input.systemId,
          createdById: ctx.session.user.id,
        },
        select: { id: true },
      });

      if (!system) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      return ctx.db.systemActivity.create({
        data: {
          systemId: input.systemId,
          type: "WATER_CHANGE_LOGGED",
          loggedAt: input.loggedAt,
          value: input.gallons,
          unit: "gallons",
        },
      });
    }),

  logSupplementDose: protectedProcedure
    .input(
      z.object({
        systemId: z.string().cuid(),
        loggedAt: z.coerce.date(),
        product: z.string().trim().min(1).max(120),
        amount: z.number().positive(),
        unit: z.string().trim().min(1).max(24),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const system = await ctx.db.system.findFirst({
        where: {
          id: input.systemId,
          createdById: ctx.session.user.id,
        },
        select: { id: true },
      });

      if (!system) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      return ctx.db.systemActivity.create({
        data: {
          systemId: input.systemId,
          type: "SUPPLEMENT_DOSED",
          loggedAt: input.loggedAt,
          value: input.amount,
          unit: input.unit,
          product: input.product,
        },
      });
    }),

  logNote: protectedProcedure
    .input(
      z.object({
        systemId: z.string().cuid(),
        loggedAt: z.coerce.date(),
        note: z.string().trim().min(1).max(2000),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const system = await ctx.db.system.findFirst({
        where: {
          id: input.systemId,
          createdById: ctx.session.user.id,
        },
        select: { id: true },
      });

      if (!system) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      return ctx.db.systemActivity.create({
        data: {
          systemId: input.systemId,
          type: "NOTE_LOGGED",
          loggedAt: input.loggedAt,
          note: input.note,
        },
      });
    }),

  deleteNote: protectedProcedure
    .input(z.object({ activityId: z.number().int().positive() }))
    .mutation(async ({ ctx, input }) => {
      const existing = await ctx.db.systemActivity.findFirst({
        where: {
          id: input.activityId,
          type: "NOTE_LOGGED",
          system: { createdById: ctx.session.user.id },
        },
        select: {
          id: true,
          systemId: true,
        },
      });

      if (!existing) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      await ctx.db.systemActivity.delete({
        where: { id: existing.id },
      });

      return { id: existing.id };
    }),

  listSupplementProducts: protectedProcedure
    .input(z.object({ systemId: z.string().cuid() }))
    .query(async ({ ctx, input }) => {
      const system = await ctx.db.system.findFirst({
        where: {
          id: input.systemId,
          createdById: ctx.session.user.id,
        },
        select: { id: true },
      });

      if (!system) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      const activities = await ctx.db.systemActivity.findMany({
        where: {
          systemId: input.systemId,
          type: "SUPPLEMENT_DOSED",
          product: {
            not: null,
          },
        },
        orderBy: {
          id: "desc",
        },
        select: {
          product: true,
        },
        take: 50,
      });

      const unique = new Set<string>();
      for (const activity of activities) {
        if (activity.product) unique.add(activity.product);
      }

      return Array.from(unique);
    }),

  getRecentNotes: protectedProcedure
    .input(
      z.object({
        systemId: z.string().cuid(),
        limit: z.number().int().min(1).max(10).default(3),
      })
    )
    .query(async ({ ctx, input }) => {
      const system = await ctx.db.system.findFirst({
        where: {
          id: input.systemId,
          createdById: ctx.session.user.id,
        },
        select: { id: true },
      });

      if (!system) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      return ctx.db.systemActivity.findMany({
        where: {
          systemId: input.systemId,
          type: "NOTE_LOGGED",
          note: { not: null },
        },
        orderBy: {
          loggedAt: "desc",
        },
        take: input.limit,
        select: {
          id: true,
          note: true,
          loggedAt: true,
          createdAt: true,
        },
      });
    }),

  getNotesPage: protectedProcedure
    .input(
      z.object({
        systemId: z.string().cuid(),
        limit: z.number().int().min(1).max(20).default(6),
        cursor: z.number().int().positive().nullish(),
      })
    )
    .query(async ({ ctx, input }) => {
      const system = await ctx.db.system.findFirst({
        where: {
          id: input.systemId,
          createdById: ctx.session.user.id,
        },
        select: { id: true },
      });

      if (!system) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      const notes = await ctx.db.systemActivity.findMany({
        where: {
          systemId: input.systemId,
          type: "NOTE_LOGGED",
          note: { not: null },
        },
        orderBy: {
          id: "desc",
        },
        take: input.limit + 1,
        cursor: input.cursor ? { id: input.cursor } : undefined,
        skip: input.cursor ? 1 : 0,
        select: {
          id: true,
          note: true,
          loggedAt: true,
          createdAt: true,
        },
      });

      let nextCursor: number | undefined = undefined;
      if (notes.length > input.limit) {
        const next = notes.pop();
        nextCursor = next?.id;
      }

      return {
        items: notes,
        nextCursor,
      };
    }),

  getAllNotes: protectedProcedure
    .input(z.object({ systemId: z.string().cuid() }))
    .query(async ({ ctx, input }) => {
      const system = await ctx.db.system.findFirst({
        where: {
          id: input.systemId,
          createdById: ctx.session.user.id,
        },
        select: { id: true },
      });

      if (!system) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      return ctx.db.systemActivity.findMany({
        where: {
          systemId: input.systemId,
          type: "NOTE_LOGGED",
          note: { not: null },
        },
        orderBy: {
          loggedAt: "asc",
        },
        select: {
          id: true,
          note: true,
          loggedAt: true,
          createdAt: true,
        },
      });
    }),

  getActivity: protectedProcedure
    .input(
      z.object({
        systemId: z.string().cuid(),
        limit: z.number().int().min(1).max(50).default(20),
        cursor: z.number().int().positive().nullish(),
      })
    )
    .query(async ({ ctx, input }) => {
      const system = await ctx.db.system.findFirst({
        where: {
          id: input.systemId,
          createdById: ctx.session.user.id,
        },
        select: { id: true },
      });

      if (!system) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      const activities = await ctx.db.systemActivity.findMany({
        where: {
          systemId: input.systemId,
          NOT: {
            type: "SYSTEM_CREATED",
          },
        },
        orderBy: [{ loggedAt: "desc" }, { createdAt: "desc" }, { id: "desc" }],
        take: input.limit + 1,
        cursor: input.cursor ? { id: input.cursor } : undefined,
        skip: input.cursor ? 1 : 0,
        include: {
          parameter: {
            select: {
              id: true,
              fullName: true,
              abbreviatedName: true,
              unit: true,
              displayDecimals: true,
            },
          },
        },
      });

      let nextCursor: number | undefined = undefined;
      if (activities.length > input.limit) {
        const next = activities.pop();
        nextCursor = next?.id;
      }

      return {
        items: activities.map((activity) => ({
          id: activity.id,
          type: activity.type,
          createdAt: activity.createdAt,
          loggedAt: activity.loggedAt,
          value: activity.value,
          unit: activity.unit,
          product: activity.product,
          note: activity.note,
          parameter: activity.parameter,
        })),
        nextCursor,
      };
    }),

  getParameterLogsPage: protectedProcedure
    .input(
      z.object({
        parameterId: z.number().int().positive(),
        limit: z.number().int().min(1).max(50).default(20),
        cursor: z.number().int().positive().nullish(),
      })
    )
    .query(async ({ ctx, input }) => {
      const parameter = await ctx.db.systemParameter.findFirst({
        where: {
          id: input.parameterId,
          system: { createdById: ctx.session.user.id },
        },
        select: { id: true },
      });

      if (!parameter) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      const logs = await ctx.db.systemParameterLog.findMany({
        where: {
          parameterId: input.parameterId,
        },
        orderBy: [{ loggedAt: "desc" }, { id: "desc" }],
        take: input.limit + 1,
        cursor: input.cursor ? { id: input.cursor } : undefined,
        skip: input.cursor ? 1 : 0,
        select: {
          id: true,
          value: true,
          loggedAt: true,
          createdAt: true,
        },
      });

      let nextCursor: number | undefined = undefined;
      if (logs.length > input.limit) {
        const next = logs.pop();
        nextCursor = next?.id;
      }

      return {
        items: logs,
        nextCursor,
      };
    }),

  getById: protectedProcedure
    .input(z.object({ id: z.string().cuid() }))
    .query(async ({ ctx, input }) => {
      const system = await ctx.db.system.findFirst({
        where: {
          id: input.id,
          createdById: ctx.session.user.id,
        },
        include: {
          filterMedia: {
            orderBy: [{ addedAt: "desc" }, { id: "desc" }],
          },
          parameters: {
            orderBy: { displayOrder: "asc" },
            select: {
              id: true,
              fullName: true,
              abbreviatedName: true,
              unit: true,
              showOnOverview: true,
              displayDecimals: true,
              lowerBound: true,
              upperBound: true,
              displayOrder: true,
              createdAt: true,
              updatedAt: true,
              systemId: true,
              logs: {
                orderBy: { loggedAt: "desc" },
                take: 1,
                select: {
                  value: true,
                },
              },
            },
          },
        },
      });

      if (!system) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      return system;
    }),

  getLatest: protectedProcedure.query(async ({ ctx }) => {
    const system = await ctx.db.system.findFirst({
      orderBy: { createdAt: "desc" },
      where: { createdById: ctx.session.user.id },
    });

    return system ?? null;
  }),
});
