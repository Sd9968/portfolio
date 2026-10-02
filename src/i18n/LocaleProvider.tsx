"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { dictionaries } from "./dictionaries";
import type { Dictionary, Locale } from "./types";

type LocaleContextValue = {
  locale: Locale;
  dict: Dictionary;
  setLocale: (locale: Locale) => void;
  dir: "ltr" | "rtl";
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = "atheeq-locale";

function isLocale(value: string | null): value is Locale {
  return value === "en" || value === "fr" || value === "ar";
}

function subscribeLocale(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("atheeq-locale-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("atheeq-locale-change", callback);
  };
}

let selectedLocale: Locale | null = null;

function getLocale(): Locale {
  if (selectedLocale) return selectedLocale;
  let stored: string | null = null;
  try { stored = window.localStorage.getItem(STORAGE_KEY); } catch { /* Storage may be disabled. */ }
  if (isLocale(stored)) return stored;
  const browser = navigator.language.slice(0, 2);
  return isLocale(browser) ? browser : "en";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribeLocale, getLocale, () => "en" as Locale);
  const setLocale = useCallback((next: Locale) => {
    selectedLocale = next;
    try { window.localStorage.setItem(STORAGE_KEY, next); } catch { /* Keep the interface usable without persistent storage. */ }
    window.dispatchEvent(new Event("atheeq-locale-change"));
  }, []);

  const dir: "ltr" | "rtl" = locale === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir]);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      dict: dictionaries[locale],
      setLocale,
      dir,
    }),
    [locale, setLocale, dir],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
