"use client";

import Link from "next/link";
import { useState } from "react";

import { AddSystemForm } from "~/app/_components/add-system-form";
import { api } from "~/trpc/react";

type SystemListParameter = {
  id: number;
  abbreviatedName: string;
  unit: string;
  showOnOverview: boolean;
  displayDecimals: number;
  logs: { value: number }[];
};

type SystemListItem = {
  id: string;
  name: string;
  displayOrder: number;
  parameters: SystemListParameter[];
};

type SystemsListProps = {
  initialSystems: SystemListItem[];
  allowReorder?: boolean;
  showEmptyState?: boolean;
};

function formatNumber(value: number, decimals: number) {
  return value.toFixed(decimals);
}

export function SystemsList({
  initialSystems,
  allowReorder = true,
  showEmptyState = true,
}: SystemsListProps) {
  const [systems, setSystems] = useState(
    [...initialSystems].sort((a, b) => a.displayOrder - b.displayOrder)
  );

  const moveSystem = api.system.moveSystem.useMutation();

  const moveSystemOptimistic = (systemId: string, direction: "up" | "down") => {
    setSystems((current) => {
      const currentIndex = current.findIndex((system) => system.id === systemId);
      if (currentIndex === -1) {
        return current;
      }

      const targetIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;
      if (targetIndex < 0 || targetIndex >= current.length) {
        return current;
      }

      const reordered = [...current];
      const currentSystem = reordered[currentIndex];
      const targetSystem = reordered[targetIndex];
      if (!currentSystem || !targetSystem) {
        return current;
      }

      reordered[currentIndex] = targetSystem;
      reordered[targetIndex] = currentSystem;

      return reordered.map((system, index) => ({ ...system, displayOrder: index }));
    });

    moveSystem.mutate({ systemId, direction });
  };

  if (systems.length === 0) {
    if (!showEmptyState) {
      return null;
    }

    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3">
        <p className="text-sm text-slate-600">Add a system to get started!</p>
        <AddSystemForm
          label="Add a System"
          className="flex h-10 items-center justify-center rounded-full border border-slate-200 bg-slate-100 px-4 text-slate-700"
        />
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-3">
      {systems.map((system, index) => {
        const visibleParameters = system.parameters.filter(
          (parameter) => parameter.showOnOverview
        );

        return (
          <li key={system.id}>
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-base font-medium text-slate-900 shadow-sm">
              <div className="mb-3 flex items-center justify-between gap-2">
                <Link href={`/systems/${system.id}`} className="min-w-0 truncate">
                  {system.name}
                </Link>
                <div className="flex items-center gap-1">
                  {allowReorder && (
                    <>
                      <button
                        type="button"
                        onClick={() => moveSystemOptimistic(system.id, "up")}
                        disabled={index === 0}
                        className="rounded-md p-1 text-slate-700 disabled:opacity-40"
                        aria-label={`Move ${system.name} up`}
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
                        onClick={() => moveSystemOptimistic(system.id, "down")}
                        disabled={index === systems.length - 1}
                        className="rounded-md p-1 text-slate-700 disabled:opacity-40"
                        aria-label={`Move ${system.name} down`}
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
                    </>
                  )}
                </div>
              </div>
              <Link href={`/systems/${system.id}`} className="block">
                {visibleParameters.length > 0 && (
                  <ul className="flex w-full">
                    {visibleParameters.map((parameter) => (
                      <li
                        key={parameter.id}
                        className="flex flex-1 flex-col gap-1 border-r border-slate-300 px-1 py-1 text-center last:border-r-0"
                      >
                        <p className="text-xs font-semibold leading-tight">
                          {parameter.abbreviatedName}
                        </p>
                        <p className="text-[10px] text-slate-500">
                          {parameter.unit || " "}
                        </p>
                        <p className="text-sm font-semibold leading-tight">
                          {parameter.logs[0]
                            ? formatNumber(
                                parameter.logs[0].value,
                                parameter.displayDecimals
                              )
                            : "--"}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
