import Link from "next/link";

import { AddSystemForm } from "~/app/_components/add-system-form";
import { auth } from "~/server/auth";
import { api } from "~/trpc/server";

function formatNumber(value: number, decimals: number) {
  return value.toFixed(decimals);
}

export default async function Home() {
  const session = await auth();

  if (!session?.user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <Link
          href="/api/auth/signin"
          className="rounded-lg border border-slate-200 bg-slate-50 px-8 py-3 text-sm font-semibold text-slate-800 shadow-sm"
        >
          Log in
        </Link>
      </main>
    );
  }

  const systems = await api.system.listMine();

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-6 text-slate-900">
      <div className="mx-auto flex w-full max-w-md flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
              Your Systems
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <AddSystemForm />
            <Link
              href="/api/auth/signout"
              aria-label="Sign out"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill="currentColor"
              >
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
              </svg>
            </Link>
          </div>
        </div>

        {systems.length === 0 ? (
          <p className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 shadow-sm">
            No systems yet.
          </p>
        ) : (
          <ul className="flex flex-col gap-3">
            {systems.map((system) => (
              <li key={system.id}>
                <Link
                  href={`/systems/${system.id}`}
                  className="block rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-base font-medium text-slate-900 shadow-sm"
                >
                  <div className="mb-3">{system.name}</div>
                  {system.parameters.length > 0 && (
                    <ul className="flex w-full">
                      {system.parameters.map((parameter) => (
                        <li
                          key={parameter.id}
                          className="flex flex-1 flex-col gap-1 border-r border-slate-300 px-1 py-1 text-center last:border-r-0"
                        >
                          <p className="text-xs font-semibold leading-tight">
                            {parameter.abbreviatedName}
                          </p>
                          <p className="text-[10px] text-slate-500">
                            {parameter.unit || " "}
                          </p>
                          <p className="text-sm font-semibold leading-tight">
                            {parameter.logs[0]
                              ? formatNumber(
                                  parameter.logs[0].value,
                                  parameter.displayDecimals
                                )
                              : "--"}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
