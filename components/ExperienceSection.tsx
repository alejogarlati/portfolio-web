"use client";

import React from "react";
import { PROFILE_DATA } from "@/data/profile";
import { useScrollStepper } from "@/hooks/useScrollStepper";
import { Briefcase, Compass } from "lucide-react";

export default function ExperienceSection() {
  const pillars = PROFILE_DATA.pillars;
  const experiences = PROFILE_DATA.experiences;

  const pillarStepper = useScrollStepper({
    totalSteps: pillars.length,
    PauseMs: 520,
  });

  const expStepper = useScrollStepper({
    totalSteps: experiences.length,
    PauseMs: 520,
    disableOnMobile: true,
  });

  return (
    <section
      id="enfoque"
      className="canvas-ambient-light text-ink border-b-2 border-hairline relative"
    >
      {/* ====================================================================
          BLOQUE 1: ENFOQUE DE TRABAJO
         ==================================================================== */}
      <div
        ref={pillarStepper.trackRef}
        className="relative w-full border-b border-hairline"
        style={{ height: `${pillars.length * 85}dvh` }}
      >
        <div
          ref={pillarStepper.stageRef}
          className="sticky top-0 h-[100svh] min-h-[100svh] w-full flex flex-col justify-center py-4 sm:py-10 lg:py-16 pb-[calc(env(safe-area-inset-bottom,0px)+1rem)] overflow-hidden select-none"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-10 w-full flex flex-col justify-center">
            {/* Cabecera Superior Compacta */}
            <div className="mb-3 lg:mb-10 pb-2 lg:pb-5 border-b border-hairline flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-copper rounded-[1px]" />
                <span className="font-mono text-[10px] sm:text-xs font-bold tracking-[0.16em] uppercase text-copper">
                  01. PERFIL & CRITERIO
                </span>
              </div>
            </div>

            {/* Grilla Principal del Escenario */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-14 items-center">
              {/* Columna Izquierda: Título & Controles de Breakpoint */}
              <div className="lg:col-span-5 space-y-2.5 sm:space-y-4 lg:space-y-6">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 surface-cream-glossy border border-hairline font-mono text-[10px] font-bold uppercase tracking-wider text-copper rounded-[2px]">
                  <Compass className="w-3 h-3" />
                  <span>Enfoque de Trabajo</span>
                </div>

                <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-ink tracking-tight leading-[1.15]">
                  Diseño con visión comercial, rigor técnico y criterio visual
                </h2>

                <p className="text-xs sm:text-sm lg:text-base text-body leading-relaxed hidden sm:block">
                  {PROFILE_DATA.bio}
                </p>

                {/* Selector de Breakpoints (sin flechas ni indicadores numéricos) */}
                <div className="pt-1 lg:pt-3 space-y-2">
                  <div className="w-full h-1 bg-hairline rounded-full overflow-hidden">
                    <div
                      className="h-full bg-copper transition-all duration-300 ease-out"
                      style={{
                        width: `${
                          ((pillarStepper.activeIndex + 1) / pillars.length) *
                          100
                        }%`,
                      }}
                    />
                  </div>

                  <div className="flex lg:flex-col gap-1.5 sm:gap-2">
                    {pillars.map((pillar, idx) => {
                      const isActive = pillarStepper.activeIndex === idx;
                      return (
                        <button
                          key={pillar.num}
                          type="button"
                          onClick={() => pillarStepper.goToStep(idx, "smooth")}
                          className={`flex-1 lg:flex-initial text-left px-2.5 py-1.5 lg:p-3.5 rounded-[3px] border transition-colors flex items-center justify-between ${
                            isActive
                              ? "surface-glossy-active border-copper text-ink font-bold"
                              : "bg-surface/60 border-hairline text-pebble hover:text-ink"
                          }`}
                        >
                          <div className="flex items-center gap-1.5 min-w-0">
                            <span
                              className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
                                isActive ? "bg-copper" : "bg-hairline"
                              }`}
                            />
                            <span className="text-xs truncate">
                              {pillar.title}
                            </span>
                          </div>
                          <span className="font-mono text-[10px] text-pebble hidden lg:inline">
                            {pillar.code}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Columna Derecha: Escenario de Cards con Transición GPU */}
              <div className="lg:col-span-7 relative min-h-[210px] sm:min-h-[280px] flex items-center">
                {pillars.map((pillar, idx) => {
                  const isActive = pillarStepper.activeIndex === idx;
                  const isPast = idx < pillarStepper.activeIndex;

                  return (
                    <div
                      key={pillar.num}
                      className={`w-full border rounded-[4px] p-5 sm:p-9 will-change-transform transition-[transform,opacity] duration-300 ease-out ${
                        isActive
                          ? "relative z-20 opacity-100 translate-y-0 scale-100 surface-glossy-active border-copper ring-1 ring-copper/30"
                          : isPast
                          ? "absolute inset-x-0 z-10 opacity-0 -translate-y-6 scale-[0.98] pointer-events-none surface-glossy border-glossy"
                          : "absolute inset-x-0 z-10 opacity-0 translate-y-6 scale-[0.98] pointer-events-none surface-glossy border-glossy"
                      }`}
                    >
                      <div className="pb-3 mb-3.5 sm:pb-4 sm:mb-5 border-b border-hairline">
                        <span className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase text-copper">
                          {pillar.code}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-ink mb-2.5 sm:mb-4 tracking-tight">
                        {pillar.title}
                      </h3>

                      <p className="text-xs sm:text-base text-body leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================================
          BLOQUE 2: TRAYECTORIA PROFESIONAL
          - Teléfono (< lg): Lista vertical natural sin animación ni bloqueo de scroll
          - Escritorio (lg+): Escenario interactivo paso a paso
         ==================================================================== */}
      <div id="experiencia" className="scroll-mt-16">
        {/* VISTA MÓVIL / TABLET (< lg): Scroll natural directo */}
        <div className="lg:hidden max-w-6xl mx-auto px-4 sm:px-8 py-14 sm:py-20">
          <div className="mb-6 pb-3 border-b border-hairline flex items-center gap-2">
            <Briefcase className="w-3.5 h-3.5 text-copper" />
            <span className="font-mono text-[11px] font-bold tracking-[0.16em] uppercase text-copper">
              TRAYECTORIA PROFESIONAL
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight leading-tight mb-6">
            Experiencia en empresas, agencias y proyectos
          </h2>

          <div className="space-y-4 sm:space-y-5">
            {experiences.map((exp, idx) => (
              <div
                key={exp.id}
                className="w-full border rounded-[4px] p-5 sm:p-6 surface-glossy border-glossy"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-hairline">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-[3px] surface-cream-glossy border border-glossy font-mono text-xs font-bold text-copper flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-ink leading-tight">
                        {exp.role}
                      </h3>
                      <p className="text-xs font-semibold text-copper">
                        {exp.company} •{" "}
                        <span className="text-pebble font-normal">
                          {exp.location}
                        </span>
                      </p>
                    </div>
                  </div>

                  <span className="px-2 py-0.5 surface-cream-glossy border border-glossy font-mono text-[10px] font-bold uppercase tracking-wider text-copper rounded-[2px]">
                    {exp.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-body leading-relaxed mb-3">
                  {exp.summary}
                </p>

                <ul className="space-y-1.5 mb-3.5">
                  {exp.highlights.map((item, i) => (
                    <li
                      key={i}
                      className="text-xs sm:text-sm text-body flex items-start gap-2 leading-snug"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-copper mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-hairline">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 surface-cream-glossy border border-glossy font-mono text-[10px] text-ink-secondary rounded-[2px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VISTA ESCRITORIO (lg+): Escenario paso a paso */}
        <div
          ref={expStepper.trackRef}
          className="hidden lg:block relative w-full"
          style={{ height: `${experiences.length * 85}dvh` }}
        >
          <div
            ref={expStepper.stageRef}
            className="sticky top-0 h-[100dvh] w-full flex flex-col justify-center py-14 overflow-hidden select-none"
          >
            <div className="max-w-6xl mx-auto px-10 w-full flex flex-col justify-center">
              <div className="mb-8 pb-4 border-b border-hairline flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5 text-copper" />
                <span className="font-mono text-xs font-bold tracking-[0.16em] uppercase text-copper">
                  TRAYECTORIA PROFESIONAL
                </span>
              </div>

              <div className="grid grid-cols-12 gap-14 items-center">
                <div className="col-span-5 space-y-6">
                  <h2 className="text-4xl font-bold text-ink tracking-tight leading-tight">
                    Experiencia en empresas, agencias y proyectos
                  </h2>

                  <p className="text-sm text-body leading-relaxed">
                    Más de 5 años desarrollando comunicación visual, gestión de
                    e-commerce, campañas digitales y producción gráfica para el
                    sector comercial, constructivo e inmobiliario.
                  </p>

                  <div className="space-y-2">
                    <div className="w-full h-1 bg-hairline rounded-full overflow-hidden">
                      <div
                        className="h-full bg-copper transition-all duration-300 ease-out"
                        style={{
                          width: `${
                            ((expStepper.activeIndex + 1) /
                              experiences.length) *
                            100
                          }%`,
                        }}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      {experiences.map((exp, idx) => {
                        const isActive = expStepper.activeIndex === idx;
                        return (
                          <button
                            key={exp.id}
                            type="button"
                            onClick={() => expStepper.goToStep(idx, "smooth")}
                            className={`text-left p-3.5 rounded-[3px] border transition-colors flex items-center justify-between ${
                              isActive
                                ? "surface-glossy-active border-copper text-ink font-bold"
                                : "bg-surface/60 border-hairline text-pebble hover:text-ink"
                            }`}
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <span
                                className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                                  isActive ? "bg-copper" : "bg-hairline"
                                }`}
                              />
                              <span className="text-xs truncate">
                                {exp.company}
                              </span>
                            </div>
                            <span className="font-mono text-[10px] text-pebble shrink-0 ml-2">
                              {exp.period.split("—")[0].trim()}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="col-span-7 relative flex items-center min-h-[340px]">
                  {experiences.map((exp, idx) => {
                    const isActive = expStepper.activeIndex === idx;
                    const isPast = idx < expStepper.activeIndex;

                    return (
                      <div
                        key={exp.id}
                        className={`w-full border rounded-[4px] p-8 will-change-transform transition-[transform,opacity] duration-300 ease-out ${
                          isActive
                            ? "relative z-20 opacity-100 translate-y-0 scale-100 surface-glossy-active border-copper ring-1 ring-copper/30"
                            : isPast
                            ? "absolute inset-x-0 z-10 opacity-0 -translate-y-6 scale-[0.98] pointer-events-none surface-glossy border-glossy"
                            : "absolute inset-x-0 z-10 opacity-0 translate-y-6 scale-[0.98] pointer-events-none surface-glossy border-glossy"
                        }`}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 mb-3.5 border-b border-hairline">
                          <div className="flex items-center gap-2.5">
                            <span className="w-8 h-8 rounded-[3px] surface-cream-glossy border border-glossy font-mono text-xs font-bold text-copper flex items-center justify-center shrink-0">
                              0{idx + 1}
                            </span>
                            <div>
                              <h3 className="text-xl font-bold text-ink leading-tight">
                                {exp.role}
                              </h3>
                              <p className="text-sm font-semibold text-copper">
                                {exp.company} •{" "}
                                <span className="text-pebble font-normal">
                                  {exp.location}
                                </span>
                              </p>
                            </div>
                          </div>

                          <span className="px-2.5 py-0.5 surface-cream-glossy border border-glossy font-mono text-[11px] font-bold uppercase tracking-wider text-copper rounded-[2px]">
                            {exp.period}
                          </span>
                        </div>

                        <p className="text-sm text-body leading-snug mb-3.5">
                          {exp.summary}
                        </p>

                        <ul className="space-y-2 mb-4">
                          {exp.highlights.map((item, i) => (
                            <li
                              key={i}
                              className="text-sm text-body flex items-start gap-2 leading-snug"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-copper mt-1.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-hairline">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-0.5 surface-cream-glossy border border-glossy font-mono text-xs text-ink-secondary rounded-[2px]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
