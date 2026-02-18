"use client";

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { formatRelativeDateTime } from "~/lib/date-display";
import { type RouterOutputs, api } from "~/trpc/react";

type FilterMediaItem = RouterOutputs["system"]["getFilterMedia"][number];

type FilterMediaSectionProps = {
  systemId: string;
  initialItems: RouterOutputs["system"]["getById"]["filterMedia"];
};

function getTodayDate() {
  const date = new Date();
  return date.toISOString().slice(0, 10);
}

function getNowLocalDateTime() {
  const date = new Date();
  const tzOffset = date.getTimezoneOffset();
  const local = new Date(date.getTime() - tzOffset * 60_000);
  return local.toISOString().slice(0, 16);
}

function formatDate(date: Date) {
  return formatRelativeDateTime(date);
}

export function InventoryMock({ systemId, initialItems }: FilterMediaSectionProps) {
  const utils = api.useUtils();
  const [addOpen, setAddOpen] = useState(false);
  const [replaceOpen, setReplaceOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [newItemName, setNewItemName] = useState("");
  const [newItemAddedAt, setNewItemAddedAt] = useState(getNowLocalDateTime);
  const [replacementDate, setReplacementDate] = useState(getNowLocalDateTime);
  const [removalDate, setRemovalDate] = useState(getNowLocalDateTime);

  const { data: items = [] } = api.system.getFilterMedia.useQuery(
    { systemId },
    { initialData: initialItems }
  );

  const createFilterMedia = api.system.createFilterMedia.useMutation({
    onSuccess: async () => {
      await utils.system.getFilterMedia.invalidate({ systemId });
      setNewItemName("");
      setNewItemAddedAt(getNowLocalDateTime());
      setAddOpen(false);
    },
  });

  const replaceFilterMedia = api.system.replaceFilterMedia.useMutation({
    onSuccess: async () => {
      await utils.system.getFilterMedia.invalidate({ systemId });
      setSelectedItemId(null);
      setReplaceOpen(false);
    },
  });

  const deleteFilterMedia = api.system.deleteFilterMedia.useMutation({
    onSuccess: async () => {
      await utils.system.getFilterMedia.invalidate({ systemId });
      setSelectedItemId(null);
      setRemovalDate(getNowLocalDateTime());
      setDeleteOpen(false);
    },
  });

  const selectedItem = useMemo(
    () => items.find((item) => item.id === selectedItemId) ?? null,
    [items, selectedItemId]
  );

  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-center justify-between px-5">
        <h2 className="text-lg font-semibold tracking-tight">Filter Media</h2>
        <button
          type="button"
          onClick={() => setAddOpen(true)}
          className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700"
        >
          Add
        </button>
      </div>

      {items.length === 0 ? (
        <p className="px-5 text-sm text-slate-600">No filter media added yet.</p>
      ) : (
        <div className="no-scrollbar overflow-x-auto">
          <ul className="flex w-max gap-2 px-5 pb-1">
            {items.map((item) => (
              <li
                key={item.id}
                className="w-64 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm"
              >
                <div className="mb-2 flex items-start justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      aria-label={`Replace ${item.name}`}
                      onClick={() => {
                        setSelectedItemId(item.id);
                        setReplacementDate(getNowLocalDateTime());
                        setReplaceOpen(true);
                      }}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="currentColor"
                      >
                        <path d="M482-160q-134 0-228-93t-94-227v-7l-64 64-56-56 160-160 160 160-56 56-64-64v7q0 100 70.5 170T482-240q26 0 51-6t49-18l60 60q-38 22-78 33t-82 11Zm278-161L600-481l56-56 64 64v-7q0-100-70.5-170T478-720q-26 0-51 6t-49 18l-60-60q38-22 78-33t82-11q134 0 228 93t94 227v7l64-64 56 56-160 160Z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      aria-label={`Delete ${item.name}`}
                      onClick={() => {
                        setSelectedItemId(item.id);
                        setRemovalDate(getNowLocalDateTime());
                        setDeleteOpen(true);
                      }}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="currentColor"
                      >
                        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <p className="text-xs text-slate-500">
                  {item.lastReplacedAt ? "Last replaced" : "Added"}{" "}
                  {formatDate(item.lastReplacedAt ?? item.addedAt)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}

      <Transition appear show={addOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setAddOpen(false)}>
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
                      Add Filter Media
                    </h3>

                    <DateTimeField
                      value={newItemAddedAt}
                      onChange={setNewItemAddedAt}
                    />

                    <label className="flex flex-col gap-1">
                      <span className="text-sm font-medium">Name</span>
                      <input
                        value={newItemName}
                        onChange={(event) => setNewItemName(event.target.value)}
                        className="rounded-md border border-slate-200 px-3 py-2"
                        placeholder="e.g. Carbon"
                      />
                    </label>

                    <div className="mt-2 flex gap-2">
                      <button
                        type="button"
                        onClick={() => setAddOpen(false)}
                        className="flex-1 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (newItemName.trim().length === 0) return;
                          createFilterMedia.mutate({
                            systemId,
                            name: newItemName.trim(),
                            addedAt: new Date(newItemAddedAt),
                          });
                        }}
                        disabled={
                          createFilterMedia.isPending ||
                          newItemName.trim().length === 0 ||
                          newItemAddedAt.trim().length === 0
                        }
                        className="flex-1 rounded-lg border border-slate-700 bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-50"
                      >
                        {createFilterMedia.isPending ? "Adding..." : "Add"}
                      </button>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={replaceOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setReplaceOpen(false)}
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
                      Replace {selectedItem?.name}?
                    </h3>
                    <DateTimeField
                      value={replacementDate}
                      onChange={setReplacementDate}
                    />

                    <div className="mt-2 flex gap-2">
                      <button
                        type="button"
                        onClick={() => setReplaceOpen(false)}
                        className="flex-1 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (!selectedItem) return;
                          replaceFilterMedia.mutate({
                            mediaId: selectedItem.id,
                            replacedAt: new Date(replacementDate),
                          });
                        }}
                        disabled={
                          replaceFilterMedia.isPending ||
                          !selectedItem ||
                          replacementDate.trim().length === 0
                        }
                        className="flex-1 rounded-lg border border-slate-700 bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-50"
                      >
                        {replaceFilterMedia.isPending ? "Saving..." : "Replace"}
                      </button>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={deleteOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setDeleteOpen(false)}
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
                      Remove {selectedItem?.name}?
                    </h3>
                    <DateTimeField value={removalDate} onChange={setRemovalDate} />
                    <div className="mt-2 flex gap-2">
                      <button
                        type="button"
                        onClick={() => setDeleteOpen(false)}
                        className="flex-1 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (!selectedItem) return;
                          deleteFilterMedia.mutate({
                            mediaId: selectedItem.id,
                            removedAt: new Date(removalDate),
                          });
                        }}
                        disabled={
                          deleteFilterMedia.isPending ||
                          !selectedItem ||
                          removalDate.trim().length === 0
                        }
                        className="flex-1 rounded-lg border border-slate-700 bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-50"
                      >
                        {deleteFilterMedia.isPending ? "Removing..." : "Remove"}
                      </button>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
}

function formatDateTimeForDisplay(value: string) {
  if (!value) return "";

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return formatRelativeDateTime(parsed);
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
