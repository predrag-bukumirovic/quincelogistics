"use client";

import { useMemo, useSyncExternalStore } from "react";
import { CONSENT_EVENT, CONSENT_KEY, parseConsent } from "../lib/consent";

function subscribe(onChange: () => void) {
  window.addEventListener(CONSENT_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CONSENT_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getRaw() {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

/**
 * Važeći pristanak posetioca: null ako ga nema (ili je istekao),
 * undefined dok stranica još nije hidrirana.
 */
export function useConsent() {
  const raw = useSyncExternalStore(subscribe, getRaw, () => undefined);
  return useMemo(() => (raw === undefined ? undefined : parseConsent(raw)), [raw]);
}
