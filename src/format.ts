export function text(value: string | null | undefined) {
  if (!value || value.trim().toLowerCase() === "empty") {
    return "";
  }
  return value;
}

export function formatWhen(iso: string | null, timeZone: string | null) {
  if (!iso) {
    return "Time unavailable";
  }

  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) {
    return "Time unavailable";
  }

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  };

  try {
    return date.toLocaleString("en-US", { ...options, timeZone: timeZone || undefined });
  } catch {
    return date.toLocaleString("en-US", options);
  }
}
