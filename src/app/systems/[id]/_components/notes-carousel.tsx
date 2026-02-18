"use client";

import { useMemo } from "react";

import { formatRelativeDateTime } from "~/lib/date-display";
import { type RouterOutputs } from "~/trpc/react";
import { api } from "~/trpc/react";

type NotesCarouselProps = {
  systemId: string;
  initialPage?: RouterOutputs["system"]["getNotesPage"];
};

function formatNoteDate(date: Date) {
  return formatRelativeDateTime(date);
}

export function NotesCarousel({ systemId, initialPage }: NotesCarouselProps) {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = api.system.getNotesPage.useInfiniteQuery(
    { systemId, limit: 6 },
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

  const notes = useMemo(
    () => data?.pages.flatMap((page) => page.items) ?? [],
    [data]
  );

  if (isLoading) {
    return <p className="text-sm text-slate-600">Loading notes...</p>;
  }

  if (notes.length === 0) {
    return <p className="px-5 text-sm text-slate-600">No notes yet.</p>;
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="no-scrollbar overflow-x-auto">
        <ul className="flex w-max gap-2 px-5 pb-1">
          {notes.map((note) => (
            <li
              key={note.id}
              className="w-64 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm"
            >
              <p className="text-xs text-slate-500">
                {formatNoteDate(new Date(note.loggedAt ?? note.createdAt))}
              </p>
              <p className="text-sm text-slate-900">{note.note}</p>
            </li>
          ))}
        </ul>
      </div>

      {hasNextPage && (
        <button
          type="button"
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className="self-start text-sm font-medium text-slate-700 underline"
        >
          {isFetchingNextPage ? "Loading..." : "Load more"}
        </button>
      )}
    </div>
  );
}
