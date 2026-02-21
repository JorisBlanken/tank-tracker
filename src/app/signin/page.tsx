import Link from "next/link";
import { redirect } from "next/navigation";

import { auth, signIn } from "~/server/auth";

export default async function SignInPage() {
  const session = await auth();

  if (session?.user) {
    redirect("/");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-5 py-6 text-slate-900">
      <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="mt-1 text-sm text-slate-600">
          Sign in to continue managing your aquarium systems.
        </p>

        <form
          action={async () => {
            "use server";
            await signIn("discord", { redirectTo: "/" });
          }}
          className="mt-5"
        >
          <button
            type="submit"
            className="w-full rounded-lg border border-slate-700 bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-50"
          >
            Continue with Discord
          </button>
        </form>

        <div className="mt-3 text-center">
          <Link href="/" className="text-sm font-medium text-slate-700">
            Back
          </Link>
        </div>
      </div>
    </main>
  );
}
