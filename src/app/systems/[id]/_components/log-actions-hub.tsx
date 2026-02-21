"use client";

import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";

import { formatRelativeDateTime } from "~/lib/date-display";
import { api } from "~/trpc/react";

type ActiveTray = "water_change" | "supplement_dose" | null;

type LogActionsHubProps = {
  systemId: string;
};

function getNowLocalDateTime() {
  const date = new Date();
  const tzOffset = date.getTimezoneOffset();
  const local = new Date(date.getTime() - tzOffset * 60_000);
  return local.toISOString().slice(0, 16);
}

const SUPPLEMENT_UNITS = ["ml", "drops", "g", "mg", "tsp", "tbsp", "capsules"];

export function LogActionsHub({ systemId }: LogActionsHubProps) {
  const router = useRouter();
  const utils = api.useUtils();

  const [activeTray, setActiveTray] = useState<ActiveTray>(null);

  const [waterChangeLoggedAt, setWaterChangeLoggedAt] = useState(getNowLocalDateTime);
  const [waterChangeVolume, setWaterChangeVolume] = useState("");

  const [supplementLoggedAt, setSupplementLoggedAt] = useState(getNowLocalDateTime);
  const [supplementType, setSupplementType] = useState("");
  const [supplementAmount, setSupplementAmount] = useState("");
  const [supplementUnit, setSupplementUnit] = useState("ml");
  const [supplementSuggestions, setSupplementSuggestions] = useState<string[]>([
    "All-for-Reef",
    "Alkalinity Buffer",
    "Calcium Chloride",
  ]);

  const { data: savedSupplementProducts } =
    api.system.listSupplementProducts.useQuery({
      systemId,
    });

  const logWaterChange = api.system.logWaterChange.useMutation({
    onSuccess: async () => {
      await utils.system.getActivity.invalidate({ systemId });
      router.refresh();
      setWaterChangeLoggedAt(getNowLocalDateTime());
      setWaterChangeVolume("");
      setActiveTray(null);
    },
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
      setSupplementLoggedAt(getNowLocalDateTime());
      setSupplementType("");
      setSupplementAmount("");
      setSupplementUnit("ml");
      setActiveTray(null);
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
      <Menu as="div" className="fixed right-6 bottom-6 z-40">
        {({ open, close }) => (
          <>
            <Transition
              as={Fragment}
              show={open}
              enter="transition duration-150 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition duration-100 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <button
                type="button"
                className="fixed inset-0 bg-slate-950/20"
                aria-label="Close log actions"
                onClick={close}
              />
            </Transition>

            <MenuButton
              aria-label="Open log actions"
              className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-slate-700 text-slate-50 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28" fill="currentColor">
                <path d="M440-120v-320H120v-80h320v-320h80v320h320v80H520v320h-80Z"/>
              </svg>
            </MenuButton>

            <Transition
              as={Fragment}
              show={open}
              enter="transition duration-150 ease-out"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition duration-100 ease-in"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <MenuItems className="absolute right-0 bottom-20 z-10 flex flex-col items-end gap-3">
                <MenuItem>
                  <button
                    type="button"
                    className="flex w-fit items-center justify-end gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-right text-base font-semibold whitespace-nowrap text-slate-800 shadow-sm"
                    onClick={() => setActiveTray("supplement_dose")}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
                      <path d="M120-760v-80h480v80H120Zm180 500h120v-100h100v-120H420v-100H300v100H200v120h100v100ZM160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h400q33 0 56.5 23.5T640-640v440q0 33-23.5 56.5T560-120H160Zm0-80h400v-440H160v440Zm600-210q-35-17-57.5-56.5T680-560q0-68 34.5-114t85.5-46q51 0 85.5 46T920-560q0 54-22.5 93.5T840-410v250q0 17-11.5 28.5T800-120q-17 0-28.5-11.5T760-160v-250Zm66-91.5q14-21.5 14-58.5t-14-58.5Q812-640 800-640t-26 21.5Q760-597 760-560t14 58.5q14 21.5 26 21.5t26-21.5ZM360-420Zm440-140Z"/>
                    </svg>
                    Supplement Dose
                  </button>
                </MenuItem>
                <MenuItem>
                  <button
                    type="button"
                    className="flex w-fit items-center justify-end gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-right text-base font-semibold whitespace-nowrap text-slate-800 shadow-sm"
                    onClick={() => setActiveTray("water_change")}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
                      <path d="M491-200q12-1 20.5-9.5T520-230q0-14-9-22.5t-23-7.5q-41 3-87-22.5T343-375q-2-11-10.5-18t-19.5-7q-14 0-23 10.5t-6 24.5q17 91 80 130t127 35Zm-239.5 26Q160-268 160-408q0-100 79.5-217.5T480-880q161 137 240.5 254.5T800-408q0 140-91.5 234T480-80q-137 0-228.5-94ZM652-230.5Q720-301 720-408q0-73-60.5-165T480-774Q361-665 300.5-573T240-408q0 107 68 177.5T480-160q104 0 172-70.5ZM480-480Z"/>
                    </svg>
                    Water Change
                  </button>
                </MenuItem>
              </MenuItems>
            </Transition>
          </>
        )}
      </Menu>

      {activeTray === "water_change" && (
        <MockTray
          title="Log Water Change"
          onClose={() => setActiveTray(null)}
          saveLabel={logWaterChange.isPending ? "Saving..." : "Save"}
          saveDisabled={
            logWaterChange.isPending ||
            waterChangeLoggedAt.trim().length === 0 ||
            waterChangeVolume.trim().length === 0 ||
            Number.isNaN(Number(waterChangeVolume))
          }
          onSave={() => {
            const gallons = Number(waterChangeVolume);
            if (Number.isNaN(gallons)) return;
            logWaterChange.mutate({
              systemId,
              loggedAt: new Date(waterChangeLoggedAt),
              gallons,
            });
          }}
        >
          <DateTimeField
            value={waterChangeLoggedAt}
            onChange={setWaterChangeLoggedAt}
          />
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium">Volume</span>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={waterChangeVolume}
                onChange={(event) => setWaterChangeVolume(event.target.value)}
                className="w-full rounded-md border border-slate-200 px-3 py-2"
              />
              <span className="text-sm text-slate-600">gallons</span>
            </div>
          </label>
        </MockTray>
      )}

      {activeTray === "supplement_dose" && (
        <MockTray
          title="Log Supplement Dose"
          onClose={() => setActiveTray(null)}
          saveLabel={logSupplementDose.isPending ? "Saving..." : "Save"}
          saveDisabled={
            logSupplementDose.isPending ||
            supplementLoggedAt.trim().length === 0 ||
            supplementType.trim().length === 0 ||
            supplementAmount.trim().length === 0 ||
            Number.isNaN(Number(supplementAmount))
          }
          onSave={() => {
            const amount = Number(supplementAmount);
            if (Number.isNaN(amount)) return;
            logSupplementDose.mutate({
              systemId,
              loggedAt: new Date(supplementLoggedAt),
              product: supplementType.trim(),
              amount,
              unit: supplementUnit,
            });
          }}
        >
          <DateTimeField
            value={supplementLoggedAt}
            onChange={setSupplementLoggedAt}
          />
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium">Supplement</span>
            <input
              type="text"
              value={supplementType}
              list="supplement-product-suggestions"
              onChange={(event) => setSupplementType(event.target.value)}
              className="rounded-md border border-slate-200 px-3 py-2"
              placeholder="Enter product or choose recent"
            />
            <datalist id="supplement-product-suggestions">
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
                value={supplementAmount}
                onChange={(event) => setSupplementAmount(event.target.value)}
                className="w-full rounded-md border border-slate-200 px-3 py-2"
              />
              <select
                value={supplementUnit}
                onChange={(event) => setSupplementUnit(event.target.value)}
                className="rounded-md border border-slate-200 px-2 py-2"
              >
                {SUPPLEMENT_UNITS.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </div>
          </label>
        </MockTray>
      )}
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

function MockTray({
  title,
  children,
  onClose,
  onSave,
  saveLabel = "Save (mock)",
  saveDisabled = false,
}: {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  onSave?: () => void;
  saveLabel?: string;
  saveDisabled?: boolean;
}) {
  return (
    <TrayDialog open={true} onClose={onClose}>
      <h3 className="text-lg font-semibold">{title}</h3>
      {children}
      <div className="mt-2 flex gap-2">
        <button
          type="button"
          onClick={onClose}
          className="flex-1 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium"
        >
          Close
        </button>
        <button
          type="button"
          onClick={onSave ?? onClose}
          disabled={saveDisabled}
          className="flex-1 rounded-lg border border-slate-700 bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-50 disabled:opacity-50"
        >
          {saveLabel}
        </button>
      </div>
    </TrayDialog>
  );
}

function TrayDialog({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
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
                  {children}
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
