const TRACKING_STORAGE_KEY = "vc_tracking_params";

/**
 * Captures the current URL query string (UTMs, fbclid, etc.) and persists
 * it in sessionStorage so attribution survives navigation/interactions.
 * Returns the stored query string (without the leading "?").
 */
export function captureTrackingParams(): string {
  if (typeof window === "undefined") return "";

  const current = window.location.search.replace(/^\?/, "");
  if (current) {
    try {
      sessionStorage.setItem(TRACKING_STORAGE_KEY, current);
    } catch {
      // sessionStorage unavailable — fall back to in-memory value
    }
    return current;
  }

  try {
    return sessionStorage.getItem(TRACKING_STORAGE_KEY) ?? "";
  } catch {
    return "";
  }
}

/** Returns the persisted tracking query string (without "?"). */
export function getTrackingParams(): string {
  if (typeof window === "undefined") return "";
  const current = window.location.search.replace(/^\?/, "");
  if (current) return current;
  try {
    return sessionStorage.getItem(TRACKING_STORAGE_KEY) ?? "";
  } catch {
    return "";
  }
}

/**
 * Appends the captured tracking params to a destination URL, using "?" or
 * "&" depending on whether the URL already contains a query string.
 */
export function appendTrackingParams(url: string): string {
  const params = getTrackingParams();
  if (!params) return url;
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}${params}`;
}
