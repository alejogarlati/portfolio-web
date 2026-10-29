"use client";

import React from "react";
import { PROFILE_DATA } from "@/data/profile";
import { useScrollStepper } from "@/hooks/useScrollStepper";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ServicesScope() {
  const services = PROFILE_DATA.services;
  const serviceStepper = useScrollStepper({
    totalSteps: services.length,
    PauseMs: 520,
    disableOnMobile: true,
  });

  const activeServiceIndex = serviceStepper.activeIndex;

  return (
    <section
      id="servicios"
      className="canvas-ambient-light text-ink border-b-2 border-hairline scroll-mt-16 relative"
    >
      {/* VISTA MÓVIL / TABLET (< lg): Lista vertical natural sin animación de scroll bloqueado */}
      <div className="lg:hidden max-w-6xl mx-auto px-4 sm:px-8 py-14 sm:py-20">
        <div className="mb-6">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <p className="font-mono text-[11px] font-bold tracking-[0.16em] uppercase text-copper">
              02. SERVICIOS & ESPECIALIDADES
            </p>
            <span className="font-mono text-[10px] font-bold text-pebble">
              0{services.length} ÁREAS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight leading-tight">
            Áreas de trabajo y capacidades técnicas
          </h2>
        </div>

        <div className="space-y-5">
          {services.map((service) => (
            <article
              key={service.num}
              className="w-full border rounded-[4px] p-4 sm:p-6 surface-glossy border-glossy"
            >
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-center">
                <div className="sm:col-span-5">
                  <div className="aspect-[16/9] w-full rounded-[3px] border border-hairline overflow-hidden relative bg-[#f5f1eb] flex items-center justify-center shadow-sm">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-surface/95 border border-hairline rounded-[2px] font-mono text-[10px] font-bold text-copper">
                      {service.num}
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-7 space-y-2">
                  <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-copper">
                    <span>
                      {service.num} / 0{services.length}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-copper/40" />
                    <span className="text-pebble tracking-wider truncate">
                      {service.title}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-ink tracking-tight leading-snug">
                    {service.claim}
                  </h3>

                  <p className="text-xs sm:text-sm text-body leading-relaxed">
                    {service.subclaim}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* VISTA ESCRITORIO (lg+): Escenario paso a paso */}
      <div
        ref={serviceStepper.trackRef}
        className="hidden lg:block relative w-full"
        style={{ height: `${services.length * 85}dvh` }}
      >
        <div
          ref={serviceStepper.stageRef}
          className="sticky top-0 h-[100dvh] w-full flex flex-col justify-center py-14 overflow-hidden select-none"
        >
          <div className="max-w-6xl mx-auto px-10 w-full flex flex-col justify-center">
            {/* Cabecera Editorial */}
            <div className="mb-6">
              <div className="flex items-center justify-between gap-2 mb-2">
                <p className="font-mono text-xs font-bold tracking-[0.16em] uppercase text-copper">
                  02. SERVICIOS & ESPECIALIDADES
                </p>
                <span className="font-mono text-[11px] font-bold text-ink bg-surface px-2.5 py-0.5 rounded-[2px] border border-hairline">
                  0{activeServiceIndex + 1} / 0{services.length}
                </span>
              </div>
              <h2 className="text-4xl font-bold text-ink tracking-tight leading-tight">
                Áreas de trabajo y capacidades técnicas
              </h2>
            </div>

            {/* Barra de Break-points / Selector Rápido */}
            <div className="mb-6 py-2 px-3 bg-surface border border-hairline rounded-[4px] shadow-sm flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                {services.map((service, idx) => (
                  <button
                    key={service.num}
                    type="button"
                    onClick={() => serviceStepper.goToStep(idx, "smooth")}
                    className={`px-3.5 py-1.5 rounded-[3px] font-mono text-xs tracking-wider transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                      activeServiceIndex === idx
                        ? "surface-glossy-active border-copper text-ink font-bold shadow-sm"
                        : "bg-transparent text-pebble hover:text-ink hover:surface-cream-glossy"
                    }`}
                  >
                    <span className="text-copper font-bold">{service.num}</span>
                    <span>{service.shortTitle}</span>
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1 shrink-0 pl-2 border-l border-hairline">
                <button
                  type="button"
                  onClick={() =>
                    serviceStepper.goToStep(activeServiceIndex - 1, "smooth")
                  }
                  disabled={activeServiceIndex === 0}
                  aria-label="Servicio anterior"
                  className="w-7 h-7 rounded-[2px] border border-hairline flex items-center justify-center text-ink disabled:opacity-30 disabled:cursor-not-allowed hover:border-copper hover:text-copper transition-colors"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    serviceStepper.goToStep(activeServiceIndex + 1, "smooth")
                  }
                  disabled={activeServiceIndex === services.length - 1}
                  aria-label="Siguiente servicio"
                  className="w-7 h-7 rounded-[2px] border border-hairline flex items-center justify-center text-ink disabled:opacity-30 disabled:cursor-not-allowed hover:border-copper hover:text-copper transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Viewport del Servicio Activo */}
            <div className="relative min-h-[390px] flex items-center">
              {services.map((service, idx) => {
                const isActive = activeServiceIndex === idx;
                const isBefore = idx < activeServiceIndex;

                return (
                  <article
                    key={service.num}
                    className={`w-full border rounded-[4px] p-10 will-change-transform transition-[transform,opacity] duration-300 ease-out ${
                      isActive
                        ? "relative z-10 opacity-100 translate-y-0 scale-100 surface-glossy-active border-copper ring-1 ring-copper/30"
                        : isBefore
                        ? "absolute inset-x-0 z-0 opacity-0 -translate-y-6 scale-[0.98] pointer-events-none surface-glossy border-glossy"
                        : "absolute inset-x-0 z-0 opacity-0 translate-y-6 scale-[0.98] pointer-events-none surface-glossy border-glossy"
                    }`}
                  >
                    <div className="grid grid-cols-12 gap-10 items-center">
                      <div className="col-span-5 xl:col-span-6">
                        <div className="aspect-[4/3] w-full rounded-[3px] border border-hairline overflow-hidden relative bg-[#f5f1eb] flex items-center justify-center shadow-sm">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 bg-surface/95 border border-hairline rounded-[2px] font-mono text-[10px] font-bold text-copper">
                            {service.num}
                          </div>
                        </div>
                      </div>

                      <div className="col-span-7 xl:col-span-6 space-y-3.5">
                        <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.14em] text-copper">
                          <span>
                            {service.num} / 0{services.length}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-copper/40" />
                          <span className="text-pebble tracking-wider truncate">
                            {service.title}
                          </span>
                        </div>

                        <h3 className="text-3xl font-bold text-ink tracking-tight leading-snug">
                          {service.claim}
                        </h3>

                        <p className="text-base text-body leading-relaxed">
                          {service.subclaim}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Puntos de progreso (sin texto informativo) */}
            <div className="pt-5 flex items-center gap-1.5">
              {services.map((s, idx) => (
                <button
                  key={s.num}
                  type="button"
                  onClick={() => serviceStepper.goToStep(idx, "smooth")}
                  aria-label={`Servicio ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeServiceIndex === idx
                      ? "w-7 bg-copper"
                      : "w-2 bg-hairline hover:bg-pebble"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
