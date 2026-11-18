"use client";

import React, { useState } from "react";
import { ArrowUpRight, Eye, Image as ImageIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ProjectItem } from "@/data/projects";
import { UI_COPY } from "@/data/ui";

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const { lang } = useLanguage();
  const copy = UI_COPY[lang].projects;
  const [imgError, setImgError] = useState(false);

  return (
    <article className="card-dark-glossy border border-white/[0.07] rounded-[4px] flex flex-col justify-between transition-colors duration-300 hover:border-white/20 group">
      <div>
        {/* Cabecera de Imagen con aspect-ratio 16:10 */}
        <div
          onClick={() => onSelect(project)}
          className="aspect-[16/10] w-full border-b border-white/[0.06] overflow-hidden cursor-pointer relative bg-[#101113]"
        >
          {!imgError ? (
            <img
              src={project.image}
              alt={project.title}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-[#151618] p-6 flex flex-col justify-between items-center text-center">
              <span className="font-mono text-[10px] text-copper-light uppercase">
                {project.discipline}
              </span>
              <div className="space-y-1">
                <ImageIcon className="w-8 h-8 text-copper-light/60 mx-auto" />
                <p className="text-xs font-bold text-cover-text">{project.title}</p>
                <p className="font-mono text-[9px] text-[#7a7873]">
                  {copy.archiveFallback}
                </p>
              </div>
              <span className="font-mono text-[9px] text-cover-secondary">
                {project.client}
              </span>
            </div>
          )}

          {/* Badge sutil numérico en la esquina */}
          <div className="absolute top-3 right-3 px-2 py-0.5 bg-black/60 backdrop-blur-sm border border-white/10 rounded-[2px] font-mono text-[9px] text-white/80">
            {project.num}
          </div>
        </div>

        {/* Cuerpo de la Tarjeta */}
        <div className="p-7">
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-copper-light">
              {project.discipline}
            </span>
            <span className="font-mono text-[11px] text-cover-muted">
              {project.year}
            </span>
          </div>

          <h3
            onClick={() => onSelect(project)}
            className="text-base sm:text-lg font-bold text-cover-text group-hover:text-copper-light transition-colors cursor-pointer leading-snug"
          >
            {project.title}
          </h3>

          <p className="text-xs font-semibold text-cover-secondary mt-1">
            {copy.clientPrefix} {project.client}
          </p>

          <p className="text-xs sm:text-[13px] text-[#9a9fa7] leading-relaxed mt-3.5 line-clamp-3">
            {project.summary}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-white/[0.06]">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 bg-white/[0.03] border border-white/[0.05] font-mono text-[10px] text-cover-secondary rounded-[2px]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Pie de Tarjeta con Acciones */}
      <div className="px-7 pb-6 pt-2 flex items-center justify-between border-t border-white/[0.05]">
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-cover-text hover:text-copper-light inline-flex items-center gap-1.5 transition-colors"
        >
          <Eye className="w-3.5 h-3.5 text-copper-light" />
          <span>{copy.viewSpecSheet}</span>
        </button>

        {project.behanceUrl && (
          <a
            href={project.behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-cover-secondary hover:text-copper-light inline-flex items-center gap-1 transition-colors"
          >
            <span>Behance</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </article>
  );
}
