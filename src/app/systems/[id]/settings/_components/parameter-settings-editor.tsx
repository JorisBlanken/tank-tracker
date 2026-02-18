"use client";

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useRouter } from "next/navigation";
import { Fragment, useMemo, useState } from "react";

import { api } from "~/trpc/react";

type Parameter = {
  id: number;
  fullName: string;
  abbreviatedName: string;
  unit: string;
  displayDecimals: number;
  lowerBound: number;
  upperBound: number;
  displayOrder: number;
};

type ParameterDraft = {
  id: number;
  fullName: string;
  abbreviatedName: string;
  unit: string;
  displayDecimals: string;
  lowerBound: string;
  upperBound: string;
};

type NewParameterDraft = {
  fullName: string;
  abbreviatedName: string;
  unit: string;
  displayDecimals: string;
  lowerBound: string;
  upperBound: string;
};

type ParameterSettingsEditorProps = {
  systemId: string;
  initialSystemName: string;
  initialParameters: Parameter[];
};

function toDraft(parameter: Parameter): ParameterDraft {
  return {
    id: parameter.id,
    fullName: parameter.fullName,
    abbreviatedName: parameter.abbreviatedName,
    unit: parameter.unit,
    displayDecimals: String(parameter.displayDecimals),
    lowerBound: String(parameter.lowerBound),
    upperBound: String(parameter.upperBound),
  };
}

export function ParameterSettingsEditor({
  systemId,
  initialSystemName,
  initialParameters,
}: ParameterSettingsEditorProps) {
  const router = useRouter();
  const [systemName, setSystemName] = useState(initialSystemName);
  const [savedSystemName, setSavedSystemName] = useState(initialSystemName);
  const [parameters, setParameters] = useState(initialParameters);
  const [editingParameter, setEditingParameter] = useState<ParameterDraft | null>(
    null
  );
  const [creatingParameter, setCreatingParameter] =
    useState<NewParameterDraft | null>(null);
  const [parameterToDelete, setParameterToDelete] = useState<Parameter | null>(
    null
  );
  const [confirmDeleteSystemOpen, setConfirmDeleteSystemOpen] = useState(false);
  const utils = api.useUtils();

  const updateName = api.system.updateName.useMutation({
    onSuccess: async (updatedSystem) => {
      setSavedSystemName(updatedSystem.name);
      setSystemName(updatedSystem.name);
      await utils.system.getById.invalidate({ id: systemId });
    },
  });

  const updateParameter = api.system.updateParameter.useMutation({
    onSuccess: async (updated) => {
      setParameters((current) =>
        current.map((parameter) =>
          parameter.id === updated.id ? { ...parameter, ...updated } : parameter
        )
      );
      await utils.system.getById.invalidate({ id: systemId });
      setEditingParameter(null);
    },
  });

  const createParameter = api.system.createParameter.useMutation({
    onSuccess: async (created) => {
      setParameters((current) => [...current, created]);
      await utils.system.getById.invalidate({ id: systemId });
    },
  });

  const deleteParameter = api.system.deleteParameter.useMutation({
    onSuccess: async ({ id }) => {
      setParameters((current) => current.filter((parameter) => parameter.id !== id));
      await utils.system.getById.invalidate({ id: systemId });
      if (editingParameter?.id === id) {
        setEditingParameter(null);
      }
      setParameterToDelete(null);
    },
  });

  const deleteSystem = api.system.delete.useMutation({
    onSuccess: async () => {
      await utils.system.listMine.invalidate();
      router.push("/");
      router.refresh();
    },
  });

  const orderedParameters = useMemo(
    () => [...parameters].sort((a, b) => a.displayOrder - b.displayOrder),
    [parameters]
  );

  const nextParameterDefaults = useMemo(() => {
    const usedAbbreviations = new Set(parameters.map((p) => p.abbreviatedName));
    let nextIndex = 1;
    while (usedAbbreviations.has(`P${nextIndex}`)) {
      nextIndex += 1;
    }

    return {
      fullName: `Parameter ${nextIndex}`,
      abbreviatedName: `P${nextIndex}`,
      unit: "",
      displayDecimals: "1",
      lowerBound: "0",
      upperBound: "0",
    } satisfies NewParameterDraft;
  }, [parameters]);

  const saveSystemName = () => {
    const nextName = systemName.trim();
    if (!nextName) {
      setSystemName(savedSystemName);
      return;
    }

    if (nextName !== savedSystemName) {
      updateName.mutate({ id: systemId, name: nextName });
    }

    setSystemName(nextName);
  };

  const saveEditedParameter = () => {
    if (!editingParameter) return;

    const displayDecimals = Number(editingParameter.displayDecimals);
    const lowerBound = Number(editingParameter.lowerBound);
    const upperBound = Number(editingParameter.upperBound);

    if (
      Number.isNaN(displayDecimals) ||
      Number.isNaN(lowerBound) ||
      Number.isNaN(upperBound)
    ) {
      return;
    }

    updateParameter.mutate({
      parameterId: editingParameter.id,
      fullName: editingParameter.fullName.trim(),
      abbreviatedName: editingParameter.abbreviatedName.trim(),
      unit: editingParameter.unit.trim(),
      displayDecimals,
      lowerBound,
      upperBound,
    });
  };

  const createWithDraft = () => {
    if (!creatingParameter) return;

    const displayDecimals = Number(creatingParameter.displayDecimals);
    const lowerBound = Number(creatingParameter.lowerBound);
    const upperBound = Number(creatingParameter.upperBound);

    if (
      Number.isNaN(displayDecimals) ||
      Number.isNaN(lowerBound) ||
      Number.isNaN(upperBound)
    ) {
      return;
    }

    createParameter.mutate(
      {
        systemId,
        fullName: creatingParameter.fullName.trim(),
        abbreviatedName: creatingParameter.abbreviatedName.trim(),
        unit: creatingParameter.unit.trim(),
        displayDecimals,
        lowerBound,
        upperBound,
      },
      {
        onSuccess: () => {
          setCreatingParameter(null);
        },
      }
    );
  };

  return (
    <div className="flex flex-col gap-6">
      <label className="flex flex-col gap-1">
        <span className="text-sm font-semibold text-slate-900">System Name</span>
        <input
          value={systemName}
          className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-base text-slate-900"
          onChange={(event) => setSystemName(event.target.value)}
          onBlur={saveSystemName}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              saveSystemName();
            }
            if (event.key === "Escape") {
              setSystemName(savedSystemName);
            }
          }}
        />
      </label>

      <section className="rounded-xl border border-slate-200 bg-slate-50 p-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-900">Parameters</h2>
          <button
            type="button"
            onClick={() => setCreatingParameter(nextParameterDefaults)}
            disabled={createParameter.isPending}
            className="px-0 py-0 text-sm font-semibold text-slate-700"
            aria-label="Add parameter"
          >
            +
          </button>
        </div>

        <div className="mt-1">
          {orderedParameters.map((parameter) => (
            <div
              key={parameter.id}
              className="flex items-center justify-between border-b border-slate-200 py-2 last:border-b-0"
            >
              <p className="text-sm text-slate-900">{parameter.fullName}</p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setEditingParameter(toDraft(parameter))}
                  className="rounded-md p-1 text-slate-700"
                  aria-label={`Edit ${parameter.fullName}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 -960 960 960"
                    width="20"
                    fill="currentColor"
                  >
                    <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => setParameterToDelete(parameter)}
                  disabled={deleteParameter.isPending}
                  className="rounded-md p-1 text-slate-700"
                  aria-label={`Delete ${parameter.fullName}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 -960 960 960"
                    width="20"
                    fill="currentColor"
                  >
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pt-2">
        <button
          type="button"
          onClick={() => setConfirmDeleteSystemOpen(true)}
          className="w-full rounded-lg border border-slate-700 bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-50"
        >
          Delete System
        </button>
      </section>

      <Transition appear show={editingParameter !== null} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setEditingParameter(null)}
        >
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
                    <h3 className="text-lg font-semibold text-slate-900">Edit Parameter</h3>

                    <div className="grid grid-cols-2 gap-2">
                      <label className="flex flex-col gap-1">
                        <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                          Name
                        </span>
                        <input
                          value={editingParameter?.fullName ?? ""}
                          className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                          onChange={(event) =>
                            setEditingParameter((current) =>
                              current
                                ? { ...current, fullName: event.target.value }
                                : current
                            )
                          }
                        />
                      </label>

                      <label className="flex flex-col gap-1">
                        <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                          Abbreviation
                        </span>
                        <input
                          value={editingParameter?.abbreviatedName ?? ""}
                          className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                          onChange={(event) =>
                            setEditingParameter((current) =>
                              current
                                ? { ...current, abbreviatedName: event.target.value }
                                : current
                            )
                          }
                        />
                      </label>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <label className="flex flex-col gap-1">
                        <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                          Unit
                        </span>
                        <input
                          value={editingParameter?.unit ?? ""}
                          className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                          onChange={(event) =>
                            setEditingParameter((current) =>
                              current ? { ...current, unit: event.target.value } : current
                            )
                          }
                        />
                      </label>

                      <label className="flex flex-col gap-1">
                        <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                          Precision
                        </span>
                        <input
                          type="number"
                          value={editingParameter?.displayDecimals ?? ""}
                          className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                          onChange={(event) =>
                            setEditingParameter((current) =>
                              current
                                ? {
                                    ...current,
                                    displayDecimals: event.target.value,
                                  }
                                : current
                            )
                          }
                        />
                      </label>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <label className="flex flex-col gap-1">
                        <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                          Minimum
                        </span>
                        <input
                          type="number"
                          value={editingParameter?.lowerBound ?? ""}
                          className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                          onChange={(event) =>
                            setEditingParameter((current) =>
                              current
                                ? {
                                    ...current,
                                    lowerBound: event.target.value,
                                  }
                                : current
                            )
                          }
                        />
                      </label>

                      <label className="flex flex-col gap-1">
                        <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                          Maximum
                        </span>
                        <input
                          type="number"
                          value={editingParameter?.upperBound ?? ""}
                          className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                          onChange={(event) =>
                            setEditingParameter((current) =>
                              current
                                ? {
                                    ...current,
                                    upperBound: event.target.value,
                                  }
                                : current
                            )
                          }
                        />
                      </label>
                    </div>

                    <div className="mt-2 flex gap-2">
                      <button
                        type="button"
                        onClick={() => setEditingParameter(null)}
                        className="flex-1 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={saveEditedParameter}
                        disabled={updateParameter.isPending}
                        className="flex-1 rounded-lg border border-slate-700 bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-50 disabled:opacity-50"
                      >
                        {updateParameter.isPending ? "Saving..." : "Save"}
                      </button>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={creatingParameter !== null} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setCreatingParameter(null)}
        >
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
                    <h3 className="text-lg font-semibold text-slate-900">
                      New Parameter
                    </h3>

                    <div className="grid grid-cols-2 gap-2">
                      <label className="flex flex-col gap-1">
                        <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                          Name
                        </span>
                        <input
                          value={creatingParameter?.fullName ?? ""}
                          className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                          onChange={(event) =>
                            setCreatingParameter((current) =>
                              current
                                ? { ...current, fullName: event.target.value }
                                : current
                            )
                          }
                        />
                      </label>

                      <label className="flex flex-col gap-1">
                        <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                          Abbreviation
                        </span>
                        <input
                          value={creatingParameter?.abbreviatedName ?? ""}
                          className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                          onChange={(event) =>
                            setCreatingParameter((current) =>
                              current
                                ? { ...current, abbreviatedName: event.target.value }
                                : current
                            )
                          }
                        />
                      </label>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <label className="flex flex-col gap-1">
                        <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                          Unit
                        </span>
                        <input
                          value={creatingParameter?.unit ?? ""}
                          className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                          onChange={(event) =>
                            setCreatingParameter((current) =>
                              current ? { ...current, unit: event.target.value } : current
                            )
                          }
                        />
                      </label>

                      <label className="flex flex-col gap-1">
                        <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                          Precision
                        </span>
                        <input
                          type="number"
                          value={creatingParameter?.displayDecimals ?? ""}
                          className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                          onChange={(event) =>
                            setCreatingParameter((current) =>
                              current
                                ? {
                                    ...current,
                                    displayDecimals: event.target.value,
                                  }
                                : current
                            )
                          }
                        />
                      </label>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <label className="flex flex-col gap-1">
                        <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                          Minimum
                        </span>
                        <input
                          type="number"
                          value={creatingParameter?.lowerBound ?? ""}
                          className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                          onChange={(event) =>
                            setCreatingParameter((current) =>
                              current
                                ? {
                                    ...current,
                                    lowerBound: event.target.value,
                                  }
                                : current
                            )
                          }
                        />
                      </label>

                      <label className="flex flex-col gap-1">
                        <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                          Maximum
                        </span>
                        <input
                          type="number"
                          value={creatingParameter?.upperBound ?? ""}
                          className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                          onChange={(event) =>
                            setCreatingParameter((current) =>
                              current
                                ? {
                                    ...current,
                                    upperBound: event.target.value,
                                  }
                                : current
                            )
                          }
                        />
                      </label>
                    </div>

                    <div className="mt-2 flex gap-2">
                      <button
                        type="button"
                        onClick={() => setCreatingParameter(null)}
                        className="flex-1 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={createWithDraft}
                        disabled={createParameter.isPending}
                        className="flex-1 rounded-lg border border-slate-700 bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-50 disabled:opacity-50"
                      >
                        {createParameter.isPending ? "Creating..." : "Create"}
                      </button>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={parameterToDelete !== null} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setParameterToDelete(null)}
        >
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
                  <div className="mx-auto flex w-full max-w-md flex-col gap-3">
                    <p className="text-lg font-semibold text-slate-900">
                      Delete this parameter?
                    </p>
                    <p className="text-sm text-slate-600">
                      This removes the parameter and its logged measurements.
                    </p>
                    <div className="mt-2 flex gap-2">
                      <button
                        type="button"
                        onClick={() => setParameterToDelete(null)}
                        className="flex-1 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          parameterToDelete &&
                          deleteParameter.mutate({
                            parameterId: parameterToDelete.id,
                          })
                        }
                        disabled={deleteParameter.isPending}
                        className="flex-1 rounded-lg border border-red-700 bg-red-700 px-4 py-2 text-sm font-semibold text-slate-50 disabled:opacity-50"
                      >
                        {deleteParameter.isPending ? "Deleting..." : "Delete"}
                      </button>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={confirmDeleteSystemOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setConfirmDeleteSystemOpen(false)}
        >
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
                  <div className="mx-auto flex w-full max-w-md flex-col gap-3">
                    <p className="text-lg font-semibold text-slate-900">
                      Delete this system?
                    </p>
                    <p className="text-sm text-slate-600">
                      This permanently deletes this system and all associated data.
                    </p>
                    <div className="mt-2 flex gap-2">
                      <button
                        type="button"
                        onClick={() => setConfirmDeleteSystemOpen(false)}
                        className="flex-1 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteSystem.mutate({ id: systemId })}
                        disabled={deleteSystem.isPending}
                        className="flex-1 rounded-lg border border-red-700 bg-red-700 px-4 py-2 text-sm font-semibold text-slate-50 disabled:opacity-50"
                      >
                        {deleteSystem.isPending ? "Deleting..." : "Delete"}
                      </button>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
