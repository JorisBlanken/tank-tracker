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

type LogDoseButtonProps = {
  systemId: string;
  className?: string;
};

const SUPPLEMENT_UNITS = ["ml", "drops", "g", "mg", "tsp", "tbsp", "capsules"];

function getNowLocalDateTime() {
  const date = new Date();
  const tzOffset = date.getTimezoneOffset();
  const local = new Date(date.getTime() - tzOffset * 60_000);
  return local.toISOString().slice(0, 16);
}

export function LogDoseButton({ systemId, className }: LogDoseButtonProps) {
  const router = useRouter();
  const utils = api.useUtils();

  const [open, setOpen] = useState(false);
  const [loggedAt, setLoggedAt] = useState(getNowLocalDateTime);
  const [supplementType, setSupplementType] = useState("");
  const [amount, setAmount] = useState("");
  const [unit, setUnit] = useState("ml");
  const [supplementSuggestions, setSupplementSuggestions] = useState<string[]>([
    "All-for-Reef",
    "Alkalinity Buffer",
    "Calcium Chloride",
  ]);

  const { data: savedSupplementProducts } =
    api.system.listSupplementProducts.useQuery({
      systemId,
    });

  const logSupplementDose = api.system.logSupplementDose.useMutation({
    onSuccess: async () => {
      await utils.system.getActivity.invalidate({ systemId });
      await utils.system.listSupplementProducts.invalidate({ systemId });
      router.refresh();

      const trimmed = supplementType.trim();
      if (
        trimmed.length > 0 &&
        !supplementSuggestions.some(
          (existing) => existing.toLowerCase() === trimmed.toLowerCase()
        )
      ) {
        setSupplementSuggestions((current) => [trimmed, ...current].slice(0, 8));
      }

      setLoggedAt(getNowLocalDateTime());
      setSupplementType("");
      setAmount("");
      setUnit("ml");
      setOpen(false);
    },
  });

  useEffect(() => {
    if (!savedSupplementProducts) return;
    setSupplementSuggestions((current) => {
      const merged = new Set([...savedSupplementProducts, ...current]);
      return Array.from(merged).slice(0, 12);
    });
  }, [savedSupplementProducts]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Log dose"
        className={
          className ??
          "flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-700"
        }
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M10.5 17.5H13.5V15H16V12H13.5V9.5H10.5V12H8V15H10.5V17.5ZM7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V8C5 7.45 5.19583 6.97917 5.5875 6.5875C5.97917 6.19583 6.45 6 7 6H15L17 8H7V19H17V8L19 10V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM6 5V3H15V5H6Z" />
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
                    <h3 className="text-lg font-semibold">Log Supplement Dose</h3>

                    <DateTimeField value={loggedAt} onChange={setLoggedAt} />

                    <label className="flex flex-col gap-1">
                      <span className="text-sm font-medium">Supplement</span>
                      <input
                        type="text"
                        value={supplementType}
                        list="dose-supplement-product-suggestions"
                        onChange={(event) => setSupplementType(event.target.value)}
                        className="rounded-md border border-slate-200 px-3 py-2"
                        placeholder="Enter product or choose recent"
                      />
                      <datalist id="dose-supplement-product-suggestions">
                        {supplementSuggestions.map((product) => (
                          <option key={product} value={product} />
                        ))}
                      </datalist>
                    </label>

                    <label className="flex flex-col gap-1">
                      <span className="text-sm font-medium">Amount</span>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          value={amount}
                          onChange={(event) => setAmount(event.target.value)}
                          className="w-full rounded-md border border-slate-200 px-3 py-2"
                        />
                        <select
                          value={unit}
                          onChange={(event) => setUnit(event.target.value)}
                          className="rounded-md border border-slate-200 px-2 py-2"
                        >
                          {SUPPLEMENT_UNITS.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
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
                          const parsedAmount = Number(amount);
                          if (Number.isNaN(parsedAmount)) return;
                          logSupplementDose.mutate({
                            systemId,
                            loggedAt: new Date(loggedAt),
                            product: supplementType.trim(),
                            amount: parsedAmount,
                            unit,
                          });
                        }}
                        disabled={
                          logSupplementDose.isPending ||
                          loggedAt.trim().length === 0 ||
                          supplementType.trim().length === 0 ||
                          amount.trim().length === 0 ||
                          Number.isNaN(Number(amount))
                        }
                        className="flex-1 rounded-lg border border-slate-700 bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-50 disabled:opacity-50"
                      >
                        {logSupplementDose.isPending ? "Saving..." : "Save"}
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
