"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "es" | "en";

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

const STORAGE_KEY = "portfolio-lang";

const DOCUMENT_TITLES: Record<Language, string> = {
  es: "Alejo Garlati — Diseño Gráfico & Comunicación Visual",
  en: "Alejo Garlati — Graphic Design & Visual Communication",
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("es");

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get("lang");
      if (urlLang === "en" || urlLang === "es") {
        setLangState(urlLang);
        window.localStorage.setItem(STORAGE_KEY, urlLang);
        return;
      }

      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "es") {
        setLangState(saved);
      }
    } catch {
      // Ignore storage/URL access errors
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = DOCUMENT_TITLES[lang];
  }, [lang]);

  const setLang = (next: Language) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage errors
    }
  };

  const toggleLang = () => {
    setLang(lang === "es" ? "en" : "es");
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
