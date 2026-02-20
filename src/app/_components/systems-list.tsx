"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

import { AddSystemForm } from "~/app/_components/add-system-form";
import { api } from "~/trpc/react";

type SystemListParameter = {
  id: number;
  abbreviatedName: string;
  unit: string;
  showOnOverview: boolean;
  displayDecimals: number;
  lowerBound: number;
  upperBound: number;
  logs: { value: number }[];
};

type SystemListItem = {
  id: string;
  name: string;
  displayOrder: number;
  parameters: SystemListParameter[];
};

type SystemsListProps = {
  initialSystems: SystemListItem[];
  allowReorder?: boolean;
  showEmptyState?: boolean;
};

function formatNumber(value: number, decimals: number) {
  return value.toFixed(decimals);
}

function getValueColorClass(value: number | null, lowerBound: number, upperBound: number) {
  if (value === null) {
    return "text-slate-500";
  }

  if (value < lowerBound) {
    return "text-red-300";
  }

  if (value > upperBound) {
    return "text-red-300";
  }

  return "text-green-300";
}

function getOutOfBoundsDirection(
  value: number | null,
  lowerBound: number,
  upperBound: number
): "up" | "down" | null {
  if (value === null) {
    return null;
  }

  if (value < lowerBound) {
    return "down";
  }

  if (value > upperBound) {
    return "up";
  }

  return null;
}

export function SystemsList({
  initialSystems,
  allowReorder = true,
  showEmptyState = true,
}: SystemsListProps) {
  const router = useRouter();
  const [systems, setSystems] = useState(
    [...initialSystems].sort((a, b) => a.displayOrder - b.displayOrder)
  );
  const [query, setQuery] = useState("");

  const moveSystem = api.system.moveSystem.useMutation();

  const parameterColumns = useMemo(() => {
    const seen = new Set<string>();
    const columns: string[] = [];

    for (const system of systems) {
      for (const parameter of system.parameters) {
        if (!parameter.showOnOverview) continue;
        if (seen.has(parameter.abbreviatedName)) continue;
        seen.add(parameter.abbreviatedName);
        columns.push(parameter.abbreviatedName);
      }
    }

    return columns;
  }, [systems]);

  const filteredSystems = useMemo(() => {
    const trimmedQuery = query.trim().toLowerCase();
    if (!trimmedQuery) return systems;
    return systems.filter((system) =>
      system.name.toLowerCase().includes(trimmedQuery)
    );
  }, [query, systems]);

  const moveSystemOptimistic = (systemId: string, direction: "up" | "down") => {
    setSystems((current) => {
      const currentIndex = current.findIndex((system) => system.id === systemId);
      if (currentIndex === -1) {
        return current;
      }

      const targetIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;
      if (targetIndex < 0 || targetIndex >= current.length) {
        return current;
      }

      const reordered = [...current];
      const currentSystem = reordered[currentIndex];
      const targetSystem = reordered[targetIndex];
      if (!currentSystem || !targetSystem) {
        return current;
      }

      reordered[currentIndex] = targetSystem;
      reordered[targetIndex] = currentSystem;

      return reordered.map((system, index) => ({ ...system, displayOrder: index }));
    });

    moveSystem.mutate({ systemId, direction });
  };

  if (systems.length === 0) {
    if (!showEmptyState) {
      return null;
    }

    return (
      <div className="flex flex-col items-center justify-center gap-3 py-6">
        <p className="text-sm text-slate-600">Add a system to get started!</p>
        <AddSystemForm
          label="Add a System"
          className="flex h-10 items-center justify-center rounded-full border border-slate-200 bg-slate-100 px-4 text-slate-700"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="sr-only" htmlFor="systems-filter">
        Find system
      </label>
      <input
        id="systems-filter"
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Find Systems..."
        className="h-8 rounded-lg border border-slate-700/80 bg-slate-900/70 px-2.5 text-xs text-slate-200 placeholder:text-slate-500"
      />

      <div className="relative overflow-hidden rounded-xl border border-slate-700/70 bg-slate-950/40">
        <div className="no-scrollbar overflow-x-auto">
          <table className="min-w-full table-fixed border-collapse text-sm">
        <thead>
          <tr className="border-b border-slate-700/70 bg-slate-900/95">
            <th className="sticky left-0 z-20 w-40 bg-slate-900/95 px-3 py-2 text-left text-[11px] font-medium tracking-wide text-slate-400">
              SYSTEM
            </th>
            {parameterColumns.map((column) => (
              <th
                key={column}
                className="w-16 px-1.5 py-2 text-center text-[11px] font-medium tracking-wide text-slate-400"
              >
                {column}
              </th>
            ))}
            {allowReorder && (
              <th className="w-12 px-1 py-2 text-right text-[11px] font-medium tracking-wide text-slate-400"></th>
            )}
          </tr>
        </thead>
        <tbody>
          {filteredSystems.map((system) => {
            const valuesByAbbreviation = new Map(
              system.parameters
                .filter((parameter) => parameter.showOnOverview)
                .map((parameter) => [
                  parameter.abbreviatedName,
                  {
                    displayValue: parameter.logs[0]
                      ? formatNumber(parameter.logs[0].value, parameter.displayDecimals)
                      : "--",
                    textClass: getValueColorClass(
                      parameter.logs[0]?.value ?? null,
                      parameter.lowerBound,
                      parameter.upperBound
                    ),
                    outOfBoundsDirection: getOutOfBoundsDirection(
                      parameter.logs[0]?.value ?? null,
                      parameter.lowerBound,
                      parameter.upperBound
                    ),
                  },
                ])
            );

            return (
              <tr
                key={system.id}
                className="cursor-pointer border-b border-slate-800/80 transition hover:bg-slate-900/70 last:border-b-0"
                onClick={() => router.push(`/systems/${system.id}`)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    router.push(`/systems/${system.id}`);
                  }
                }}
                tabIndex={0}
              >
                <td className="sticky left-0 z-10 bg-slate-950/95 px-3 py-2 align-middle whitespace-nowrap">
                  <span className="block truncate text-sm font-medium text-slate-100">
                    {system.name}
                  </span>
                </td>
                {parameterColumns.map((column) => (
                  <td
                    key={`${system.id}-${column}`}
                    className="px-1.5 py-2 text-center text-xs font-medium tabular-nums whitespace-nowrap"
                  >
                    <span
                      className={
                        valuesByAbbreviation.get(column)?.textClass ?? "text-slate-500"
                      }
                    >
                      {valuesByAbbreviation.get(column)?.outOfBoundsDirection ===
                        "up" && <span aria-hidden>↑</span>}
                      {valuesByAbbreviation.get(column)?.outOfBoundsDirection ===
                        "down" && <span aria-hidden>↓</span>}
                      {valuesByAbbreviation.get(column)?.displayValue ?? "--"}
                    </span>
                  </td>
                ))}
                {allowReorder && (
                  <td className="px-1 py-2 align-middle">
                    <div className="flex items-center justify-end gap-0.5">
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          moveSystemOptimistic(system.id, "up");
                        }}
                        disabled={systems.findIndex((item) => item.id === system.id) === 0}
                        className="rounded p-0.5 text-slate-300 transition hover:bg-slate-800/70 hover:text-slate-100 disabled:opacity-30"
                        aria-label={`Move ${system.name} up`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          viewBox="0 -960 960 960"
                          width="18"
                          fill="currentColor"
                        >
                          <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          moveSystemOptimistic(system.id, "down");
                        }}
                        disabled={
                          systems.findIndex((item) => item.id === system.id) ===
                          systems.length - 1
                        }
                        className="rounded p-0.5 text-slate-300 transition hover:bg-slate-800/70 hover:text-slate-100 disabled:opacity-30"
                        aria-label={`Move ${system.name} down`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="18"
                          viewBox="0 -960 960 960"
                          width="18"
                          fill="currentColor"
                        >
                          <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                        </svg>
                      </button>
                    </div>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
          </table>
        </div>
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-6 bg-gradient-to-l from-slate-950/90 to-transparent" />
      </div>
    </div>
  );
}
