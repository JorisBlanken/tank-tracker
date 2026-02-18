function startOfLocalDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function getRelativeDayLabel(date: Date, now = new Date()) {
  const dayMs = 24 * 60 * 60 * 1000;
  const diffDays = Math.floor(
    (startOfLocalDay(now).getTime() - startOfLocalDay(date).getTime()) / dayMs
  );

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays >= 2 && diffDays <= 6) {
    return new Intl.DateTimeFormat(undefined, { weekday: "long" }).format(date);
  }

  return new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

export function formatRelativeDateTime(date: Date, now = new Date()) {
  const dayLabel = getRelativeDayLabel(date, now);
  const timeLabel = new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit",
  }).format(date);

  return `${dayLabel}, ${timeLabel}`;
}
