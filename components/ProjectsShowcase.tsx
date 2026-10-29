"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";
import {
  PROJECT_CATEGORIES,
  PROJECTS_DATA,
  ProjectCategory,
  ProjectItem,
} from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>("todos");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  const filteredProjects =
    activeCategory === "todos"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section
      id="proyectos"
      className="dark-gallery-ambient text-cover-text border-b-2 border-black/60 scroll-mt-16 py-28 md:py-40 relative overflow-hidden"
    >
      {/* Filete superior sutil y tenue */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-white/[0.08]" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Cabecera Editorial de la Galería */}
        <div className="pb-6 mb-16 border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 border border-copper-light/80 rounded-[1px] relative">
              <div className="w-full h-[1px] bg-copper-light/80 absolute top-1" />
              <div className="w-[1px] h-3 bg-copper-light/80 absolute left-1 bottom-0" />
            </div>
            <span className="font-mono text-xs font-bold tracking-[0.18em] uppercase text-copper-light/90">
              DOSSIER VISUAL & ARCHIVO
            </span>
          </div>
          <span className="font-mono text-xs tracking-[0.14em] uppercase text-cover-secondary hidden sm:inline">
            03. PROYECTOS SELECCIONADOS
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <p className="font-mono text-xs font-bold tracking-[0.16em] uppercase text-copper-light/80 mb-3">
              GALERÍA PRINCIPAL
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cover-text tracking-tight">
              Obras y piezas por área de especialidad
            </h2>
            <p className="text-base text-cover-secondary mt-3 max-w-2xl leading-relaxed">
              Exploración de proyectos en cartelería comercial, sistemas de señalética física, identidades corporativas, infografías de obra y diseño web.
            </p>
          </div>

          {/* Barra de Filtros en Dark Gallery */}
          <div
            className="flex flex-wrap gap-2.5 pt-2"
            role="tablist"
            aria-label="Filtrar proyectos por categoría"
          >
            {PROJECT_CATEGORIES.map((cat) => {
              const count =
                cat.id === "todos"
                  ? PROJECTS_DATA.length
                  : PROJECTS_DATA.filter((p) => p.category === cat.id).length;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-[3px] font-mono text-xs transition-colors duration-200 inline-flex items-center gap-2.5 border ${
                    isActive
                      ? "bg-copper-light text-cover border-copper-light font-bold"
                      : "bg-white/[0.02] text-cover-secondary border-white/[0.08] hover:border-white/20 hover:text-cover-text"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`px-2 py-0.5 rounded-[2px] text-[10px] ${
                      isActive
                        ? "bg-black/20 text-cover font-bold"
                        : "bg-white/[0.05] text-cover-muted font-bold"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grilla Modular de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-9">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

        {/* Acceso a Portfolio Completo en Behance */}
        <div className="mt-14 sm:mt-16 flex justify-center">
          <a
            href={PROFILE_DATA.contact.behance}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver más proyectos de Alejo Garlati en Behance"
            className="group relative overflow-hidden inline-flex items-center gap-3.5 px-8 sm:px-10 py-4 sm:py-4.5 rounded-[4px] border border-white/[0.14] hover:border-white/30 bg-gradient-to-b from-[#24262b] via-[#17181b] to-[#0e0f11] shadow-[0_8px_28px_-6px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(0,0,0,0.4)] hover:shadow-[0_12px_36px_-6px_rgba(0,0,0,0.8),0_0_20px_rgba(255,255,255,0.06),inset_0_1px_0_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
          >
            {/* Resplandor superior nítido */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none" />

            {/* Efecto de brillo / destello diagonal al hacer hover */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none" />

            {/* Ícono de Behance */}
            <svg
              className="w-4 h-4 fill-[#c5c9d1] group-hover:fill-white transition-colors duration-200 shrink-0"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M7.79 12.3c.72-.25 1.25-.86 1.25-1.78 0-1.54-1.12-2.12-2.73-2.12H2v7.2h4.51c1.72 0 2.87-.76 2.87-2.31 0-.61-.31-1.19-.89-1.49l-.7-.2zm-3.3-2.3h1.8c.67 0 1.15.22 1.15.86 0 .61-.46.84-1.15.84H4.49V10zm2.02 4.01H4.49v-1.7h2.02c.76 0 1.29.24 1.29.85 0 .68-.53.85-1.29.85zM17.3 9.4c-2.4 0-4.04 1.71-4.04 4.14 0 2.47 1.63 4.16 4.09 4.16 1.83 0 3.19-.94 3.74-2.42h-1.92c-.31.54-.92.83-1.75.83-1.19 0-1.97-.73-2.06-1.87h5.88c.03-.22.05-.48.05-.72 0-2.43-1.59-4.12-3.99-4.12zm-1.95 3.31c.14-.95.84-1.63 1.94-1.63 1.05 0 1.76.68 1.89 1.63h-3.83zM14.86 7.42h4.88v1.17h-4.88z" />
            </svg>

            {/* Texto brilloso grisáceo claro */}
            <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-transparent bg-clip-text bg-gradient-to-b from-white via-[#dcdfe4] to-[#9fa4ad] group-hover:from-white group-hover:via-[#f3f4f6] group-hover:to-[#d1d5db] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
              Ver más proyectos
            </span>

            {/* Flecha exterior con microinteracción */}
            <ArrowUpRight className="w-4 h-4 text-[#c5c9d1] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" />
          </a>
        </div>

        {/* Modal de Inspección Técnica */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
