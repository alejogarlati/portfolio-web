"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getProfileData } from "@/data/profile";
import {
  getProjectCategories,
  getProjectsData,
  ProjectCategory,
} from "@/data/projects";
import { UI_COPY } from "@/data/ui";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function ProjectsShowcase() {
  const { lang } = useLanguage();
  const profile = getProfileData(lang);
  const categories = getProjectCategories(lang);
  const projects = getProjectsData(lang);
  const copy = UI_COPY[lang].projects;

  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>("todos");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  );

  const selectedProject =
    projects.find((p) => p.id === selectedProjectId) ?? null;

  const filteredProjects =
    activeCategory === "todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
              {copy.dossierTag}
            </span>
          </div>
          <span className="font-mono text-xs tracking-[0.14em] uppercase text-cover-secondary hidden sm:inline">
            {copy.sectionCode}
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <p className="font-mono text-xs font-bold tracking-[0.16em] uppercase text-copper-light/80 mb-3">
              {copy.galleryEyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cover-text tracking-tight">
              {copy.heading}
            </h2>
            <p className="text-base text-cover-secondary mt-3 max-w-2xl leading-relaxed">
              {copy.subtitle}
            </p>
          </div>

          {/* Barra de Filtros en Dark Gallery */}
          <div
            className="flex flex-wrap gap-2.5 pt-2"
            role="tablist"
            aria-label={copy.filterAria}
          >
            {categories.map((cat) => {
              const count =
                cat.id === "todos"
                  ? projects.length
                  : projects.filter((p) => p.category === cat.id).length;
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
              onSelect={(proj) => setSelectedProjectId(proj.id)}
            />
          ))}
        </div>

        {/* Acceso a Portfolio Completo en Behance */}
        <div className="mt-10 sm:mt-12">
          <a
            href={profile.contact.behance}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={copy.behanceAria}
            className="group relative overflow-hidden w-full flex items-center justify-center gap-3.5 px-6 py-5 md:py-7 rounded-[4px] border border-white/[0.07] hover:border-copper-light/45 bg-white/[0.02] hover:bg-[#1c1d21] opacity-75 hover:opacity-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:shadow-[0_16px_40px_-10px_rgba(0,0,0,0.75),0_0_24px_rgba(213,176,153,0.12),inset_0_1px_0_rgba(255,255,255,0.22)] transition-all duration-300 ease-out active:scale-[0.995]"
          >
            {/* Resplandor superior sutil */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 group-hover:via-copper-light/50 to-transparent transition-colors duration-300 pointer-events-none" />

            {/* Destello diagonal al hacer hover */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/[0.07] to-transparent pointer-events-none" />

            {/* Ícono de Behance */}
            <svg
              className="w-4 h-4 fill-[#9e9b95] group-hover:fill-copper-light transition-colors duration-300 shrink-0"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M7.79 12.3c.72-.25 1.25-.86 1.25-1.78 0-1.54-1.12-2.12-2.73-2.12H2v7.2h4.51c1.72 0 2.87-.76 2.87-2.31 0-.61-.31-1.19-.89-1.49l-.7-.2zm-3.3-2.3h1.8c.67 0 1.15.22 1.15.86 0 .61-.46.84-1.15.84H4.49V10zm2.02 4.01H4.49v-1.7h2.02c.76 0 1.29.24 1.29.85 0 .68-.53.85-1.29.85zM17.3 9.4c-2.4 0-4.04 1.71-4.04 4.14 0 2.47 1.63 4.16 4.09 4.16 1.83 0 3.19-.94 3.74-2.42h-1.92c-.31.54-.92.83-1.75.83-1.19 0-1.97-.73-2.06-1.87h5.88c.03-.22.05-.48.05-.72 0-2.43-1.59-4.12-3.99-4.12zm-1.95 3.31c.14-.95.84-1.63 1.94-1.63 1.05 0 1.76.68 1.89 1.63h-3.83zM14.86 7.42h4.88v1.17h-4.88z" />
            </svg>

            {/* Texto */}
            <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#a6a39d] group-hover:text-cover-text transition-colors duration-300">
              {copy.behanceCta}
            </span>

            {/* Flecha exterior con microinteracción */}
            <ArrowUpRight className="w-4 h-4 text-[#9e9b95] group-hover:text-copper-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
          </a>
        </div>

        {/* Modal de Inspección Técnica */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProjectId(null)}
        />
      </div>
    </section>
  );
}
