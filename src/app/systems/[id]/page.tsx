import Link from "next/link";
import { notFound } from "next/navigation";

import { ActivityLog } from "~/app/systems/[id]/_components/activity-log";
import { FilterMediaSection } from "~/app/systems/[id]/_components/filter-media-section";
import { LogDoseButton } from "~/app/systems/[id]/_components/log-dose-button";
import { LogNoteButton } from "~/app/systems/[id]/_components/log-note-button";
import { LogParameterButton } from "~/app/systems/[id]/_components/log-parameter-button";
import { LogWaterChangeButton } from "~/app/systems/[id]/_components/log-water-change-button";
import { NotesCarousel } from "~/app/systems/[id]/_components/notes-carousel";
import { SystemSettingsSheet } from "~/app/systems/[id]/_components/system-settings-sheet";
import { auth } from "~/server/auth";
import { api } from "~/trpc/server";

type SystemPageProps = {
  params: Promise<{
    id: string;
  }>;
};

function formatNumber(value: number, decimals: number) {
  return value.toFixed(decimals);
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function toGaugeScale(lowerBound: number, upperBound: number) {
  const center = (lowerBound + upperBound) / 2;
  const baseRange = upperBound - lowerBound;
  const paddedRange = baseRange > 0 ? baseRange * 2 : Math.max(Math.abs(center) * 0.4, 1);
  const min = center - paddedRange / 2;
  const max = center + paddedRange / 2;
  return { min, max };
}

function toPercentFromTop(value: number, min: number, max: number) {
  const range = max - min || 1;
  return clamp(((max - value) / range) * 100, 0, 100);
}

export default async function SystemPage({ params }: SystemPageProps) {
  const { id } = await params;
  const session = await auth();

  let system: Awaited<ReturnType<typeof api.system.getById>>;
  let initialActivityPage: Awaited<ReturnType<typeof api.system.getActivity>>;
  let initialNotesPage: Awaited<ReturnType<typeof api.system.getNotesPage>>;

  try {
    system = await api.system.getById({ id });
    initialActivityPage = await api.system.getActivity({ systemId: id, limit: 20 });
    initialNotesPage = await api.system.getNotesPage({ systemId: id, limit: 6 });
  } catch {
    notFound();
  }

  const overviewParameters = system.parameters.filter(
    (parameter) => parameter.showOnOverview
  );
  const canManageSettings = session?.user?.id === system.createdById;

  return (
    <main className="min-h-screen bg-slate-50 py-6 text-slate-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 lg:px-8">
        <header className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 shadow-sm"
              aria-label="Back to systems"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                <path d="m344.09-427 211.56 211.57L480-140.78 140.78-480 480-819.22l75.65 74.65L344.09-533h475.13v106H344.09Z"/>
              </svg>
            </Link>
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">{system.name}</h1>
              <p className="text-sm text-slate-600">System Overview</p>
            </div>
          </div>
          {canManageSettings && (
            <SystemSettingsSheet
              systemId={system.id}
              systemName={system.name}
              parameters={system.parameters.map((parameter) => ({
                id: parameter.id,
                fullName: parameter.fullName,
                abbreviatedName: parameter.abbreviatedName,
                unit: parameter.unit,
                showOnOverview: parameter.showOnOverview,
                displayDecimals: parameter.displayDecimals,
                lowerBound: parameter.lowerBound,
                upperBound: parameter.upperBound,
                displayOrder: parameter.displayOrder,
              }))}
              sharedAccess={system.sharedAccesses}
            />
          )}
        </header>

        <div className="grid gap-6 xl:grid-cols-2">
          <div className="min-w-0 flex flex-col gap-6">
            <section>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold tracking-tight">Parameters</h2>
                <div className="flex items-center gap-2">
                  <LogParameterButton
                    systemId={system.id}
                    parameters={system.parameters.map((parameter) => ({
                      id: parameter.id,
                      fullName: parameter.fullName,
                      abbreviatedName: parameter.abbreviatedName,
                      unit: parameter.unit,
                    }))}
                  />
                  <LogDoseButton systemId={system.id} />
                  <Link
                    href={`/systems/${system.id}/parameters`}
                    aria-label="Open parameter trends"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                      <path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z"/>
                    </svg>
                  </Link>
                </div>
              </div>

              <div>
                <ul className="flex w-full items-end gap-1.5">
                  {overviewParameters.map((parameter) => (
                    (() => {
                      const currentValue = parameter.logs[0]?.value ?? null;
                      const scale = toGaugeScale(parameter.lowerBound, parameter.upperBound);
                      const upperTop = toPercentFromTop(
                        parameter.upperBound,
                        scale.min,
                        scale.max
                      );
                      const lowerTop = toPercentFromTop(
                        parameter.lowerBound,
                        scale.min,
                        scale.max
                      );
                      const valueTop =
                        currentValue === null
                          ? null
                          : toPercentFromTop(currentValue, scale.min, scale.max);
                      const isOutOfBounds =
                        currentValue !== null &&
                        (currentValue < parameter.lowerBound ||
                          currentValue > parameter.upperBound);
                      const upperLabel = formatNumber(
                        parameter.upperBound,
                        parameter.displayDecimals
                      );
                      const lowerLabel = formatNumber(
                        parameter.lowerBound,
                        parameter.displayDecimals
                      );
                      const lastLabel =
                        currentValue !== null
                          ? formatNumber(currentValue, parameter.displayDecimals)
                          : "--";

                      return (
                        <li key={parameter.id} className="flex min-w-0 flex-1 flex-col items-center">
                          <div className="mb-2 text-center">
                            <p className="text-sm font-semibold leading-tight text-slate-100">
                              {parameter.abbreviatedName}
                            </p>
                            <p className="text-[11px] font-medium text-slate-400">
                              {parameter.unit || " "}
                            </p>
                          </div>

                          <div className="mx-auto mb-1 h-40 w-9">
                            <div className="relative h-full w-full overflow-visible">
                              <div className="absolute inset-0 overflow-hidden rounded-md border border-slate-600/80 bg-slate-800/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                              <div
                                className="absolute inset-x-0 top-0 bg-slate-950/85"
                                style={{ height: `${upperTop}%` }}
                              />
                              <div
                                className="absolute inset-x-0 bottom-0 bg-slate-950/85"
                                style={{ height: `${100 - lowerTop}%` }}
                              />
                              </div>
                              <div
                                className="pointer-events-none absolute left-1/2 h-[2px] w-[140%] -translate-x-1/2 bg-slate-700"
                                style={{ top: `${upperTop}%` }}
                              />
                              <div
                                className="pointer-events-none absolute left-1/2 h-[2px] w-[140%] -translate-x-1/2 bg-slate-700"
                                style={{ top: `${lowerTop}%` }}
                              />
                              <div
                                className={`pointer-events-none absolute left-1/2 h-[2px] w-[145%] -translate-x-1/2 ${
                                  currentValue === null
                                    ? "bg-slate-400"
                                    : isOutOfBounds
                                      ? "bg-red-400"
                                      : "bg-emerald-400"
                                }`}
                                style={{ top: `${valueTop ?? 50}%` }}
                              />
                              <span
                                className="pointer-events-none absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded bg-slate-800 px-1 text-[10px] font-medium text-slate-100"
                                style={{ top: `${upperTop}%` }}
                              >
                                {upperLabel}
                              </span>
                              <span
                                className={`pointer-events-none absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded px-1 text-[10px] font-semibold ${
                                  currentValue === null
                                    ? "bg-slate-700 text-slate-100"
                                    : isOutOfBounds
                                      ? "bg-red-500 text-slate-50"
                                      : "border border-emerald-300 bg-emerald-300 text-slate-950"
                                }`}
                                style={{ top: `${valueTop ?? 50}%` }}
                              >
                                {lastLabel}
                              </span>
                              <span
                                className="pointer-events-none absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded bg-slate-800 px-1 text-[10px] font-medium text-slate-100"
                                style={{ top: `${lowerTop}%` }}
                              >
                                {lowerLabel}
                              </span>
                            </div>
                          </div>
                        </li>
                      );
                    })()
                  ))}
                </ul>
              </div>
            </section>

            <FilterMediaSection
              systemId={system.id}
              initialMediaItems={system.filterMedia}
            />
          </div>

          <div className="min-w-0 flex flex-col gap-6">
            <section className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold tracking-tight">Notes</h2>
                <LogNoteButton systemId={system.id} />
              </div>
              <NotesCarousel systemId={system.id} initialPage={initialNotesPage} />
            </section>

            <section className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold tracking-tight">Timeline</h2>
                <LogWaterChangeButton systemId={system.id} />
              </div>
              <ActivityLog systemId={system.id} initialPage={initialActivityPage} />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
