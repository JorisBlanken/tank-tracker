import Link from "next/link";
import { notFound } from "next/navigation";

import { ParameterTrends } from "~/app/systems/[id]/parameters/_components/parameter-trends";
import { api } from "~/trpc/server";

type ParameterPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ParameterPage({ params }: ParameterPageProps) {
  const { id } = await params;

  let system: Awaited<ReturnType<typeof api.system.getById>>;

  try {
    system = await api.system.getById({ id });
  } catch {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 py-6 text-slate-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 lg:px-8">
        <header className="flex items-center gap-3">
          <Link
            href={`/systems/${system.id}`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 shadow-sm"
            aria-label="Back to overview"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
              <path d="m344.09-427 211.56 211.57L480-140.78 140.78-480 480-819.22l75.65 74.65L344.09-533h475.13v106H344.09Z"/>
            </svg>
          </Link>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">{system.name}</h1>
            <p className="text-sm text-slate-600">Parameter History</p>
          </div>
        </header>

        <ParameterTrends
          parameters={system.parameters.map((parameter) => ({
            id: parameter.id,
            fullName: parameter.fullName,
            abbreviatedName: parameter.abbreviatedName,
            unit: parameter.unit,
            displayDecimals: parameter.displayDecimals,
            lowerBound: parameter.lowerBound,
            upperBound: parameter.upperBound,
          }))}
        />
      </div>
    </main>
  );
}
