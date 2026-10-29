"use client";

import React, { useState } from "react";
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

        {/* Modal de Inspección Técnica */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
