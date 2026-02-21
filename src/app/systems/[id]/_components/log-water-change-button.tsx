"use client";

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";

import { formatRelativeDateTime } from "~/lib/date-display";
import { api } from "~/trpc/react";

type LogWaterChangeButtonProps = {
  systemId: string;
  className?: string;
};

function getNowLocalDateTime() {
  const date = new Date();
  const tzOffset = date.getTimezoneOffset();
  const local = new Date(date.getTime() - tzOffset * 60_000);
  return local.toISOString().slice(0, 16);
}

export function LogWaterChangeButton({
  systemId,
  className,
}: LogWaterChangeButtonProps) {
  const router = useRouter();
  const utils = api.useUtils();

  const [open, setOpen] = useState(false);
  const [loggedAt, setLoggedAt] = useState(getNowLocalDateTime);
  const [gallons, setGallons] = useState("");

  const logWaterChange = api.system.logWaterChange.useMutation({
    onSuccess: async () => {
      await utils.system.getActivity.invalidate({ systemId });
      router.refresh();
      setLoggedAt(getNowLocalDateTime());
      setGallons("");
      setOpen(false);
    },
  });

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Log water change"
        className={
          className ??
          "flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-700"
        }
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.275 19C12.475 18.9833 12.6458 18.9042 12.7875 18.7625C12.9292 18.6208 13 18.45 13 18.25C13 18.0167 12.925 17.8292 12.775 17.6875C12.625 17.5458 12.4333 17.4833 12.2 17.5C11.5167 17.55 10.7917 17.3625 10.025 16.9375C9.25833 16.5125 8.775 15.7417 8.575 14.625C8.54167 14.4417 8.45417 14.2917 8.3125 14.175C8.17083 14.0583 8.00833 14 7.825 14C7.59167 14 7.4 14.0875 7.25 14.2625C7.1 14.4375 7.05 14.6417 7.1 14.875C7.38333 16.3917 8.05 17.475 9.1 18.125C10.15 18.775 11.2083 19.0667 12.275 19ZM6.2875 19.65C4.7625 18.0833 4 16.1333 4 13.8C4 12.1333 4.6625 10.3208 5.9875 8.3625C7.3125 6.40417 9.31667 4.28333 12 2C14.6833 4.28333 16.6875 6.40417 18.0125 8.3625C19.3375 10.3208 20 12.1333 20 13.8C20 16.1333 19.2375 18.0833 17.7125 19.65C16.1875 21.2167 14.2833 22 12 22C9.71667 22 7.8125 21.2167 6.2875 19.65ZM16.3 18.2375C17.4333 17.0625 18 15.5833 18 13.8C18 12.5833 17.4958 11.2083 16.4875 9.675C15.4792 8.14167 13.9833 6.46667 12 4.65C10.0167 6.46667 8.52083 8.14167 7.5125 9.675C6.50417 11.2083 6 12.5833 6 13.8C6 15.5833 6.56667 17.0625 7.7 18.2375C8.83333 19.4125 10.2667 20 12 20C13.7333 20 15.1667 19.4125 16.3 18.2375Z"
            fill="currentColor"
          />
          <path d="M19 5V7H21V5H23V3H21V1H19V3H17V5H19Z" fill="currentColor" />
        </svg>
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
                  <div className="mx-auto flex w-full max-w-md flex-col gap-2">
                    <h3 className="text-lg font-semibold">Log Water Change</h3>

                    <DateTimeField value={loggedAt} onChange={setLoggedAt} />

                    <label className="flex flex-col gap-1">
                      <span className="text-sm font-medium">Volume</span>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          value={gallons}
                          onChange={(event) => setGallons(event.target.value)}
                          className="w-full rounded-md border border-slate-200 px-3 py-2"
                        />
                        <span className="text-sm text-slate-600">gallons</span>
                      </div>
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
                        onClick={() => {
                          const parsedGallons = Number(gallons);
                          if (Number.isNaN(parsedGallons)) return;
                          logWaterChange.mutate({
                            systemId,
                            loggedAt: new Date(loggedAt),
                            gallons: parsedGallons,
                          });
                        }}
                        disabled={
                          logWaterChange.isPending ||
                          loggedAt.trim().length === 0 ||
                          gallons.trim().length === 0 ||
                          Number.isNaN(Number(gallons))
                        }
                        className="flex-1 rounded-lg border border-slate-700 bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-50 disabled:opacity-50"
                      >
                        {logWaterChange.isPending ? "Saving..." : "Save"}
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

function DateTimeField({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  return (
    <div>
      {isEditing ? (
        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Timestamp
          </span>
          <input
            ref={inputRef}
            type="datetime-local"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            onBlur={() => setIsEditing(false)}
            className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700"
          />
        </label>
      ) : (
        <button
          type="button"
          className="w-full text-left text-sm text-slate-600"
          onClick={() => setIsEditing(true)}
        >
          {formatDateTimeForDisplay(value)}
        </button>
      )}
    </div>
  );
}

function formatDateTimeForDisplay(value: string) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return formatRelativeDateTime(parsed);
}
