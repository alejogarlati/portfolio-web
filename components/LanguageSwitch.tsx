"use client";

import React from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { UI_COPY } from "@/data/ui";

export default function LanguageSwitch() {
  const { lang, setLang } = useLanguage();
  const ariaLabel = UI_COPY[lang].hero.langSwitchAria;

  return (
    <div className="fixed bottom-[calc(env(safe-area-inset-bottom,0px)+1.25rem)] right-5 sm:bottom-7 sm:right-7 z-40">
      <div
        role="group"
        aria-label={ariaLabel}
        className="inline-flex items-center p-1 bg-[#151617]/90 backdrop-blur-md border border-white/[0.16] rounded-[4px] shadow-[0_10px_30px_-6px_rgba(0,0,0,0.55)]"
      >
        <Globe
          className="w-3.5 h-3.5 text-copper-light ml-2 mr-1.5"
          aria-hidden="true"
        />
        {(["es", "en"] as const).map((code) => {
          const isActive = lang === code;
          return (
            <button
              key={code}
              type="button"
              onClick={() => setLang(code)}
              aria-pressed={isActive}
              className={`px-2.5 py-1 rounded-[2px] font-mono text-[11px] tracking-[0.14em] uppercase transition-colors ${
                isActive
                  ? "bg-copper-light text-cover font-bold shadow-sm"
                  : "text-cover-secondary hover:text-cover-text"
              }`}
            >
              {code.toUpperCase()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
