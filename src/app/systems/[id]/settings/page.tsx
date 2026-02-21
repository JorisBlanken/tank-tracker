import Link from "next/link";
import { notFound } from "next/navigation";

import { ParameterSettingsEditor } from "~/app/systems/[id]/settings/_components/parameter-settings-editor";
import { auth } from "~/server/auth";
import { api } from "~/trpc/server";

type SystemSettingsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function SystemSettingsPage({
  params,
}: SystemSettingsPageProps) {
  const { id } = await params;
  const session = await auth();

  let system: Awaited<ReturnType<typeof api.system.getById>>;

  try {
    system = await api.system.getById({ id });
  } catch {
    notFound();
  }

  if (session?.user.id !== system.createdById) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-6 text-slate-900">
      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-6 flex items-center gap-3">
          <Link
            href={`/systems/${system.id}`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 shadow-sm"
            aria-label="Back to system"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="m344.09-427 211.56 211.57L480-140.78 140.78-480 480-819.22l75.65 74.65L344.09-533h475.13v106H344.09Z" />
            </svg>
          </Link>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">{system.name}</h1>
            <p className="text-sm text-slate-600">System Settings</p>
          </div>
        </header>

        <ParameterSettingsEditor
          systemId={system.id}
          initialSystemName={system.name}
          initialParameters={system.parameters}
          initialSharedAccess={system.sharedAccesses}
        />
      </div>
    </main>
  );
}
