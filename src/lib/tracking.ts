const TRACKING_STORAGE_KEY = "vc_tracking_params";

const TRACKED_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "utm_id",
  "fbclid",
  "gclid",
  "ttclid",
  "sck",
  "src",
  "ref",
];

function readStored(): URLSearchParams {
  try {
    return new URLSearchParams(sessionStorage.getItem(TRACKING_STORAGE_KEY) ?? "");
  } catch {
    return new URLSearchParams();
  }
}

/**
 * Captures the current URL query string (UTMs, fbclid, etc.) and merges it
 * into sessionStorage so attribution survives navigation/interactions.
 */
export function captureTrackingParams(): string {
  if (typeof window === "undefined") return "";

  const stored = readStored();
  const current = new URLSearchParams(window.location.search);

  current.forEach((value, key) => {
    if (!value) return;
    if (TRACKED_KEYS.includes(key) || key.startsWith("utm_")) {
      stored.set(key, value);
    }
  });

  const merged = stored.toString();
  try {
    if (merged) sessionStorage.setItem(TRACKING_STORAGE_KEY, merged);
  } catch {
    // sessionStorage unavailable — ignore
  }
  return merged;
}

/** Returns the persisted tracking query string (without "?"). */
export function getTrackingParams(): string {
  if (typeof window === "undefined") return "";
  return captureTrackingParams();
}

/**
 * Appends the captured tracking params to a destination URL without
 * duplicating params already present on it.
 */
export function appendTrackingParams(url: string): string {
  const params = new URLSearchParams(getTrackingParams());
  if ([...params.keys()].length === 0) return url;

  const [base, existingQuery = ""] = url.split("?");
  const target = new URLSearchParams(existingQuery);

  params.forEach((value, key) => {
    if (!target.has(key)) target.append(key, value);
  });

  const query = target.toString();
  return query ? `${base}?${query}` : (base ?? url);
}
