"use client";

import { useEffect, useRef, useState } from "react";
import { localeLabels } from "@/i18n/dictionaries";
import { useLocale } from "@/i18n/LocaleProvider";
import type { Locale } from "@/i18n/types";

const OPTIONS: Locale[] = ["en", "fr", "ar"];

export function LanguageSwitcher() {
  const { locale, setLocale, dict } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointer = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div className="lang-switch" ref={ref}>
      <button
        type="button"
        className="lang-switch__trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={dict.nav.language}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="lang-switch__code">{locale.toUpperCase()}</span>
        <span className="lang-switch__chev" aria-hidden="true" />
      </button>
      {open && (
        <ul className="lang-switch__menu" role="listbox" aria-label={dict.nav.language}>
          {OPTIONS.map((code) => (
            <li key={code} role="option" aria-selected={code === locale}>
              <button
                type="button"
                className={code === locale ? "is-active" : undefined}
                onClick={() => {
                  setLocale(code);
                  setOpen(false);
                }}
              >
                {localeLabels[code]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
