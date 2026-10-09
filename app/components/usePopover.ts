"use client";

import {
  useEffect,
  useRef,
  useState,
  type FocusEvent,
  type KeyboardEvent,
} from "react";

// Zaglavlje je lepljivo, pa vidljivi prostor iznad polja počinje ispod njega.
const headerBottom = () =>
  document.querySelector(".site-header")?.getBoundingClientRect().bottom ?? 0;

/**
 * Zajedničko ponašanje padajućih panela u formi (lista, kalendar). Panel se
 * otvara ispod polja, a iznad samo ako dole nema mesta, a gore ima. Zatvara ga
 * klik van njega, taster Escape ili prelazak fokusa na sledeće polje.
 */
export function usePopover(height: number) {
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [up, setUp] = useState(false);

  const show = () => {
    const box = triggerRef.current?.getBoundingClientRect();
    if (box) {
      const below = window.innerHeight - box.bottom;
      setUp(below < height && box.top - headerBottom() >= height);
    }
    setOpen(true);
  };

  // Panel ispod polja koji ne stane do dna ekrana: strana se pomeri koliko
  // treba, ali polje ne sme da ode ispod zaglavlja.
  useEffect(() => {
    const trigger = triggerRef.current;
    const panel = rootRef.current?.querySelector(".picker-panel");
    if (!open || up || !trigger || !panel) return;
    const overflow = panel.getBoundingClientRect().bottom + 16 - window.innerHeight;
    const room = trigger.getBoundingClientRect().top - headerBottom() - 8;
    if (overflow > 0) window.scrollBy({ top: Math.min(overflow, room) });
  }, [open, up]);

  const hide = (refocus = false) => {
    setOpen(false);
    if (refocus) triggerRef.current?.focus();
  };

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const rootProps = {
    ref: rootRef,
    onKeyDown: (e: KeyboardEvent) => {
      if (e.key !== "Escape" || !open) return;
      e.preventDefault();
      e.stopPropagation();
      hide(true);
    },
    onBlur: (e: FocusEvent) => {
      const next = e.relatedTarget;
      if (next && !rootRef.current?.contains(next)) setOpen(false);
    },
  };

  return { open, up, show, hide, triggerRef, rootProps };
}
