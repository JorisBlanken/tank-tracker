"use client";

import { useEffect, useMemo } from "react";

import { formatRelativeDateTime, getRelativeDayLabel } from "~/lib/date-display";
import { type RouterOutputs } from "~/trpc/react";
import { api } from "~/trpc/react";

type ActivityLogProps = {
  systemId: string;
  initialPage?: RouterOutputs["system"]["getActivity"];
};

type ActivityItem = RouterOutputs["system"]["getActivity"]["items"][number];

function formatActivityDate(date: Date) {
  return formatRelativeDateTime(date);
}

function formatValue(value: number, decimals: number) {
  return value.toFixed(decimals);
}

function formatCompactNumber(value: number) {
  if (Number.isInteger(value)) return value.toString();
  return value.toString();
}

function getLocalDayKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDayHeading(date: Date, now: Date) {
  return getRelativeDayLabel(date, now);
}

export function ActivityLog({ systemId, initialPage }: ActivityLogProps) {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = api.system.getActivity.useInfiniteQuery(
    { systemId, limit: 20 },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      initialData: initialPage
        ? {
            pages: [initialPage],
            pageParams: [undefined],
          }
        : undefined,
    }
  );

  const items = useMemo(
    () => data?.pages.flatMap((page) => page.items) ?? [],
    [data]
  );

  const groups = useMemo(() => {
    const now = new Date();
    const result: Array<{ key: string; heading: string; items: ActivityItem[] }> =
      [];

    for (const item of items) {
      const activityDate = new Date(item.loggedAt ?? item.createdAt);
      const key = getLocalDayKey(activityDate);
      const last = result[result.length - 1];

      if (last?.key === key) {
        last.items.push(item);
      } else {
        result.push({
          key,
          heading: formatDayHeading(activityDate, now),
          items: [item],
        });
      }
    }

    return result;
  }, [items]);

  useEffect(() => {
    const onScroll = () => {
      const distanceToBottom =
        document.documentElement.scrollHeight -
        (window.scrollY + window.innerHeight);

      if (distanceToBottom < 160 && hasNextPage && !isFetchingNextPage) {
        void fetchNextPage();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <div>
      {isLoading ? (
        <p className="text-sm text-slate-600">Loading activity...</p>
      ) : items.length === 0 ? (
        <p className="text-sm text-slate-600">No activity yet.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {groups.map((group) => (
            <section key={group.key} className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold text-slate-700">{group.heading}</h3>
              <ul className="relative flex flex-col gap-3 pl-6">
                {group.items.map((item, index) => (
                  <li key={item.id} className="relative">
                    {index < group.items.length - 1 && (
                      <span className="absolute bottom-[-34px] left-[-13px] top-[22px] w-px bg-slate-700/80" />
                    )}
                    <span className="absolute top-4 -left-[18px] h-3 w-3 rounded-full border border-slate-700/80 bg-slate-950" />
                    <div className="rounded-xl border border-slate-700/80 bg-slate-50 px-4 py-3 shadow-sm">
                    {item.type === "SYSTEM_CREATED" ? (
                      <>
                        <p className="text-base font-semibold text-slate-900">System Created</p>
                        <p className="text-xs text-slate-500">
                          {formatActivityDate(new Date(item.createdAt))}
                        </p>
                      </>
                    ) : item.type === "WATER_CHANGE_LOGGED" ? (
                      <>
                        <p className="text-base font-semibold text-slate-900">Water Changed</p>
                        <p className="text-xs text-slate-500">
                          {formatActivityDate(
                            new Date(item.loggedAt ?? item.createdAt)
                          )}
                        </p>
                        <p className="text-base text-slate-900">
                          {item.value !== null ? formatCompactNumber(item.value) : "--"}{" "}
                          {(item.unit ?? "gallons").replace(/^./, (c) => c.toUpperCase())}
                        </p>
                      </>
                    ) : item.type === "SUPPLEMENT_DOSED" ? (
                      <>
                        <p className="text-base font-semibold text-slate-900">Supplement Added</p>
                        <p className="text-xs text-slate-500">
                          {formatActivityDate(
                            new Date(item.loggedAt ?? item.createdAt)
                          )}
                        </p>
                        <p className="text-base text-slate-900">
                          {item.value !== null ? formatCompactNumber(item.value) : "--"}
                          {item.unit ?? ""} {item.product ?? "Unknown product"}
                        </p>
                      </>
                    ) : item.type === "NOTE_LOGGED" ? (
                      <>
                        <p className="text-base font-semibold text-slate-900">Note Added</p>
                        <p className="text-xs text-slate-500">
                          {formatActivityDate(
                            new Date(item.loggedAt ?? item.createdAt)
                          )}
                        </p>
                        <p className="text-base text-slate-900">{item.note ?? ""}</p>
                      </>
                    ) : item.type === "FILTER_MEDIA_ADDED" ? (
                      <>
                        <p className="text-base font-semibold text-slate-900">Filter Media Added</p>
                        <p className="text-xs text-slate-500">
                          {formatActivityDate(
                            new Date(item.loggedAt ?? item.createdAt)
                          )}
                        </p>
                        <p className="text-base text-slate-900">{item.note ?? "Unknown media"}</p>
                      </>
                    ) : item.type === "FILTER_MEDIA_REPLACED" ? (
                      <>
                        <p className="text-base font-semibold text-slate-900">Filter Media Replaced</p>
                        <p className="text-xs text-slate-500">
                          {formatActivityDate(
                            new Date(item.loggedAt ?? item.createdAt)
                          )}
                        </p>
                        <p className="text-base text-slate-900">{item.note ?? "Unknown media"}</p>
                      </>
                    ) : item.type === "FILTER_MEDIA_REMOVED" ? (
                      <>
                        <p className="text-base font-semibold text-slate-900">Filter Media Removed</p>
                        <p className="text-xs text-slate-500">
                          {formatActivityDate(
                            new Date(item.loggedAt ?? item.createdAt)
                          )}
                        </p>
                        <p className="text-base text-slate-900">{item.note ?? "Unknown media"}</p>
                      </>
                    ) : (
                      <>
                        <p className="text-base font-semibold text-slate-900">Parameter Logged</p>
                        <p className="text-xs text-slate-500">
                          {formatActivityDate(
                            new Date(item.loggedAt ?? item.createdAt)
                          )}
                        </p>
                        <p className="text-base text-slate-900">
                          {item.parameter?.abbreviatedName ?? "Parameter"}{" "}
                          {item.value !== null && item.parameter
                            ? formatValue(item.value, item.parameter.displayDecimals)
                            : "--"}
                          {item.parameter?.unit ? ` ${item.parameter.unit}` : ""}
                        </p>
                      </>
                    )}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}

      <div className="mt-3">
        {isFetchingNextPage && (
          <p className="text-xs text-slate-500">Loading more...</p>
        )}
        {!isFetchingNextPage && hasNextPage && (
          <button
            type="button"
            onClick={() => fetchNextPage()}
            className="text-xs font-medium text-slate-700 underline"
          >
            Load more
          </button>
        )}
        {!hasNextPage && items.length > 0 && (
          <p className="text-xs text-slate-500">End of activity</p>
        )}
      </div>
    </div>
  );
}
