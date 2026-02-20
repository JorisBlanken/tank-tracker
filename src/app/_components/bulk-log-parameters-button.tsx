"use client";

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, useMemo, useState } from "react";

import { formatRelativeDateTime } from "~/lib/date-display";
import { api } from "~/trpc/react";

type BulkParameter = {
  id: number;
  abbreviatedName: string;
  unit: string;
};

type BulkSystem = {
  id: string;
  name: string;
  parameters: BulkParameter[];
};

type BulkLogParametersButtonProps = {
  systems: BulkSystem[];
};

function getNowLocalDateTime() {
  const date = new Date();
  const tzOffset = date.getTimezoneOffset();
  const local = new Date(date.getTime() - tzOffset * 60_000);
  return local.toISOString().slice(0, 16);
}

function formatDateTimeForDisplay(value: string) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return formatRelativeDateTime(parsed);
}

export function BulkLogParametersButton({ systems }: BulkLogParametersButtonProps) {
  const utils = api.useUtils();

  const [open, setOpen] = useState(false);
  const [loggedAt, setLoggedAt] = useState(getNowLocalDateTime);
  const [isEditingDate, setIsEditingDate] = useState(false);
  const [valuesByCell, setValuesByCell] = useState<Record<string, string>>({});

  const logParametersBulk = api.system.logParametersBulk.useMutation();

  const enteredEntries = useMemo(() => {
    const entries: { parameterId: number; value: number }[] = [];

    for (const system of systems) {
      for (const parameter of system.parameters) {
        const cellKey = `${system.id}:${parameter.id}`;
        const raw = valuesByCell[cellKey]?.trim() ?? "";
        if (!raw) continue;

        const parsed = Number(raw);
        if (Number.isNaN(parsed)) continue;

        entries.push({
          parameterId: parameter.id,
          value: parsed,
        });
      }
    }

    return entries;
  }, [systems, valuesByCell]);

  const hasInvalidValue = useMemo(() => {
    for (const raw of Object.values(valuesByCell)) {
      if (raw.trim().length === 0) continue;
      if (Number.isNaN(Number(raw))) return true;
    }
    return false;
  }, [valuesByCell]);

  const canSave =
    enteredEntries.length > 0 &&
    loggedAt.trim().length > 0 &&
    !hasInvalidValue &&
    !logParametersBulk.isPending;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSave) return;

    await logParametersBulk.mutateAsync({
      loggedAt: new Date(loggedAt),
      entries: enteredEntries,
    });

    await Promise.all([
      utils.system.listMine.invalidate(),
      utils.system.getActivity.invalidate(),
      utils.system.getById.invalidate(),
      utils.system.getParameterLogsPage.invalidate(),
    ]);

    setValuesByCell({});
    setLoggedAt(getNowLocalDateTime());
    setIsEditingDate(false);
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="h-10 rounded-full border border-slate-700/80 bg-slate-900/70 px-3 text-xs font-medium text-slate-200"
      >
        Bulk Log
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
                <DialogPanel className="w-full rounded-t-2xl border border-slate-700/80 bg-slate-950 p-4 shadow-xl md:mx-auto md:mb-4 md:max-w-6xl md:rounded-2xl">
                  <div className="mx-auto flex w-full max-w-6xl flex-col gap-3">
                    <h3 className="text-lg font-semibold text-slate-100">
                      Bulk Parameter Log
                    </h3>

                    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                      <div>
                        {isEditingDate ? (
                          <input
                            type="datetime-local"
                            value={loggedAt}
                            onChange={(event) => setLoggedAt(event.target.value)}
                            onBlur={() => setIsEditingDate(false)}
                            className="w-full rounded-md border border-slate-700/80 bg-slate-900 px-3 py-2 text-sm text-slate-200"
                          />
                        ) : (
                          <button
                            type="button"
                            className="w-full text-left text-sm text-slate-300"
                            onClick={() => setIsEditingDate(true)}
                          >
                            {formatDateTimeForDisplay(loggedAt)}
                          </button>
                        )}
                      </div>

                      <div className="max-h-[62vh] overflow-y-auto">
                        <div className="flex flex-col gap-3">
                          {systems.map((system) => (
                            <section
                              key={system.id}
                              className="overflow-hidden rounded-lg border border-slate-700/80"
                            >
                              <h4 className="border-b border-slate-700/80 bg-slate-900 px-2 py-1.5 text-sm font-semibold text-slate-100">
                                {system.name}
                              </h4>
                              <div className="grid grid-cols-5 gap-x-2 gap-y-1 px-2 py-2">
                                {system.parameters.map((parameter) => {
                                  const cellKey = `${system.id}:${parameter.id}`;
                                  return (
                                    <label key={parameter.id}>
                                      <span className="mb-0.5 block text-[11px] font-medium text-slate-400">
                                        {parameter.abbreviatedName}
                                      </span>
                                      <input
                                        type="number"
                                        value={valuesByCell[cellKey] ?? ""}
                                        onChange={(event) =>
                                          setValuesByCell((current) => ({
                                            ...current,
                                            [cellKey]: event.target.value,
                                          }))
                                        }
                                        aria-label={`${system.name} ${parameter.abbreviatedName}`}
                                        className="h-8 w-full rounded-md border border-slate-700/80 bg-slate-900 px-1.5 py-1 text-right text-xs text-slate-100"
                                      />
                                    </label>
                                  );
                                })}
                              </div>
                            </section>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="flex-1 rounded-lg border border-slate-700/80 px-4 py-2 text-sm font-medium text-slate-200"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={!canSave}
                          className="flex-1 rounded-lg border border-slate-700 bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-50 disabled:opacity-50"
                        >
                          {logParametersBulk.isPending ? "Saving..." : "Save"}
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
