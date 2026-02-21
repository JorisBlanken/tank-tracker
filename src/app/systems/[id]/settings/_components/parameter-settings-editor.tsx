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
  showOnOverview: boolean;
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

type UpdateParameterInput = {
  parameterId: number;
  fullName?: string;
  abbreviatedName?: string;
  unit?: string;
  showOnOverview?: boolean;
  displayDecimals?: number;
  lowerBound?: number;
  upperBound?: number;
  displayOrder?: number;
};

type SharedAccessEntry = {
  id: number;
  email: string;
};

type ParameterSettingsEditorProps = {
  systemId: string;
  initialSystemName: string;
  initialParameters: Parameter[];
  initialSharedAccess: SharedAccessEntry[];
  onSaveComplete?: () => void;
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

function normalizeParameter(parameter: Parameter): Parameter {
  return {
    ...parameter,
    fullName: parameter.fullName.trim(),
    abbreviatedName: parameter.abbreviatedName.trim(),
    unit: parameter.unit.trim(),
  };
}

function parametersEqual(a: Parameter, b: Parameter): boolean {
  return (
    a.id === b.id &&
    a.fullName === b.fullName &&
    a.abbreviatedName === b.abbreviatedName &&
    a.unit === b.unit &&
    a.showOnOverview === b.showOnOverview &&
    a.displayDecimals === b.displayDecimals &&
    a.lowerBound === b.lowerBound &&
    a.upperBound === b.upperBound &&
    a.displayOrder === b.displayOrder
  );
}

export function ParameterSettingsEditor({
  systemId,
  initialSystemName,
  initialParameters,
  initialSharedAccess,
  onSaveComplete,
}: ParameterSettingsEditorProps) {
  const router = useRouter();
  const [systemName, setSystemName] = useState(initialSystemName);
  const [savedSystemName, setSavedSystemName] = useState(initialSystemName);
  const [parameters, setParameters] = useState(initialParameters);
  const [savedParameters, setSavedParameters] = useState(initialParameters);
  const [sharedAccess, setSharedAccess] = useState(initialSharedAccess);
  const [savedSharedAccess, setSavedSharedAccess] = useState(initialSharedAccess);
  const [shareEmailInput, setShareEmailInput] = useState("");
  const [shareInputError, setShareInputError] = useState<string | null>(null);
  const [editingParameter, setEditingParameter] = useState<ParameterDraft | null>(
    null
  );
  const [creatingParameter, setCreatingParameter] =
    useState<NewParameterDraft | null>(null);
  const [parameterToDelete, setParameterToDelete] = useState<Parameter | null>(
    null
  );
  const [confirmDeleteSystemOpen, setConfirmDeleteSystemOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const utils = api.useUtils();

  const updateName = api.system.updateName.useMutation();
  const updateParameter = api.system.updateParameter.useMutation();
  const createParameter = api.system.createParameter.useMutation();
  const deleteParameter = api.system.deleteParameter.useMutation();
  const addSharedAccess = api.system.addSharedAccess.useMutation();
  const removeSharedAccess = api.system.removeSharedAccess.useMutation();

  const deleteSystem = api.system.delete.useMutation({
    onSuccess: async () => {
      await utils.system.listMine.invalidate();
      router.push("/");
      router.refresh();
    },
  });

  const isBusy =
    isSaving ||
    updateName.isPending ||
    updateParameter.isPending ||
    createParameter.isPending ||
    deleteParameter.isPending ||
    addSharedAccess.isPending ||
    removeSharedAccess.isPending ||
    deleteSystem.isPending;

  const orderedParameters = useMemo(
    () => [...parameters].sort((a, b) => a.displayOrder - b.displayOrder),
    [parameters]
  );

  const savedParameterMap = useMemo(
    () => new Map(savedParameters.map((parameter) => [parameter.id, parameter])),
    [savedParameters]
  );

  const hasChanges = useMemo(() => {
    const nextName = systemName.trim();
    if (nextName !== savedSystemName) {
      return true;
    }

    if (parameters.length !== savedParameters.length) {
      return true;
    }

    const currentEmails = [...sharedAccess]
      .map((entry) => entry.email.toLowerCase())
      .sort();
    const savedEmails = [...savedSharedAccess]
      .map((entry) => entry.email.toLowerCase())
      .sort();

    if (currentEmails.length !== savedEmails.length) {
      return true;
    }

    if (currentEmails.some((email, index) => email !== savedEmails[index])) {
      return true;
    }

    const normalizedCurrent = [...parameters]
      .map(normalizeParameter)
      .sort((a, b) => a.displayOrder - b.displayOrder || a.id - b.id);
    const normalizedSaved = [...savedParameters]
      .map(normalizeParameter)
      .sort((a, b) => a.displayOrder - b.displayOrder || a.id - b.id);

    return normalizedCurrent.some((parameter, index) => {
      const previous = normalizedSaved[index];
      return !previous || !parametersEqual(parameter, previous);
    });
  }, [
    parameters,
    savedParameters,
    savedSharedAccess,
    savedSystemName,
    sharedAccess,
    systemName,
  ]);

  const nextParameterDefaults = useMemo(() => {
    return {
      fullName: "",
      abbreviatedName: "",
      unit: "ppm",
      displayDecimals: "",
      lowerBound: "",
      upperBound: "",
    } satisfies NewParameterDraft;
  }, []);

  const saveEditedParameter = () => {
    if (!editingParameter) return;

    const displayDecimals =
      editingParameter.displayDecimals.trim() === ""
        ? 0
        : Number(editingParameter.displayDecimals);
    const lowerBound = Number(editingParameter.lowerBound);
    const upperBound = Number(editingParameter.upperBound);

    if (
      Number.isNaN(displayDecimals) ||
      Number.isNaN(lowerBound) ||
      Number.isNaN(upperBound)
    ) {
      return;
    }

    setParameters((current) =>
      current.map((parameter) =>
        parameter.id === editingParameter.id
          ? {
              ...parameter,
              fullName: editingParameter.fullName.trim(),
              abbreviatedName: editingParameter.abbreviatedName.trim(),
              unit: editingParameter.unit.trim(),
              displayDecimals,
              lowerBound,
              upperBound,
            }
          : parameter
      )
    );
    setEditingParameter(null);
  };

  const createWithDraft = () => {
    if (!creatingParameter) return;

    const displayDecimals =
      creatingParameter.displayDecimals.trim() === ""
        ? 0
        : Number(creatingParameter.displayDecimals);
    const lowerBound = Number(creatingParameter.lowerBound);
    const upperBound = Number(creatingParameter.upperBound);

    if (
      Number.isNaN(displayDecimals) ||
      Number.isNaN(lowerBound) ||
      Number.isNaN(upperBound)
    ) {
      return;
    }

    const nextId =
      parameters.reduce(
        (minId, parameter) => (parameter.id < minId ? parameter.id : minId),
        0
      ) - 1;
    const nextOrder =
      parameters.reduce(
        (maxOrder, parameter) =>
          parameter.displayOrder > maxOrder ? parameter.displayOrder : maxOrder,
        -1
      ) + 1;

    setParameters((current) => [
      ...current,
      {
        id: nextId,
        fullName: creatingParameter.fullName.trim(),
        abbreviatedName: creatingParameter.abbreviatedName.trim(),
        unit: creatingParameter.unit.trim(),
        showOnOverview: true,
        displayDecimals,
        lowerBound,
        upperBound,
        displayOrder: nextOrder,
      },
    ]);
    setCreatingParameter(null);
  };

  const moveParameter = (parameterId: number, direction: "up" | "down") => {
    const currentOrdered = [...parameters].sort(
      (a, b) => a.displayOrder - b.displayOrder
    );
    const currentIndex = currentOrdered.findIndex(
      (parameter) => parameter.id === parameterId
    );
    if (currentIndex < 0) return;

    const targetIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;
    if (targetIndex < 0 || targetIndex >= currentOrdered.length) return;

    const current = currentOrdered[currentIndex];
    const target = currentOrdered[targetIndex];
    if (!current || !target) return;

    setParameters((prev) =>
      prev.map((parameter) => {
        if (parameter.id === current.id) {
          return { ...parameter, displayOrder: target.displayOrder };
        }
        if (parameter.id === target.id) {
          return { ...parameter, displayOrder: current.displayOrder };
        }
        return parameter;
      })
    );
  };

  const toggleOverviewVisibility = (parameter: Parameter) => {
    setParameters((current) =>
      current.map((item) =>
        item.id === parameter.id
          ? { ...item, showOnOverview: !item.showOnOverview }
          : item
      )
    );
  };

  const normalizeEmail = (email: string) => email.trim().toLowerCase();

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const addSharedAccessDraft = () => {
    const normalizedEmail = normalizeEmail(shareEmailInput);
    if (!isValidEmail(normalizedEmail)) {
      setShareInputError("Please enter a valid email address.");
      return;
    }

    if (
      sharedAccess.some(
        (entry) => entry.email.toLowerCase() === normalizedEmail
      )
    ) {
      setShareInputError("This email already has access.");
      return;
    }

    const nextId =
      sharedAccess.reduce(
        (minId, entry) => (entry.id < minId ? entry.id : minId),
        0
      ) - 1;

    setSharedAccess((current) => [
      ...current,
      {
        id: nextId,
        email: normalizedEmail,
      },
    ]);
    setShareEmailInput("");
    setShareInputError(null);
  };

  const removeSharedAccessDraft = (accessId: number) => {
    setSharedAccess((current) => current.filter((entry) => entry.id !== accessId));
    setShareInputError(null);
  };

  const saveChanges = async () => {
    if (isSaving) return;

    const nextName = systemName.trim();
    if (!nextName) {
      return;
    }

    setIsSaving(true);

    try {
      if (nextName !== savedSystemName) {
        await updateName.mutateAsync({ id: systemId, name: nextName });
      }

      const savedIds = new Set(savedParameters.map((parameter) => parameter.id));
      const currentPersistedIds = new Set(
        parameters.filter((parameter) => parameter.id > 0).map((parameter) => parameter.id)
      );

      for (const oldParameter of savedParameters) {
        if (!currentPersistedIds.has(oldParameter.id)) {
          await deleteParameter.mutateAsync({ parameterId: oldParameter.id });
        }
      }

      let persistedParameters = [...parameters];

      for (const parameter of parameters.filter((item) => item.id > 0)) {
        const previous = savedParameterMap.get(parameter.id);
        if (!previous) {
          continue;
        }

        const normalizedCurrent = normalizeParameter(parameter);
        const normalizedPrevious = normalizeParameter(previous);
        const payload: UpdateParameterInput = { parameterId: parameter.id };

        if (normalizedCurrent.fullName !== normalizedPrevious.fullName) {
          payload.fullName = normalizedCurrent.fullName;
        }
        if (
          normalizedCurrent.abbreviatedName !== normalizedPrevious.abbreviatedName
        ) {
          payload.abbreviatedName = normalizedCurrent.abbreviatedName;
        }
        if (normalizedCurrent.unit !== normalizedPrevious.unit) {
          payload.unit = normalizedCurrent.unit;
        }
        if (
          normalizedCurrent.showOnOverview !== normalizedPrevious.showOnOverview
        ) {
          payload.showOnOverview = normalizedCurrent.showOnOverview;
        }
        if (
          normalizedCurrent.displayDecimals !== normalizedPrevious.displayDecimals
        ) {
          payload.displayDecimals = normalizedCurrent.displayDecimals;
        }
        if (normalizedCurrent.lowerBound !== normalizedPrevious.lowerBound) {
          payload.lowerBound = normalizedCurrent.lowerBound;
        }
        if (normalizedCurrent.upperBound !== normalizedPrevious.upperBound) {
          payload.upperBound = normalizedCurrent.upperBound;
        }
        if (normalizedCurrent.displayOrder !== normalizedPrevious.displayOrder) {
          payload.displayOrder = normalizedCurrent.displayOrder;
        }

        if (Object.keys(payload).length > 1) {
          const updated = await updateParameter.mutateAsync(payload);
          persistedParameters = persistedParameters.map((item) =>
            item.id === updated.id ? { ...item, ...updated } : item
          );
        }
      }

      for (const parameter of parameters.filter((item) => item.id <= 0)) {
        const created = await createParameter.mutateAsync({
          systemId,
          fullName: parameter.fullName.trim(),
          abbreviatedName: parameter.abbreviatedName.trim(),
          unit: parameter.unit.trim(),
          showOnOverview: parameter.showOnOverview,
          displayDecimals: parameter.displayDecimals,
          lowerBound: parameter.lowerBound,
          upperBound: parameter.upperBound,
        });

        persistedParameters = persistedParameters.map((item) =>
          item.id === parameter.id ? created : item
        );
      }

      const nextSavedParameters = persistedParameters
        .filter((parameter) => parameter.id > 0 || !savedIds.has(parameter.id))
        .sort((a, b) => a.displayOrder - b.displayOrder);

      const currentEmailSet = new Set(
        sharedAccess.map((entry) => entry.email.toLowerCase())
      );
      const savedEmailSet = new Set(
        savedSharedAccess.map((entry) => entry.email.toLowerCase())
      );

      for (const savedEntry of savedSharedAccess) {
        if (!currentEmailSet.has(savedEntry.email.toLowerCase())) {
          await removeSharedAccess.mutateAsync({ accessId: savedEntry.id });
        }
      }

      let persistedSharedAccess = [...sharedAccess];
      for (const entry of sharedAccess) {
        if (!savedEmailSet.has(entry.email.toLowerCase())) {
          const created = await addSharedAccess.mutateAsync({
            systemId,
            email: entry.email,
          });
          persistedSharedAccess = persistedSharedAccess.map((current) =>
            current.id === entry.id ? created : current
          );
        }
      }

      const nextSavedSharedAccess = persistedSharedAccess
        .filter((entry) => entry.id > 0)
        .sort((a, b) => a.email.localeCompare(b.email));

      setSystemName(nextName);
      setSavedSystemName(nextName);
      setParameters(nextSavedParameters);
      setSavedParameters(nextSavedParameters);
      setSharedAccess(nextSavedSharedAccess);
      setSavedSharedAccess(nextSavedSharedAccess);
      setShareEmailInput("");
      setShareInputError(null);

      await utils.system.getById.invalidate({ id: systemId });
      await utils.system.listMine.invalidate();
      router.refresh();
      onSaveComplete?.();
    } finally {
      setIsSaving(false);
    }
  };

  const cancelChanges = () => {
    setSystemName(savedSystemName);
    setParameters(savedParameters);
    setSharedAccess(savedSharedAccess);
    setShareEmailInput("");
    setShareInputError(null);
    setEditingParameter(null);
    setCreatingParameter(null);
    setParameterToDelete(null);
  };

  return (
    <div className="flex flex-col gap-6">
      <label className="flex flex-col gap-1">
        <span className="text-sm font-semibold text-slate-900">System Name</span>
        <input
          value={systemName}
          className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-base text-slate-900"
          onChange={(event) => setSystemName(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setSystemName(savedSystemName);
            }
          }}
        />
      </label>

      <div className="flex flex-col gap-1">
        <h2 className="text-sm font-semibold text-slate-900">Share access</h2>
        <section className="rounded-xl border border-slate-200 bg-slate-50 p-3">
          <div className="flex gap-2">
            <input
              type="email"
              value={shareEmailInput}
              onChange={(event) => {
                setShareEmailInput(event.target.value);
                setShareInputError(null);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  addSharedAccessDraft();
                }
              }}
              placeholder="friend@example.com"
              className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900"
            />
            <button
              type="button"
              onClick={addSharedAccessDraft}
              disabled={isBusy}
              className="rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 disabled:opacity-50"
            >
              Add
            </button>
          </div>
          {shareInputError && (
            <p className="mt-2 text-xs text-red-700">{shareInputError}</p>
          )}
          <ul className="mt-3 flex flex-col gap-2">
            {sharedAccess.length === 0 ? (
              <li className="text-sm text-slate-600">No shared users yet.</li>
            ) : (
              sharedAccess.map((entry) => (
                <li
                  key={entry.id}
                  className="flex items-center justify-between rounded-md border border-slate-200 px-3 py-2"
                >
                  <span className="text-sm text-slate-800">{entry.email}</span>
                  <button
                    type="button"
                    onClick={() => removeSharedAccessDraft(entry.id)}
                    disabled={isBusy}
                    className="rounded-md p-1 text-slate-700 disabled:opacity-40"
                    aria-label={`Remove ${entry.email}`}
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
                </li>
              ))
            )}
          </ul>
        </section>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-900">Parameters</h2>
          <button
            type="button"
            onClick={() => setCreatingParameter(nextParameterDefaults)}
            disabled={isBusy}
            className="rounded-md p-1 text-slate-700 disabled:opacity-40"
            aria-label="Add parameter"
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
          </button>
        </div>

        <section className="rounded-xl border border-slate-200 bg-slate-50 p-3">

          <div className="mt-1">
            {orderedParameters.map((parameter, index) => (
              <div
                key={parameter.id}
                className="flex items-center justify-between border-b border-slate-200 py-2 last:border-b-0"
              >
                <p className="text-sm text-slate-900">{parameter.fullName}</p>
                <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => moveParameter(parameter.id, "up")}
                  disabled={isBusy || index === 0}
                  className="rounded-md p-1 text-slate-700 disabled:opacity-40"
                  aria-label={`Move ${parameter.fullName} up`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                    fill="currentColor"
                  >
                    <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => moveParameter(parameter.id, "down")}
                  disabled={isBusy || index === orderedParameters.length - 1}
                  className="rounded-md p-1 text-slate-700 disabled:opacity-40"
                  aria-label={`Move ${parameter.fullName} down`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                    fill="currentColor"
                  >
                    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => toggleOverviewVisibility(parameter)}
                  disabled={isBusy}
                  className="rounded-md p-1 text-slate-700 disabled:opacity-40"
                  aria-label={
                    parameter.showOnOverview
                      ? `Hide ${parameter.fullName} on overview`
                      : `Show ${parameter.fullName} on overview`
                  }
                >
                  {parameter.showOnOverview ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                      fill="currentColor"
                    >
                      <path d="M607.5-372.5Q660-425 660-500t-52.5-127.5Q555-680 480-680t-127.5 52.5Q300-575 300-500t52.5 127.5Q405-320 480-320t127.5-52.5Zm-204-51Q372-455 372-500t31.5-76.5Q435-608 480-608t76.5 31.5Q588-545 588-500t-31.5 76.5Q525-392 480-392t-76.5-31.5ZM214-281.5Q94-363 40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200q-146 0-266-81.5ZM480-500Zm207.5 160.5Q782-399 832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q113 0 207.5-59.5Z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                      fill="currentColor"
                    >
                      <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
                    </svg>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setEditingParameter(toDraft(parameter))}
                  disabled={isBusy}
                  className="rounded-md p-1 text-slate-700 disabled:opacity-40"
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
                  disabled={isBusy}
                  className="rounded-md p-1 text-slate-700 disabled:opacity-40"
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
      </div>

      <section className="pt-1">
        <details>
          <summary className="cursor-pointer text-sm font-semibold text-slate-700">
            Danger Zone
          </summary>
          <div className="mt-3">
            <button
              type="button"
              onClick={() => setConfirmDeleteSystemOpen(true)}
              disabled={isBusy}
              className="w-full rounded-lg border border-red-700 bg-red-700 px-4 py-2 text-sm font-semibold text-slate-50 disabled:opacity-50"
            >
              Delete System
            </button>
          </div>
        </details>
      </section>

      <section className="pt-2">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={cancelChanges}
            disabled={isBusy}
            className="flex-1 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={saveChanges}
            disabled={isBusy || !hasChanges || systemName.trim().length === 0}
            className="flex-1 rounded-lg border border-slate-700 bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-50 disabled:opacity-50"
          >
            {isSaving ? "Saving..." : "Save Changes"}
          </button>
        </div>
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
                          step="any"
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
                          step="any"
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
                        className="flex-1 rounded-lg border border-slate-700 bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-50"
                      >
                        Save
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
                          placeholder="Calcium"
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
                          placeholder="Ca"
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
                          step="any"
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
                          step="any"
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
                        className="flex-1 rounded-lg border border-slate-700 bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-50"
                      >
                        Create
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
                        onClick={() => {
                          if (!parameterToDelete) return;
                          setParameters((current) =>
                            current.filter(
                              (parameter) => parameter.id !== parameterToDelete.id
                            )
                          );
                          if (editingParameter?.id === parameterToDelete.id) {
                            setEditingParameter(null);
                          }
                          setParameterToDelete(null);
                        }}
                        className="flex-1 rounded-lg border border-red-700 bg-red-700 px-4 py-2 text-sm font-semibold text-slate-50"
                      >
                        Delete
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
