"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { FiCheck, FiChevronDown, FiSearch } from "react-icons/fi";
import { usePopover } from "./usePopover";

export type SelectOption = {
  value: string;
  label: string;
  /** Kratka oznaka desno u listi (npr. DE); pretraga je takođe nalazi. */
  hint?: string;
  /** Ostaje u listi i dok se pretražuje, npr. „Druga zemlja“. */
  pinned?: boolean;
};

type Props = {
  id: string;
  label: string;
  options: SelectOption[];
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  /** Pretraga iznad liste: natpis u polju i poruka kada ništa ne odgovara. */
  search?: { label: string; empty: string };
};

// Mala slova, bez kvačica i umlauta: „ceska“ nalazi „Češka“, „osterr“ „Österreich“.
const fold = (text: string) =>
  text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

// Prvo nazivi koji počinju upitom (ili oznaka jednaka upitu), pa nazivi u
// kojima neka reč počinje upitom, pa ostali koji ga sadrže.
function rank(option: SelectOption, query: string) {
  const label = fold(option.label);
  if (label.startsWith(query) || fold(option.hint ?? "") === query) return 0;
  if (label.split(/[\s-]+/).some((word) => word.startsWith(query))) return 1;
  return label.includes(query) ? 2 : -1;
}

function filterOptions(options: SelectOption[], query: string) {
  const q = fold(query.trim());
  if (!q) return options;
  const found = options
    .filter((o) => !o.pinned)
    .map((o) => ({ o, rank: rank(o, q) }))
    .filter((m) => m.rank >= 0)
    .sort((a, b) => a.rank - b.rank)
    .map((m) => m.o);
  return [...found, ...options.filter((o) => o.pinned)];
}

// Prvi pogodak pretrage; „Druga zemlja“ i slične opcije biraju se samo ručno.
const firstMatch = (list: SelectOption[]) => list.findIndex((o) => !o.pinned);

// Taster koji upisuje znak, a ne razmak, strelica ili prečica.
const isCharKey = (e: KeyboardEvent) =>
  e.key.length === 1 && e.key !== " " && !e.ctrlKey && !e.metaKey && !e.altKey;

/**
 * Padajuća lista u stilu sajta umesto sistemskog <select>-a, po želji sa
 * pretragom. Vrednost ide u formu kroz skriveno polje, koje nosi i proveru
 * obaveznog polja.
 */
export default function Select({
  id,
  label,
  options,
  defaultValue = "",
  placeholder,
  required,
  search,
}: Props) {
  const { open, up, show, hide, triggerRef, rootProps } = usePopover(360);
  const [value, setValue] = useState(defaultValue);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(-1);
  const listRef = useRef<HTMLUListElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const focusSearch = useRef(false);
  const scroll = useRef<"center" | "nearest" | "top" | null>(null);
  const typed = useRef({ text: "", at: 0 });

  const shown = search ? filterOptions(options, query) : options;
  const selected = options.find((o) => o.value === value);
  const labelId = `${id}-label`;
  const listId = `${id}-list`;
  const optionId = (o: SelectOption) => `${id}-${o.value}`;
  const activeId = open && shown[active] ? optionId(shown[active]) : undefined;
  const selectedIndex = (list: SelectOption[]) =>
    Math.max(0, list.findIndex((o) => o.value === value));

  const openList = (initialQuery = "") => {
    const list = search ? filterOptions(options, initialQuery) : options;
    setQuery(initialQuery);
    setActive(initialQuery ? firstMatch(list) : selectedIndex(list));
    // Na telefonu se tastatura ne otvara sama, da lista ostane pregledna.
    focusSearch.current =
      Boolean(search) &&
      (initialQuery !== "" || matchMedia("(pointer: fine)").matches);
    scroll.current = "center";
    show();
  };

  const choose = (option: SelectOption) => {
    setValue(option.value);
    hide(true);
  };

  const moveTo = (index: number) => {
    scroll.current = "nearest";
    setActive(Math.max(0, Math.min(shown.length - 1, index)));
  };

  const onQuery = (next: string) => {
    setQuery(next);
    if (next.trim()) {
      setActive(firstMatch(filterOptions(options, next)));
      scroll.current = "top";
    } else {
      setActive(selectedIndex(options));
      scroll.current = "center";
    }
  };

  // Bez pretrage kucanje skače na opciju koja počinje otkucanim, kao u sistemskoj listi.
  const typeahead = (key: string) => {
    const now = Date.now();
    const text = now - typed.current.at < 700 ? typed.current.text + key : key;
    typed.current = { text, at: now };
    const q = fold(text);
    return options.findIndex((o) => fold(o.label).startsWith(q));
  };

  const onTriggerKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (open) return;
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      openList();
    } else if (isCharKey(e)) {
      e.preventDefault();
      if (search) {
        openList(e.key);
        return;
      }
      const i = typeahead(e.key);
      if (i >= 0) setValue(options[i].value);
    }
  };

  const onListKey = (e: KeyboardEvent<HTMLElement>) => {
    const inList = e.currentTarget === listRef.current;
    switch (e.key) {
      case "ArrowDown":
      case "ArrowUp":
        e.preventDefault();
        return moveTo(active + (e.key === "ArrowDown" ? 1 : -1));
      case "PageDown":
      case "PageUp":
        e.preventDefault();
        return moveTo(active + (e.key === "PageDown" ? 6 : -6));
      case "Home":
      case "End":
        // U polju za pretragu Home i End pomeraju kursor kroz tekst.
        if (!inList) return;
        e.preventDefault();
        return moveTo(e.key === "Home" ? 0 : shown.length - 1);
      case "Enter":
      case " ":
        if (e.key === " " && !inList) return;
        e.preventDefault();
        if (shown[active]) choose(shown[active]);
        return;
      case "Tab":
        // Kao sistemska lista: Tab potvrđuje označenu opciju i ide dalje.
        if (shown[active]) setValue(shown[active].value);
        return;
    }
    if (!inList || !isCharKey(e)) return;
    if (search) {
      // Fokus prelazi u pretragu, pa otkucani znak ide u nju.
      searchRef.current?.focus({ preventScroll: true });
      return;
    }
    const i = typeahead(e.key);
    if (i >= 0) moveTo(i);
  };

  useEffect(() => {
    if (!open) return;
    // Stranu pomera usePopover, ako treba; fokus je ne pomera.
    (focusSearch.current ? searchRef.current : listRef.current)?.focus({
      preventScroll: true,
    });
  }, [open]);

  // Označena opcija ostaje vidljiva u listi (pri otvaranju stoji na sredini).
  useLayoutEffect(() => {
    const list = listRef.current;
    const mode = scroll.current;
    scroll.current = null;
    if (!list || !mode) return;
    if (mode === "top") {
      list.scrollTop = 0;
      return;
    }
    const item = activeId ? document.getElementById(activeId) : null;
    if (!item) return;
    const top = item.offsetTop;
    const bottom = top + item.offsetHeight;
    if (mode === "center") {
      list.scrollTop = top - (list.clientHeight - item.offsetHeight) / 2;
    } else if (top < list.scrollTop) {
      list.scrollTop = top;
    } else if (bottom > list.scrollTop + list.clientHeight) {
      list.scrollTop = bottom - list.clientHeight;
    }
  }, [activeId, query, open]);

  return (
    <div className="form-field">
      <label id={labelId} htmlFor={id}>
        {label}
        {required && <span className="req"> *</span>}
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
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={open ? listId : undefined}
          aria-labelledby={`${labelId} ${id}`}
          onClick={() => (open ? hide() : openList())}
          onKeyDown={onTriggerKey}
        >
          <span className={selected ? undefined : "picker-placeholder"}>
            {selected?.label ?? placeholder}
          </span>
          <FiChevronDown
            className="picker-icon picker-chevron"
            size={18}
            aria-hidden="true"
          />
        </button>
        {/* Nosi vrednost u formu; kad je prazno, a obavezno, pregledač ovde
            prikaže poruku, a fokus prebacujemo na dugme iznad. */}
        <input
          className="picker-value"
          name={id}
          value={value}
          required={required}
          tabIndex={-1}
          aria-hidden="true"
          onChange={() => {}}
          onFocus={() => triggerRef.current?.focus()}
        />
        {open && (
          <div className="picker-panel select-panel" tabIndex={-1}>
            {search && (
              <div className="select-search">
                <FiSearch size={17} aria-hidden="true" />
                <input
                  ref={searchRef}
                  type="text"
                  role="combobox"
                  aria-expanded="true"
                  aria-controls={listId}
                  aria-autocomplete="list"
                  aria-activedescendant={activeId}
                  aria-label={search.label}
                  placeholder={search.label}
                  autoComplete="off"
                  spellCheck={false}
                  value={query}
                  onChange={(e) => onQuery(e.target.value)}
                  onKeyDown={onListKey}
                />
              </div>
            )}
            {search && query.trim() && firstMatch(shown) < 0 && (
              <p className="select-empty" role="status">
                {search.empty}
              </p>
            )}
            <ul
              ref={listRef}
              id={listId}
              role="listbox"
              className="select-list"
              aria-labelledby={labelId}
              aria-activedescendant={activeId}
              tabIndex={-1}
              onKeyDown={onListKey}
              // Klik na opciju ne odnosi fokus iz polja za pretragu.
              onMouseDown={(e) => e.preventDefault()}
            >
              {shown.map((o, i) => (
                <li
                  key={o.value}
                  id={optionId(o)}
                  role="option"
                  aria-selected={o.value === value}
                  className={`select-option${i === active ? " is-active" : ""}${
                    o.pinned ? " is-pinned" : ""
                  }`}
                  onMouseMove={() => i !== active && setActive(i)}
                  onClick={() => choose(o)}
                >
                  <span className="select-option-label">{o.label}</span>
                  {o.hint && <span className="select-hint">{o.hint}</span>}
                  <FiCheck className="select-check" size={16} aria-hidden="true" />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
