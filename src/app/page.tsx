import { AddSystemForm } from "~/app/_components/add-system-form";
import { CollapsibleSystemsSection } from "~/app/_components/collapsible-systems-section";
import { LoginTray } from "~/app/_components/login-tray";
import { SystemsList } from "~/app/_components/systems-list";
import { UserSettingsButton } from "~/app/_components/user-settings-button";
import { auth } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  const session = await auth();

  if (!session?.user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-5 py-6 text-slate-900">
        <div className="flex w-full max-w-md flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Get Started</h1>
          <p className="text-sm text-slate-600">
            Log in to start managing your tanks.
          </p>
          <div className="mt-2">
            <LoginTray />
          </div>
        </div>
      </main>
    );
  }

  const systems = await api.system.listMine();
  const ownOwnerId = session.user.id;

  const ownSystems = systems.filter((system) => system.createdBy.id === ownOwnerId);

  const otherSystemsByOwner = new Map<
    string,
    { ownerName: string; systems: typeof systems }
  >();

  for (const system of systems) {
    if (system.createdBy.id === ownOwnerId) continue;
    const ownerName = system.createdBy.name?.trim() || "Unknown";
    const existing = otherSystemsByOwner.get(system.createdBy.id);
    if (existing) {
      existing.systems.push(system);
    } else {
      otherSystemsByOwner.set(system.createdBy.id, {
        ownerName,
        systems: [system],
      });
    }
  }

  const otherSections = Array.from(otherSystemsByOwner.values());

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-6 text-slate-900">
      <div className="mx-auto flex w-full max-w-md flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Systems</h1>
          </div>

          <div className="flex items-center gap-2">
            <AddSystemForm />
            <UserSettingsButton initialName={session.user.name ?? ""} />
          </div>
        </div>

        <CollapsibleSystemsSection title="Your Systems" defaultOpen>
          <SystemsList initialSystems={ownSystems} />
        </CollapsibleSystemsSection>

        {otherSections.map((section) => (
          <CollapsibleSystemsSection
            key={section.ownerName}
            title={`${section.ownerName}'s Systems`}
            defaultOpen
          >
            <SystemsList
              initialSystems={section.systems}
              allowReorder={false}
              showEmptyState={false}
            />
          </CollapsibleSystemsSection>
        ))}
      </div>
    </main>
  );
}
