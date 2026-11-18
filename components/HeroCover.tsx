"use client";

import React from "react";
import { ArrowDownRight, FileText, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getProfileData } from "@/data/profile";
import { UI_COPY } from "@/data/ui";
import Hero3DCanvas from "./Hero3DCanvas";

export default function HeroCover() {
  const { lang } = useLanguage();
  const profile = getProfileData(lang);
  const copy = UI_COPY[lang].hero;

  return (
    <header className="relative bg-cover text-cover-text min-h-[92svh] sm:min-h-[96vh] flex flex-col justify-between overflow-hidden border-b border-black pb-[calc(env(safe-area-inset-bottom,0px)+0.5rem)]">
      {/* Escena 3D Interactiva */}
      <Hero3DCanvas />

      {/* Gradiente radial sutil de profundidad */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(circle at 75% 45%, rgba(213, 176, 153, 0.09) 0%, rgba(21, 22, 23, 0.7) 55%, rgba(21, 22, 23, 0.96) 100%)",
        }}
      />

      {/* Cabecera Superior Editorial */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 sm:px-10 pt-10 pb-7 border-b border-white/[0.12] flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          {/* Isotipo con marcas de registro vectorial */}
          <div className="w-7 h-7 border border-cover-text/90 rounded-[2px] relative flex items-center justify-center shrink-0">
            <div className="w-full h-[1px] bg-cover-text/90 absolute top-1.5" />
            <div className="w-[1px] h-4 bg-cover-text/90 absolute left-1.5 bottom-0" />
          </div>
          <span className="font-mono text-xs sm:text-[13px] tracking-[0.1em] xl:tracking-[0.14em] uppercase text-cover-text font-bold">
            {copy.brandTag}
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-8 font-mono text-xs tracking-[0.08em] xl:tracking-[0.12em] uppercase text-cover-secondary">
          <a
            href="#enfoque"
            className="hover:text-copper-light transition-colors py-1"
          >
            {copy.nav.approach}
          </a>
          <a
            href="#experiencia"
            className="hover:text-copper-light transition-colors py-1"
          >
            {copy.nav.experience}
          </a>
          <a
            href="#servicios"
            className="hover:text-copper-light transition-colors py-1"
          >
            {copy.nav.services}
          </a>
          <a
            href="#proyectos"
            className="hover:text-copper-light transition-colors py-1"
          >
            {copy.nav.projects}
          </a>
          <a
            href="#contacto"
            className="hover:text-copper-light transition-colors py-1"
          >
            {copy.nav.contact}
          </a>
        </nav>

        <span className="font-mono text-xs tracking-[0.1em] xl:tracking-[0.14em] uppercase text-[#9e9b95] hidden sm:inline">
          {copy.archiveTag}
        </span>
      </div>

      {/* Cuerpo Principal de Portada */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 sm:px-10 py-20 md:py-32 my-auto">
        <div className="max-w-3xl">
          {/* Eyebrow editorial */}
          <p
            className={`font-mono text-xs sm:text-sm uppercase text-copper-light font-bold mb-7 ${
              lang === "en"
                ? "tracking-[0.16em] sm:tracking-[0.2em]"
                : "tracking-[0.24em]"
            }`}
          >
            {copy.eyebrow}
          </p>

          {/* Título Principal Editorial */}
          <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold text-cover-text tracking-tight leading-[1.08] mb-8">
            {copy.title}
          </h1>

          {/* Bajada descriptiva */}
          <p className="text-base sm:text-lg lg:text-xl text-[#a6a39d] leading-relaxed max-w-2xl mb-12">
            {profile.headline}
          </p>

          {/* Monograma [ AG ] con marcas de corte */}
          <div className="flex flex-wrap items-center gap-7 mb-16">
            <div className="relative w-16 h-16 border border-copper-light flex items-center justify-center select-none shrink-0">
              <span className="absolute -top-[2px] -left-[2px] w-3 h-[2px] bg-cover-text" />
              <span className="absolute -top-[2px] -left-[2px] w-[2px] h-3 bg-cover-text" />
              <span className="absolute -bottom-[2px] -right-[2px] w-3 h-[2px] bg-cover-text" />
              <span className="absolute -bottom-[2px] -right-[2px] w-[2px] h-3 bg-cover-text" />
              <span className="font-mono text-2xl font-bold text-cover-text tracking-wider">
                AG
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#proyectos"
                className="px-6 py-3.5 bg-copper-light text-cover font-mono text-xs font-bold uppercase tracking-[0.14em] rounded-[3px] hover:bg-cover-text transition-colors inline-flex items-center gap-2.5 shadow-sm"
              >
                <span>{copy.ctaProjects}</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href={profile.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 border border-white/20 bg-white/[0.03] text-cover-text font-mono text-xs font-medium uppercase tracking-[0.14em] rounded-[3px] hover:border-copper-light hover:text-copper-light transition-colors inline-flex items-center gap-2.5"
              >
                <MessageCircle className="w-4 h-4 text-copper-light" />
                <span>{copy.ctaWhatsapp}</span>
              </a>

              <a
                href={profile.contact.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 border border-white/10 text-cover-secondary font-mono text-xs uppercase tracking-[0.12em] rounded-[3px] hover:text-cover-text hover:border-white/25 transition-colors inline-flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-copper-light" />
                <span>{copy.ctaCv}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Ficha Técnica Inferior de Perfil con más respiro */}
        <div className="bg-white/[0.032] border border-white/[0.12] rounded-[4px] p-8 sm:p-9 backdrop-blur-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <span
              className={`block font-mono text-[10px] uppercase text-cover-muted mb-2 ${
                lang === "en" ? "tracking-[0.14em]" : "tracking-[0.2em]"
              }`}
            >
              {copy.specs.profileLabel}
            </span>
            <p className="text-base font-bold text-cover-text">
              {profile.shortName}
            </p>
            <p className="text-xs text-cover-secondary mt-1">
              {copy.specs.profileRole}
            </p>
          </div>

          <div>
            <span
              className={`block font-mono text-[10px] uppercase text-cover-muted mb-2 ${
                lang === "en" ? "tracking-[0.14em]" : "tracking-[0.2em]"
              }`}
            >
              {copy.specs.educationLabel}
            </span>
            <p className="text-base font-bold text-cover-text">
              {copy.specs.educationTitle}
            </p>
            <p className="text-xs text-cover-secondary mt-1">
              {copy.specs.educationSub}
            </p>
          </div>

          <div>
            <span
              className={`block font-mono text-[10px] uppercase text-cover-muted mb-2 ${
                lang === "en" ? "tracking-[0.14em]" : "tracking-[0.2em]"
              }`}
            >
              {copy.specs.locationLabel}
            </span>
            <p className="text-base font-bold text-cover-text">
              {profile.location}
            </p>
            <p className="text-xs text-cover-secondary mt-1">
              {copy.specs.locationSub}
            </p>
          </div>

          <div>
            <span
              className={`block font-mono text-[10px] uppercase text-cover-muted mb-2 ${
                lang === "en" ? "tracking-[0.14em]" : "tracking-[0.2em]"
              }`}
            >
              {copy.specs.channelsLabel}
            </span>
            <p className="text-base font-bold text-copper-light">
              {profile.contact.phoneDisplay}
            </p>
            <p className="text-xs text-cover-secondary mt-1">
              {profile.contact.email}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
