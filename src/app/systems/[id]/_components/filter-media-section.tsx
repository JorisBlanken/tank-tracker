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

type FilterMediaSectionProps = {
  systemId: string;
  initialMediaItems: RouterOutputs["system"]["getById"]["filterMedia"];
};

function getNowLocalDateTime() {
  const date = new Date();
  const tzOffset = date.getTimezoneOffset();
  const local = new Date(date.getTime() - tzOffset * 60_000);
  return local.toISOString().slice(0, 16);
}

function formatDate(date: Date) {
  return formatRelativeDateTime(date);
}

export function FilterMediaSection({
  systemId,
  initialMediaItems,
}: FilterMediaSectionProps) {
  const utils = api.useUtils();
  const [addOpen, setAddOpen] = useState(false);
  const [replaceOpen, setReplaceOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedMediaId, setSelectedMediaId] = useState<number | null>(null);
  const [newMediaName, setNewMediaName] = useState("");
  const [newMediaAddedAt, setNewMediaAddedAt] = useState(getNowLocalDateTime);
  const [newMediaDurationDays, setNewMediaDurationDays] = useState("");
  const [replacementDate, setReplacementDate] = useState(getNowLocalDateTime);
  const [replacementDurationDays, setReplacementDurationDays] = useState("");
  const [removalDate, setRemovalDate] = useState(getNowLocalDateTime);

  const { data: mediaItems = [] } = api.system.getFilterMedia.useQuery(
    { systemId },
    { initialData: initialMediaItems }
  );

  const createFilterMedia = api.system.createFilterMedia.useMutation({
    onSuccess: async () => {
      await utils.system.getFilterMedia.invalidate({ systemId });
      setNewMediaName("");
      setNewMediaAddedAt(getNowLocalDateTime());
      setNewMediaDurationDays("");
      setAddOpen(false);
    },
  });

  const replaceFilterMedia = api.system.replaceFilterMedia.useMutation({
    onSuccess: async () => {
      await utils.system.getFilterMedia.invalidate({ systemId });
      setSelectedMediaId(null);
      setReplacementDurationDays("");
      setReplaceOpen(false);
    },
  });

  const deleteFilterMedia = api.system.deleteFilterMedia.useMutation({
    onSuccess: async () => {
      await utils.system.getFilterMedia.invalidate({ systemId });
      setSelectedMediaId(null);
      setRemovalDate(getNowLocalDateTime());
      setDeleteOpen(false);
    },
  });

  const selectedMedia = useMemo(
    () => mediaItems.find((media) => media.id === selectedMediaId) ?? null,
    [mediaItems, selectedMediaId]
  );

  return (
    <section className="min-w-0 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold tracking-tight">Filter Media</h2>
        <button
          type="button"
          onClick={() => setAddOpen(true)}
          aria-label="Add filter media"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-700"
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

      {mediaItems.length === 0 ? (
        <p className="text-sm text-slate-600">No filter media added yet.</p>
      ) : (
        <div className="no-scrollbar -mx-5 w-[calc(100%+2.5rem)] max-w-none overflow-x-auto overflow-y-hidden px-5 lg:-mx-8 lg:w-[calc(100%+4rem)] lg:px-8">
          <ul className="flex min-w-max flex-nowrap gap-2 pb-1">
            {mediaItems.map((media) => (
              <li
                key={media.id}
                className="w-64 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm"
              >
                <div className="mb-2 flex items-start justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-900">{media.name}</p>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      aria-label={`Replace ${media.name}`}
                      onClick={() => {
                        setSelectedMediaId(media.id);
                        setReplacementDate(getNowLocalDateTime());
                        setReplacementDurationDays(
                          media.replacementIntervalDays?.toString() ?? ""
                        );
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
                      aria-label={`Delete ${media.name}`}
                      onClick={() => {
                        setSelectedMediaId(media.id);
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
                  {media.lastReplacedAt ? "Last replaced" : "Added"}{" "}
                  {formatDate(media.lastReplacedAt ?? media.addedAt)}
                </p>
                {typeof media.replacementIntervalDays === "number" &&
                  media.replacementIntervalDays > 0 && (
                    <FilterMediaLifetimeBar media={media} />
                  )}
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
                      Add Filter Media
                    </h3>

                    <DateTimeField
                      value={newMediaAddedAt}
                      onChange={setNewMediaAddedAt}
                    />

                    <label className="flex flex-col gap-1">
                      <span className="text-sm font-medium">Name</span>
                      <input
                        value={newMediaName}
                        onChange={(event) => setNewMediaName(event.target.value)}
                        className="rounded-md border border-slate-200 px-3 py-2"
                        placeholder="e.g. Carbon"
                      />
                    </label>

                    <label className="flex flex-col gap-1">
                      <span className="text-sm font-medium">
                        Duration (days, optional)
                      </span>
                      <input
                        type="number"
                        min={1}
                        step={1}
                        value={newMediaDurationDays}
                        onChange={(event) => setNewMediaDurationDays(event.target.value)}
                        className="rounded-md border border-slate-200 px-3 py-2"
                        placeholder="e.g. 30"
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
                          if (newMediaName.trim().length === 0) return;
                          const parsedDuration =
                            newMediaDurationDays.trim().length > 0
                              ? Number(newMediaDurationDays)
                              : undefined;
                          if (
                            parsedDuration !== undefined &&
                            (!Number.isInteger(parsedDuration) || parsedDuration <= 0)
                          ) {
                            return;
                          }
                          createFilterMedia.mutate({
                            systemId,
                            name: newMediaName.trim(),
                            addedAt: new Date(newMediaAddedAt),
                            durationDays: parsedDuration,
                          });
                        }}
                        disabled={
                          createFilterMedia.isPending ||
                          newMediaName.trim().length === 0 ||
                          newMediaAddedAt.trim().length === 0 ||
                          (newMediaDurationDays.trim().length > 0 &&
                            (!Number.isInteger(Number(newMediaDurationDays)) ||
                              Number(newMediaDurationDays) <= 0))
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
                      Replace {selectedMedia?.name}?
                    </h3>
                    <DateTimeField
                      value={replacementDate}
                      onChange={setReplacementDate}
                    />

                    <label className="flex flex-col gap-1">
                      <span className="text-sm font-medium">
                        Duration (days, optional)
                      </span>
                      <input
                        type="number"
                        min={1}
                        step={1}
                        value={replacementDurationDays}
                        onChange={(event) =>
                          setReplacementDurationDays(event.target.value)
                        }
                        className="rounded-md border border-slate-200 px-3 py-2"
                        placeholder="e.g. 30"
                      />
                    </label>

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
                          if (!selectedMedia) return;
                          const parsedDuration =
                            replacementDurationDays.trim().length > 0
                              ? Number(replacementDurationDays)
                              : undefined;
                          if (
                            parsedDuration !== undefined &&
                            (!Number.isInteger(parsedDuration) ||
                              parsedDuration <= 0)
                          ) {
                            return;
                          }
                          replaceFilterMedia.mutate({
                            mediaId: selectedMedia.id,
                            replacedAt: new Date(replacementDate),
                            durationDays: parsedDuration,
                          });
                        }}
                        disabled={
                          replaceFilterMedia.isPending ||
                          !selectedMedia ||
                          replacementDate.trim().length === 0 ||
                          (replacementDurationDays.trim().length > 0 &&
                            (!Number.isInteger(Number(replacementDurationDays)) ||
                              Number(replacementDurationDays) <= 0))
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
                      Remove {selectedMedia?.name}?
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
                          if (!selectedMedia) return;
                          deleteFilterMedia.mutate({
                            mediaId: selectedMedia.id,
                            removedAt: new Date(removalDate),
                          });
                        }}
                        disabled={
                          deleteFilterMedia.isPending ||
                          !selectedMedia ||
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

function FilterMediaLifetimeBar({
  media,
}: {
  media: RouterOutputs["system"]["getById"]["filterMedia"][number];
}) {
  const durationDays = media.replacementIntervalDays;
  if (!durationDays || durationDays <= 0) return null;

  const baseDate = media.lastReplacedAt ?? media.addedAt;
  const baseMs = baseDate.getTime();
  const durationMs = durationDays * 24 * 60 * 60 * 1000;
  const elapsedMs = Date.now() - baseMs;
  const ratioRemaining = Math.max(0, Math.min(1, 1 - elapsedMs / durationMs));
  const remainingPercent = Math.round(ratioRemaining * 100);
  const barColorClass =
    remainingPercent === 0
      ? "bg-red-500"
      : ratioRemaining < 0.1
        ? "bg-amber-400"
        : "bg-emerald-500";
  const remainingTextClass =
    remainingPercent === 0 ? "text-red-500" : "text-slate-500";

  return (
    <div className="mt-2">
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
        <div
          className={`h-full ${barColorClass}`}
          style={{ width: remainingPercent === 0 ? "2px" : `${remainingPercent}%` }}
        />
      </div>
      <p className={`mt-1 text-[11px] ${remainingTextClass}`}>
        {remainingPercent}% remaining
      </p>
    </div>
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
