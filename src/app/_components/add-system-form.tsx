"use client";

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useRouter } from "next/navigation";
import { Fragment, useRef, useState } from "react";

import { api } from "~/trpc/react";

type AddSystemFormProps = {
  className?: string;
  label?: string;
};

export function AddSystemForm({ className, label }: AddSystemFormProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  const createSystem = api.system.create.useMutation({
    onSuccess: (createdSystem) => {
      setName("");
      setOpen(false);
      router.push(`/systems/${createdSystem.id}`);
      router.refresh();
    },
  });

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          setTimeout(() => inputRef.current?.focus(), 0);
        }}
        aria-label="Add system"
        className={
          className ??
          "flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-700"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          fill="currentColor"
        >
          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </svg>
        {label && <span className="ml-1 text-sm font-medium">{label}</span>}
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
                    <h2 className="text-lg font-semibold text-slate-900">Add a System</h2>

                    <label className="flex flex-col gap-1">
                      <span className="text-sm font-medium text-slate-700">System Name</span>
                      <input
                        ref={inputRef}
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                        placeholder="Enter system name"
                      />
                    </label>

                    <div className="mt-2 flex gap-2">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="flex-1 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={() => createSystem.mutate({ name: name.trim() })}
                        disabled={createSystem.isPending || name.trim().length === 0}
                        className="flex-1 rounded-lg border border-slate-700 bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-50 disabled:opacity-50"
                      >
                        {createSystem.isPending ? "Adding..." : "Create"}
                      </button>
                    </div>
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
