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

type ParameterOption = {
  id: number;
  fullName: string;
  abbreviatedName: string;
  unit: string;
};

type LogParameterButtonProps = {
  systemId: string;
  parameters: ParameterOption[];
  className?: string;
};

function getNowLocalDateTime() {
  const date = new Date();
  const tzOffset = date.getTimezoneOffset();
  const local = new Date(date.getTime() - tzOffset * 60_000);
  return local.toISOString().slice(0, 16);
}

export function LogParameterButton({
  systemId,
  parameters,
  className,
}: LogParameterButtonProps) {
  const router = useRouter();
  const utils = api.useUtils();

  const [open, setOpen] = useState(false);
  const [loggedAt, setLoggedAt] = useState(getNowLocalDateTime);
  const [valuesByParameter, setValuesByParameter] = useState<
    Record<number, string>
  >({});
  const [isSaving, setIsSaving] = useState(false);

  const logParameter = api.system.logParameter.useMutation();

  const enteredValues = parameters
    .map((parameter) => ({
      parameterId: parameter.id,
      raw: valuesByParameter[parameter.id]?.trim() ?? "",
    }))
    .filter((entry) => entry.raw.length > 0);

  const hasInvalidEnteredValue = enteredValues.some((entry) =>
    Number.isNaN(Number(entry.raw))
  );

  const canSave =
    !isSaving &&
    loggedAt.trim().length > 0 &&
    enteredValues.length > 0 &&
    !hasInvalidEnteredValue;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSave) return;

    setIsSaving(true);
    try {
      for (const entry of enteredValues) {
        const parsedValue = Number(entry.raw);
        await logParameter.mutateAsync({
          parameterId: entry.parameterId,
          value: parsedValue,
          loggedAt: new Date(loggedAt),
        });
      }

      await utils.system.getById.invalidate({ id: systemId });
      await utils.system.getActivity.invalidate({ systemId });
      router.refresh();
      setValuesByParameter({});
      setLoggedAt(getNowLocalDateTime());
      setOpen(false);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Log test result"
        className={
          className ??
          "flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-700"
        }
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M8.4625 20.5375C9.4375 21.5125 10.6167 22 12 22C13.3833 22 14.5625 21.5125 15.5375 20.5375C16.5125 19.5625 17 18.3833 17 17V8V6H7V4H15V2H7C6.45 2 5.97917 2.19583 5.5875 2.5875C5.19583 2.97917 5 3.45 5 4V6C5 6.55 5.19583 7.02083 5.5875 7.4125C5.97917 7.80417 6.45 8 7 8V17C7 18.3833 7.4875 19.5625 8.4625 20.5375ZM15 17C15 17.8333 14.7083 18.5417 14.125 19.125C13.5417 19.7083 12.8333 20 12 20C11.1667 20 10.4583 19.7083 9.875 19.125C9.29167 18.5417 9 17.8333 9 17V8H15V11H12V13H15V15H12V17H15Z" />
          <path d="M19 5V7H21V5H23V3H21V1H19V3H17V5H19Z" />
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
            <div className="flex min-h-full items-end justify-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="translate-y-4 opacity-0"
                enterTo="translate-y-0 opacity-100"
                leave="ease-in duration-150"
                leaveFrom="translate-y-0 opacity-100"
                leaveTo="translate-y-4 opacity-0"
              >
                <DialogPanel className="w-full rounded-t-2xl border border-slate-200 bg-slate-50 p-4 shadow-xl">
                  <div className="mx-auto flex w-full max-w-md flex-col gap-2">
                    <h3 className="mb-2 text-lg font-semibold">Record Parameters</h3>

                    <form
                      className="flex flex-col gap-2"
                      onSubmit={handleSubmit}
                    >
                      <DateTimeField value={loggedAt} onChange={setLoggedAt} />

                      <div className="overflow-hidden rounded-xl border border-slate-200">
                        <div className="max-h-72 overflow-y-auto">
                          {parameters.map((parameter) => (
                            <div
                              key={parameter.id}
                              className="grid grid-cols-[minmax(0,1fr)_170px] items-center border-b border-slate-200 px-3 py-2 last:border-b-0"
                            >
                              <div className="min-w-0">
                                <p className="truncate text-sm font-semibold text-slate-900">
                                  {parameter.abbreviatedName}
                                </p>
                                <p className="truncate text-xs text-slate-500">
                                  {parameter.fullName}
                                </p>
                              </div>
                              <div className="flex items-center justify-end gap-2">
                                <input
                                  type="number"
                                  value={valuesByParameter[parameter.id] ?? ""}
                                  onChange={(event) =>
                                    setValuesByParameter((current) => ({
                                      ...current,
                                      [parameter.id]: event.target.value,
                                    }))
                                  }
                                  aria-label={`Value for ${parameter.fullName}`}
                                  className="w-28 rounded-md border border-slate-200 px-2 py-1.5 text-right text-sm"
                                />
                                <span className="w-10 text-left text-sm text-slate-600">
                                  {parameter.unit || "—"}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-2 flex gap-2">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="flex-1 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={!canSave}
                          className="flex-1 rounded-lg border border-slate-700 bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-50 disabled:opacity-50"
                        >
                          {isSaving ? "Saving..." : "Save"}
                        </button>
                      </div>
                    </form>
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
