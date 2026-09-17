type Params = Record<string, unknown>;

/** Événements Meta personnalisés uniquement ; ne déclenche aucun événement standard. */
export function trackCustomEvent(event: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  const w = window as any;
  if (typeof w.fbq === "function") {
    w.fbq("trackCustom", event, params);
  }
}
