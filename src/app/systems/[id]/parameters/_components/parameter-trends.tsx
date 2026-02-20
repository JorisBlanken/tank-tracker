"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { getRelativeDayLabel } from "~/lib/date-display";
import { api } from "~/trpc/react";

type Parameter = {
  id: number;
  fullName: string;
  abbreviatedName: string;
  unit: string;
  displayDecimals: number;
  lowerBound: number;
  upperBound: number;
};

type ParameterTrendsProps = {
  parameters: Parameter[];
};

function formatValue(value: number, decimals: number) {
  return value.toFixed(decimals);
}

function formatPointDate(date: Date) {
  return getRelativeDayLabel(date);
}

function formatPointTime(date: Date) {
  return new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

function toGraphScale(lowerBound: number, upperBound: number) {
  const mean = (lowerBound + upperBound) / 2;
  const rawSigma = (upperBound - lowerBound) / 2;
  const sigma = rawSigma > 0 ? rawSigma : Math.max(Math.abs(mean) * 0.05, 1);
  const min = mean - 1.5 * sigma;
  const max = mean + 1.5 * sigma;
  return { min, max, lowerBound, upperBound };
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function ParameterTrends({ parameters }: ParameterTrendsProps) {
  if (parameters.length === 0) {
    return <p className="px-5 text-sm text-slate-600">No parameters yet.</p>;
  }

  return (
    <div className="flex flex-col divide-y divide-slate-700/80">
      {parameters.map((parameter) => (
        <ParameterTrendRow key={parameter.id} parameter={parameter} />
      ))}
    </div>
  );
}

function ParameterTrendRow({ parameter }: { parameter: Parameter }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [hasAutoScrolled, setHasAutoScrolled] = useState(false);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = api.system.getParameterLogsPage.useInfiniteQuery(
    { parameterId: parameter.id, limit: 20 },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );

  const points = useMemo(() => {
    const descending = data?.pages.flatMap((page) => page.items) ?? [];
    return [...descending].sort((a, b) => {
      const aTs = new Date(a.loggedAt).getTime();
      const bTs = new Date(b.loggedAt).getTime();
      if (aTs !== bTs) return aTs - bTs;
      return a.id - b.id;
    });
  }, [data]);

  const graph = useMemo(
    () => toGraphScale(parameter.lowerBound, parameter.upperBound),
    [parameter.lowerBound, parameter.upperBound]
  );

  const [minViewportWidth, setMinViewportWidth] = useState(320);
  useEffect(() => {
    const update = () => {
      setMinViewportWidth(Math.max(window.innerWidth - 40, 320));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const xPadding = 56;
  const minPointSpacing = 56;
  const graphHeight = 200;
  const topPadding = 28;
  const bottomPadding = 64;
  const plotHeight = graphHeight - topPadding - bottomPadding;
  const widthFromPoints = Math.max(points.length * minPointSpacing + xPadding * 2, minPointSpacing);
  const contentWidth = Math.max(widthFromPoints, minViewportWidth);
  const plotWidth = Math.max(contentWidth - xPadding * 2, 1);

  const pointMeta = useMemo(() => {
    const range = graph.max - graph.min || 1;
    return points.map((point, index) => {
      const x =
        points.length > 1
          ? xPadding + (index / (points.length - 1)) * plotWidth
          : xPadding + plotWidth / 2;
      const normalized = (graph.max - clamp(point.value, graph.min, graph.max)) / range;
      const y = topPadding + normalized * plotHeight;
      const pointDate = new Date(point.loggedAt);

      return {
        id: point.id,
        x,
        y,
        value: point.value,
        date: pointDate,
      };
    });
  }, [graph.max, graph.min, plotHeight, plotWidth, points, xPadding]);

  const polylinePoints = useMemo(
    () => pointMeta.map((point) => `${point.x},${point.y}`).join(" "),
    [pointMeta]
  );

  useEffect(() => {
    if (hasAutoScrolled || points.length === 0) return;
    const container = scrollContainerRef.current;
    if (!container) return;

    requestAnimationFrame(() => {
      container.scrollLeft = container.scrollWidth;
      setHasAutoScrolled(true);
    });
  }, [hasAutoScrolled, points.length]);

  const range = graph.max - graph.min || 1;
  const yForValue = (value: number) =>
    topPadding + ((graph.max - value) / range) * plotHeight;
  const lowerY = yForValue(graph.lowerBound);
  const upperY = yForValue(graph.upperBound);

  return (
    <section className="py-4">
      <div className="mb-2 px-5">
        <h3 className="text-sm font-semibold text-slate-900">
          {parameter.fullName} ({parameter.abbreviatedName})
        </h3>
        <p className="text-xs text-slate-500">{parameter.unit || "No unit"}</p>
      </div>

      {isLoading ? (
        <p className="px-5 text-sm text-slate-600">Loading points...</p>
      ) : points.length === 0 ? (
        <p className="px-5 text-sm text-slate-600">No data points yet.</p>
      ) : (
        <div ref={scrollContainerRef} className="no-scrollbar overflow-x-auto pb-1">
          <div className="relative" style={{ width: contentWidth, height: graphHeight }}>
            <svg width={contentWidth} height={graphHeight} className="block">
              <line
                x1={xPadding}
                x2={contentWidth - xPadding}
                y1={upperY}
                y2={upperY}
                stroke="#cbd5e1"
                strokeDasharray="4 4"
              />
              <line
                x1={xPadding}
                x2={contentWidth - xPadding}
                y1={lowerY}
                y2={lowerY}
                stroke="#cbd5e1"
                strokeDasharray="4 4"
              />
              <line
                x1={xPadding}
                x2={contentWidth - xPadding}
                y1={topPadding + plotHeight}
                y2={topPadding + plotHeight}
                stroke="#cbd5e1"
              />
              {pointMeta.length > 1 && (
                <polyline
                  fill="none"
                  stroke="#475569"
                  strokeWidth="2"
                  points={polylinePoints}
                />
              )}
              {pointMeta.map((point) => (
                <circle
                  key={point.id}
                  cx={point.x}
                  cy={point.y}
                  r="4"
                  fill="#f8fafc"
                  stroke="#64748b"
                  strokeWidth="2"
                />
              ))}
            </svg>

            {pointMeta.map((point) => (
              <div
                key={point.id}
                className="pointer-events-none absolute -translate-x-1/2 text-center"
                style={{ left: point.x, top: point.y - 24 }}
              >
                <span
                  className={`block text-xs font-semibold ${
                    point.value < parameter.lowerBound ||
                    point.value > parameter.upperBound
                      ? "text-red-600"
                      : "text-slate-900"
                  }`}
                >
                  {formatValue(point.value, parameter.displayDecimals)}
                </span>
              </div>
            ))}

            {pointMeta.map((point) => (
              <div
                key={`label-${point.id}`}
                className="pointer-events-none absolute -translate-x-1/2 text-center"
                style={{ left: point.x, top: topPadding + plotHeight + 2 }}
              >
                <span className="block whitespace-nowrap text-[11px] text-slate-500">
                  {formatPointDate(point.date)}
                </span>
                <span className="whitespace-nowrap text-[10px] text-slate-500">
                  {formatPointTime(point.date)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {hasNextPage && (
        <button
          type="button"
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className="mt-2 px-5 text-sm font-medium text-slate-700 underline"
        >
          {isFetchingNextPage ? "Loading..." : "Load more points"}
        </button>
      )}
    </section>
  );
}
