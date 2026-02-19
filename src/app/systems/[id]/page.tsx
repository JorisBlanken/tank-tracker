import Link from "next/link";
import { notFound } from "next/navigation";

import { ActivityLog } from "~/app/systems/[id]/_components/activity-log";
import { InventoryMock } from "~/app/systems/[id]/_components/inventory-mock";
import { LogDoseButton } from "~/app/systems/[id]/_components/log-dose-button";
import { LogNoteButton } from "~/app/systems/[id]/_components/log-note-button";
import { LogParameterButton } from "~/app/systems/[id]/_components/log-parameter-button";
import { LogWaterChangeButton } from "~/app/systems/[id]/_components/log-water-change-button";
import { NotesCarousel } from "~/app/systems/[id]/_components/notes-carousel";
import { SystemSettingsSheet } from "~/app/systems/[id]/_components/system-settings-sheet";
import { api } from "~/trpc/server";

type SystemPageProps = {
  params: Promise<{
    id: string;
  }>;
};

function formatNumber(value: number, decimals: number) {
  return value.toFixed(decimals);
}

export default async function SystemPage({ params }: SystemPageProps) {
  const { id } = await params;

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

  return (
    <main className="min-h-screen bg-slate-50 py-6 text-slate-900">
      <div className="mx-auto flex w-full max-w-md flex-col gap-6">
        <header className="flex items-center justify-between gap-3 px-5">
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
          />
        </header>

        <section className="px-5">
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

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
            <ul className="flex w-full">
              {overviewParameters.map((parameter) => (
                <li
                  key={parameter.id}
                  className="flex flex-1 flex-col gap-1 border-r border-slate-300 px-2 py-2 text-center last:border-r-0"
                >
                  <div>
                    <p className="text-base font-semibold leading-tight">
                      {parameter.abbreviatedName}
                    </p>
                    <p className="text-xs font-medium text-slate-500">
                      {parameter.unit || " "}
                    </p>
                  </div>
                  <p className="text-xl font-semibold leading-tight">
                    {parameter.logs[0]
                      ? formatNumber(parameter.logs[0].value, parameter.displayDecimals)
                      : <span className="text-slate-500">--</span>}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <InventoryMock systemId={system.id} initialItems={system.filterMedia} />

        <section className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h2 className="px-5 text-lg font-semibold tracking-tight">Notes</h2>
            <div className="px-5">
              <LogNoteButton systemId={system.id} />
            </div>
          </div>
          <NotesCarousel systemId={system.id} initialPage={initialNotesPage} />
        </section>

        <section className="flex flex-col gap-3 px-5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold tracking-tight">Timeline</h2>
            <LogWaterChangeButton systemId={system.id} />
          </div>
          <ActivityLog systemId={system.id} initialPage={initialActivityPage} />
        </section>
      </div>
    </main>
  );
}
