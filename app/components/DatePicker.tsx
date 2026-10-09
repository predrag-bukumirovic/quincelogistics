"use client";

import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { FiCalendar, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { usePopover } from "./usePopover";
import type { Lang } from "../lib/i18n";

const copy = {
  sr: {
    placeholder: "Izaberite datum",
    calendar: "Kalendar",
    prev: "Prethodni mesec",
    next: "Sledeći mesec",
    today: "Danas",
    clear: "Obriši",
  },
  en: {
    placeholder: "Select a date",
    calendar: "Calendar",
    prev: "Previous month",
    next: "Next month",
    today: "Today",
    clear: "Clear",
  },
  de: {
    placeholder: "Datum wählen",
    calendar: "Kalender",
    prev: "Vorheriger Monat",
    next: "Nächster Monat",
    today: "Heute",
    clear: "Löschen",
  },
};

// Evropski zapis datuma; engleski u britanskom obliku (15 October 2026).
const LOCALES: Record<Lang, string> = { sr: "sr-Latn", en: "en-GB", de: "de" };

// Nedelja počinje ponedeljkom; 1. januar 2024. bio je ponedeljak.
const WEEK = Array.from({ length: 7 }, (_, i) => new Date(2024, 0, 1 + i));

const addDays = (d: Date, n: number) =>
  new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);

// Isti dan u drugom mesecu, ili poslednji ako ga taj mesec nema (31. → 30.).
function addMonths(d: Date, n: number) {
  const last = new Date(d.getFullYear(), d.getMonth() + n + 1, 0).getDate();
  return new Date(d.getFullYear(), d.getMonth() + n, Math.min(d.getDate(), last));
}

const dayOfWeek = (d: Date) => (d.getDay() + 6) % 7;

const toIso = (d: Date) =>
  [
    d.getFullYear(),
    String(d.getMonth() + 1).padStart(2, "0"),
    String(d.getDate()).padStart(2, "0"),
  ].join("-");

const formatDate = (lang: Lang, d: Date) =>
  new Intl.DateTimeFormat(LOCALES[lang], {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);

type CalendarProps = {
  lang: Lang;
  today: Date;
  value: Date | null;
  onPick: (day: Date | null) => void;
};

function Calendar({ lang, today, value, onPick }: CalendarProps) {
  const t = copy[lang];
  // Dan na kome je fokus u mreži; mesec koji se prikazuje je njegov mesec.
  const [focus, setFocus] = useState(() =>
    value && value > today ? value : today
  );
  const moveFocus = useRef(true);
  const gridRef = useRef<HTMLTableElement>(null);
  const titleId = useId();

  const names = useMemo(() => {
    const locale = LOCALES[lang];
    const short = new Intl.DateTimeFormat(locale, { weekday: "short" });
    const long = new Intl.DateTimeFormat(locale, { weekday: "long" });
    return {
      locale,
      month: new Intl.DateTimeFormat(locale, { month: "long" }),
      day: new Intl.DateTimeFormat(locale, {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      week: WEEK.map((d) => ({ short: short.format(d), long: long.format(d) })),
    };
  }, [lang]);

  // Fokus ide za danom kad se kreće tastaturom, ali ne i na klik
  // na sledeći ili prethodni mesec.
  useEffect(() => {
    if (!moveFocus.current) return;
    moveFocus.current = false;
    gridRef.current
      ?.querySelector<HTMLElement>(`[data-day="${toIso(focus)}"]`)
      ?.focus({ preventScroll: true });
  }, [focus]);

  // Prošli dani se ne biraju, pa ni fokus ne ide pre današnjeg.
  const notPast = (d: Date) => (d < today ? today : d);
  const view = new Date(focus.getFullYear(), focus.getMonth(), 1);
  const canPrev = view > today;
  const start = addDays(view, -dayOfWeek(view));
  const weeks = Array.from({ length: 6 }, (_, w) =>
    Array.from({ length: 7 }, (_, d) => addDays(start, w * 7 + d))
  );
  const month = names.month.format(view);
  const title = `${month.charAt(0).toLocaleUpperCase(names.locale)}${month.slice(1)} ${view.getFullYear()}`;
  const todayIso = toIso(today);
  const focusIso = toIso(focus);
  const valueIso = value ? toIso(value) : "";

  const target = (key: string, shift: boolean) => {
    switch (key) {
      case "ArrowLeft":
        return addDays(focus, -1);
      case "ArrowRight":
        return addDays(focus, 1);
      case "ArrowUp":
        return addDays(focus, -7);
      case "ArrowDown":
        return addDays(focus, 7);
      case "Home":
        return addDays(focus, -dayOfWeek(focus));
      case "End":
        return addDays(focus, 6 - dayOfWeek(focus));
      case "PageUp":
        return addMonths(focus, shift ? -12 : -1);
      case "PageDown":
        return addMonths(focus, shift ? 12 : 1);
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLTableElement>) => {
    const next = target(e.key, e.shiftKey);
    if (!next) return;
    e.preventDefault();
    moveFocus.current = true;
    setFocus(notPast(next));
  };

  return (
    <div
      className="picker-panel cal"
      role="dialog"
      aria-label={t.calendar}
      tabIndex={-1}
    >
      <div className="cal-head">
        <button
          type="button"
          className="cal-nav"
          aria-label={t.prev}
          aria-disabled={!canPrev}
          onClick={() => canPrev && setFocus(notPast(addMonths(focus, -1)))}
        >
          <FiChevronLeft size={18} aria-hidden="true" />
        </button>
        <p id={titleId} className="cal-title" aria-live="polite">
          {title}
        </p>
        <button
          type="button"
          className="cal-nav"
          aria-label={t.next}
          onClick={() => setFocus(addMonths(focus, 1))}
        >
          <FiChevronRight size={18} aria-hidden="true" />
        </button>
      </div>
      <table
        ref={gridRef}
        role="grid"
        className="cal-grid"
        aria-labelledby={titleId}
        onKeyDown={onKeyDown}
      >
        <thead>
          <tr>
            {names.week.map((d) => (
              <th key={d.long} scope="col" aria-label={d.long}>
                {d.short}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week) => (
            <tr key={toIso(week[0])}>
              {week.map((day) => {
                const iso = toIso(day);
                if (day.getMonth() !== view.getMonth()) {
                  return (
                    <td key={iso} role="gridcell">
                      <span className="cal-day is-outside" aria-hidden="true">
                        {day.getDate()}
                      </span>
                    </td>
                  );
                }
                return (
                  <td key={iso} role="gridcell" aria-selected={iso === valueIso}>
                    <button
                      type="button"
                      className={`cal-day${iso === todayIso ? " is-today" : ""}${
                        iso === valueIso ? " is-selected" : ""
                      }`}
                      data-day={iso}
                      tabIndex={iso === focusIso ? 0 : -1}
                      disabled={day < today}
                      aria-label={names.day.format(day)}
                      aria-current={iso === todayIso ? "date" : undefined}
                      onClick={() => onPick(day)}
                    >
                      {day.getDate()}
                    </button>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cal-foot">
        <button type="button" className="cal-link" onClick={() => onPick(today)}>
          {t.today}
        </button>
        {value && (
          <button type="button" className="cal-link" onClick={() => onPick(null)}>
            {t.clear}
          </button>
        )}
      </div>
    </div>
  );
}

type Props = {
  id: string;
  label: string;
  lang: Lang;
};

/**
 * Kalendar u stilu sajta umesto sistemskog polja za datum. Prošli dani se ne
 * mogu izabrati, a u formu ide datum u obliku 2026-10-15.
 */
export default function DatePicker({ id, label, lang }: Props) {
  const t = copy[lang];
  const { open, up, show, hide, triggerRef, rootProps } = usePopover(420);
  const [value, setValue] = useState<Date | null>(null);
  const [today, setToday] = useState<Date | null>(null);
  const labelId = `${id}-label`;

  const openCalendar = () => {
    const now = new Date();
    setToday(new Date(now.getFullYear(), now.getMonth(), now.getDate()));
    show();
  };

  const pick = (day: Date | null) => {
    setValue(day);
    hide(true);
  };

  return (
    <div className="form-field">
      <label id={labelId} htmlFor={id}>
        {label}
      </label>
      <div
        className={`picker${open ? " is-open" : ""}${up ? " is-up" : ""}`}
        {...rootProps}
      >
        <button
          ref={triggerRef}
          type="button"
          id={id}
          className="picker-trigger"
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-labelledby={`${labelId} ${id}`}
          onClick={() => (open ? hide() : openCalendar())}
        >
          <span className={value ? undefined : "picker-placeholder"}>
            {value ? formatDate(lang, value) : t.placeholder}
          </span>
          <FiCalendar className="picker-icon" size={18} aria-hidden="true" />
        </button>
        <input type="hidden" name={id} value={value ? toIso(value) : ""} />
        {open && today && (
          <Calendar lang={lang} today={today} value={value} onPick={pick} />
        )}
      </div>
    </div>
  );
}
