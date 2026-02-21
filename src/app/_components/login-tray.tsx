"use client";

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { getProviders, signIn } from "next-auth/react";
import { Fragment, useEffect, useState } from "react";

type ProviderMap = NonNullable<Awaited<ReturnType<typeof getProviders>>>;

function ProviderLogo({ providerId }: { providerId: string }) {
  if (providerId === "discord") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        viewBox="0 0 24 24"
        width="20"
        fill="currentColor"
      >
        <path d="M20.317 4.369A19.791 19.791 0 0 0 15.548 3c-.207.375-.437.88-.6 1.275a18.27 18.27 0 0 0-5.893 0A13.04 13.04 0 0 0 8.45 3a19.736 19.736 0 0 0-4.77 1.37C.67 8.874-.157 13.267.257 17.598a19.93 19.93 0 0 0 5.86 2.965c.47-.646.888-1.333 1.247-2.054-.686-.258-1.34-.58-1.95-.958.163-.122.322-.249.476-.38 3.76 1.765 7.848 1.765 11.564 0 .156.13.315.258.477.38-.613.378-1.27.7-1.958.959.36.72.777 1.407 1.248 2.053a19.88 19.88 0 0 0 5.864-2.965c.486-5.021-.83-9.373-2.768-13.229ZM8.02 14.939c-1.137 0-2.07-1.034-2.07-2.307 0-1.273.915-2.308 2.07-2.308 1.166 0 2.089 1.044 2.07 2.308 0 1.273-.914 2.307-2.07 2.307Zm7.66 0c-1.137 0-2.07-1.034-2.07-2.307 0-1.273.914-2.308 2.07-2.308 1.166 0 2.089 1.044 2.07 2.308 0 1.273-.905 2.307-2.07 2.307Z" />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      viewBox="0 -960 960 960"
      width="20"
      fill="currentColor"
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
    </svg>
  );
}

export function LoginTray() {
  const [open, setOpen] = useState(false);
  const [providers, setProviders] = useState<ProviderMap | null>(null);
  const [isLoadingProviders, setIsLoadingProviders] = useState(false);

  useEffect(() => {
    if (!open || providers !== null) {
      return;
    }

    setIsLoadingProviders(true);
    void getProviders()
      .then((result) => {
        setProviders(result ?? null);
      })
      .finally(() => setIsLoadingProviders(false));
  }, [open, providers]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-lg border border-slate-700 bg-slate-700 px-8 py-3 text-sm font-semibold text-slate-50 shadow-sm"
      >
        Login
      </button>

      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setOpen(false)}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-slate-950/20" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center lg:items-center lg:px-4">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="translate-y-4 opacity-0"
                enterTo="translate-y-0 opacity-100"
                leave="ease-in duration-150"
                leaveFrom="translate-y-0 opacity-100"
                leaveTo="translate-y-4 opacity-0"
              >
                <DialogPanel className="w-full rounded-t-2xl border border-slate-200 bg-slate-50 p-4 shadow-xl lg:mx-auto lg:my-6 lg:max-w-xl lg:rounded-2xl">
                  <div className="mx-auto flex w-full max-w-md flex-col gap-3">
                    {isLoadingProviders ? (
                      <p className="text-sm text-slate-600">Loading options...</p>
                    ) : (
                      <div className="flex flex-col gap-2">
                        {providers &&
                          Object.values(providers).map((provider) => (
                            <button
                              key={provider.id}
                              type="button"
                              onClick={() =>
                                void signIn(provider.id, { callbackUrl: "/" })
                              }
                              className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-800"
                            >
                              <ProviderLogo providerId={provider.id} />
                              Continue with {provider.name}
                            </button>
                          ))}
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="mt-1 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700"
                    >
                      Cancel
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
