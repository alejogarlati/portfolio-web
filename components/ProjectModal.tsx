"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileText,
  Globe,
  Layers,
  Maximize2,
  Minimize2,
  Move,
  ZoomIn,
  ZoomOut,
  X,
} from "lucide-react";
import { ProjectItem } from "@/data/projects";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

type PieceCategory =
  | "web-scroll"
  | "totem"
  | "story-9-16"
  | "post-4-5"
  | "square-1-1"
  | "landscape"
  | "panoramic";

function classifyRatio(w: number, h: number): {
  type: PieceCategory;
  badge: string;
} {
  const r = w / h;
  if (r <= 0.3) {
    return { type: "web-scroll", badge: "LANDING COMPLETA • SCROLL VERTICAL" };
  }
  if (r < 0.45) {
    return { type: "totem", badge: "FORMATO TÓTEM VERTICAL" };
  }
  if (r <= 0.65) {
    return { type: "story-9-16", badge: "FORMATO VERTICAL 9:16" };
  }
  if (r <= 0.9) {
    return { type: "post-4-5", badge: "FORMATO FEED 4:5" };
  }
  if (r <= 1.15) {
    return { type: "square-1-1", badge: "FORMATO 1:1" };
  }
  if (r >= 2.15) {
    return {
      type: "panoramic",
      badge: r > 3 ? "BANNER PANORÁMICO 4:1" : "PANTALLA WIDESCREEN 2.5:1",
    };
  }
  return { type: "landscape", badge: "LÁMINA HORIZONTAL" };
}

function getReadablePieceTitle(url: string, idx: number): string {
  const raw = decodeURIComponent(url.split("/").pop() || "").replace(
    /\.(png|jpg|jpeg|webp)$/i,
    ""
  );
  if (!raw) return `Pieza 0${idx + 1}`;

  const map: Record<string, string> = {
    "Feed preview - muestra": "Feed Preview — Sistema Visual",
    "Stories preview - muestra 1": "Stories Preview — Muestra 01",
    "Stories preview - muestra 2": "Stories Preview — Muestra 02",
    "Jun posteo 7 - I 1": "Carrusel Junio — Portada (1/5)",
    "Jun posteo 7 - I 2": "Carrusel Junio — Desarrollo (2/5)",
    "Jun posteo 7 - I 3": "Carrusel Junio — Desarrollo (3/5)",
    "Jun posteo 7 - I 4": "Carrusel Junio — Desarrollo (4/5)",
    "Jun posteo 7 - I 5": "Carrusel Junio — Cierre (5/5)",
    "Sep posteo 1R 1": "Pieza Vertical — Lanzamiento Septiembre",
    "Sep posteo 2 - I 1": "Carrusel Septiembre — Portada (1/4)",
    "Sep posteo 2 - I 2": "Carrusel Septiembre — Desarrollo (2/4)",
    "Sep posteo 2 - I 3": "Carrusel Septiembre — Desarrollo (3/4)",
    "Sep posteo 2 - I 4": "Carrusel Septiembre — Cierre (4/4)",
    "Oct form1 - G 1": "Banner de Cabecera para Formulario",
    "PPT - Bienvenidos": "Pantalla Widescreen — Bienvenidos",
    "PPT - Permanente": "Pantalla Widescreen — Permanente",
    "PPT - Sponsors": "Pantalla Widescreen — Sponsors",
    "Totem - Logo": "Tótem Físico Vertical — Acceso",
    "Flyer agotadas - I 1": "Flyer — Entradas Agotadas",
    "Certificado Sponsors - 1": "Certificado en Lote — Muestra 01",
    "Certificado Sponsors - 2": "Certificado en Lote — Muestra 02",
    Landing: "Mockup Completo — Landing Page",
    "Paleta Landing SP": "Sistema Cromático & Componentes UI",
    "Triptico 1 - Mockup": "Tríptico Institucional 01 — Mockup",
    "Triptico 2 - Mockup": "Tríptico Institucional 02 — Mockup",
    "Etiquetas navidad - circulares 50mm preview":
      "Etiquetas Circulares 50mm — Preview",
    "Sorteo cookies - I 3": "Aplicación de Etiqueta en Producto",
    "Pascuas 2026 S 1": "Etiquetas Especiales — Pascuas 2026",
    "tarjeta-1-cara-1": "Tarjeta Personal — Frente (Original Imprenta)",
    "tarjeta-1-cara-2": "Tarjeta Personal — Dorso (Original Imprenta)",
    "AD-Buisness-Card-Free-Mockup": "Presentación de Tarjetas en Mockup",
    "Propuesta pharmatuk - 1": "Propuesta de Identidad Visual",
    "Feed preview - general": "Preview General de Grilla en Feed",
    "Corregido - Pack lifting - S 1": "Banner Vertical — Pack Lifting",
    "Corregido - Pack rec. muscular - S 1":
      "Banner Vertical — Recuperación Muscular",
    "Corregido - Pack fiestas - S 1": "Banner Vertical — Pack Fiestas",
    "Perfil IG Oscuro": "Isotipo sobre Fondo Oscuro",
    "Perfil IG Oscuro bg": "Isotipo con Textura de Marca",
    "fussion-behance-full": "Presentación Continua Behance (Scroll)",
    "fussion-section-1": "Briefing Fussion — Portada & Concepto",
    "fussion-section-2": "Briefing Fussion — Enfoque Estratégico",
    "fussion-section-3": "Briefing Fussion — Propuesta de Valor",
    "fussion-section-4": "Briefing Fussion — Servicios & Soluciones",
    "fussion-section-5": "Briefing Fussion — Alcance de Marca",
    "fussion-section-6": "Briefing Fussion — Metodología & Planificación",
    "fussion-section-7": "Briefing Fussion — Planes Comerciales",
    "fussion-section-8": "Briefing Fussion — Detalle de Entregables",
    "fussion-section-9": "Briefing Fussion — Redes & Performance",
    "fussion-section-10": "Briefing Fussion — Mockup 3D & Dirección de Arte",
    "fussion-section-11": "Briefing Fussion — Identidad & Cierre",
    "fussion-page-1": "Dossier Fussion — Portada (1/5)",
    "fussion-page-2": "Dossier Fussion — Alcance (2/5)",
    "fussion-page-3": "Dossier Fussion — Planes (3/5)",
    "fussion-page-4": "Dossier Fussion — Entregables (4/5)",
    "fussion-page-5": "Dossier Fussion — Cierre (5/5)",
  };

  return map[raw] || raw;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isLightbox, setIsLightbox] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [imgDims, setImgDims] = useState<{ w: number; h: number }>({
    w: 1280,
    h: 800,
  });

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const stageScrollRef = useRef<HTMLDivElement | null>(null);

  const images =
    project?.gallery && project.gallery.length > 0
      ? project.gallery
      : project
      ? [project.image]
      : [];

  useEffect(() => {
    setActiveImgIndex(0);
    setIsLightbox(false);
    setIsZoomed(false);
  }, [project]);

  useEffect(() => {
    setIsZoomed(false);
    if (stageScrollRef.current) {
      stageScrollRef.current.scrollTop = 0;
      stageScrollRef.current.scrollLeft = 0;
    }
  }, [activeImgIndex]);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isLightbox) {
          setIsLightbox(false);
        } else {
          onClose();
        }
      } else if (e.key === "ArrowLeft") {
        setActiveImgIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
      } else if (e.key === "ArrowRight") {
        setActiveImgIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, isLightbox, images.length, onClose]);

  if (!project) return null;

  const currentImage = images[activeImgIndex] || project.image;
  const pieceInfo = classifyRatio(imgDims.w, imgDims.h);
  const pieceTitle = getReadablePieceTitle(currentImage, activeImgIndex);
  const isPdf = project.externalUrl?.endsWith(".pdf");
  const isWeb = project.externalUrl?.startsWith("http");

  const handlePrev = () => {
    setActiveImgIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setActiveImgIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const onTouchStart = (e: React.TouchEvent) => {
    if (isZoomed || pieceInfo.type === "web-scroll") return;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (
      isZoomed ||
      pieceInfo.type === "web-scroll" ||
      touchStartX.current === null ||
      touchStartY.current === null
    )
      return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.4 && images.length > 1) {
      if (dx < 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <>
      {/* Modal Principal — Fullscreen Drawer en Móvil, Dialog Editorial en Desktop */}
      <div
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-5 md:p-8 bg-black/85 backdrop-blur-sm"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        <div
          className="bg-surface border-t sm:border border-hairline rounded-t-[12px] sm:rounded-[4px] max-w-4xl w-full h-[84svh] sm:h-auto sm:max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Cabecera Fija Compacta */}
          <div className="px-4 py-3.5 sm:px-7 sm:py-5 border-b border-hairline flex items-start justify-between gap-3 bg-surface shrink-0">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-copper font-bold mb-0.5">
                <span>FICHA #{project.num}</span>
                <span>•</span>
                <span className="truncate">{project.client}</span>
                <span className="hidden sm:inline">•</span>
                <span className="text-pebble hidden sm:inline">{project.year}</span>
              </div>
              <h2
                id="modal-project-title"
                className="text-base sm:text-xl md:text-2xl font-bold text-ink tracking-tight leading-snug line-clamp-2"
              >
                {project.title}
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar ficha técnica"
              className="w-9 h-9 rounded-[3px] bg-cream border border-hairline flex items-center justify-center text-ink hover:border-copper hover:text-copper transition-colors shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Cuerpo Principal con Scroll Único */}
          <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-7 sm:py-6 space-y-6">
            {/* ==============================================================
                VISOR ADAPTATIVO SEGÚN EL FORMATO DE CADA PIEZA GRÁFICA
               ============================================================== */}
            <div className="space-y-3">
              {/* Barra Superior del Visor */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="px-2 py-0.5 bg-cream border border-hairline rounded-[2px] font-mono text-[10px] font-bold text-copper shrink-0">
                    {activeImgIndex + 1} / {images.length}
                  </span>
                  <span className="font-mono text-[11px] font-bold text-ink truncate">
                    {pieceTitle}
                  </span>
                  <span className="hidden md:inline-block px-2 py-0.5 bg-cream/70 border border-hairline rounded-[2px] font-mono text-[10px] text-pebble">
                    {pieceInfo.badge}
                  </span>
                </div>

                {/* Controles de Lupa / Pantalla Completa */}
                <div className="flex items-center gap-1.5 shrink-0">
                  {pieceInfo.type !== "web-scroll" && (
                    <button
                      type="button"
                      onClick={() => setIsZoomed((z) => !z)}
                      className={`px-2.5 py-1 rounded-[2px] font-mono text-[10px] sm:text-[11px] font-bold border transition-colors flex items-center gap-1 ${
                        isZoomed
                          ? "bg-copper text-white border-copper"
                          : "bg-cream text-ink border-hairline hover:border-copper"
                      }`}
                    >
                      {isZoomed ? (
                        <>
                          <ZoomOut className="w-3.5 h-3.5" />
                          <span>Ajustar</span>
                        </>
                      ) : (
                        <>
                          <ZoomIn className="w-3.5 h-3.5 text-copper" />
                          <span>Zoom 2x</span>
                        </>
                      )}
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => setIsLightbox(true)}
                    className="px-2.5 py-1 rounded-[2px] font-mono text-[10px] sm:text-[11px] font-bold bg-cream text-ink border border-hairline hover:border-copper transition-colors flex items-center gap-1"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-copper" />
                    <span className="hidden xs:inline">Ampliar</span>
                  </button>
                </div>
              </div>

              {/* Contenedor del Escenario Gráfico Adaptativo */}
              <div
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                className="relative w-full bg-[#111214] border border-hairline rounded-[4px] overflow-hidden select-none"
              >
                {/* CASO 1: LANDING PAGE COMPLETA (1920x9680 -> Ancho 100% + Scroll Vertical Nítido) */}
                {pieceInfo.type === "web-scroll" ? (
                  <div className="flex flex-col">
                    <div className="px-3 py-2 bg-[#1a1b1f] border-b border-white/10 flex items-center justify-between text-[10px] font-mono text-white/70">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-copper/80" />
                        <span className="w-2 h-2 rounded-full bg-white/25" />
                        <span className="w-2 h-2 rounded-full bg-white/25" />
                        <span className="ml-1.5 text-white/90 font-bold">
                          VISTA MOCKUP COMPLETO
                        </span>
                      </div>
                      <span className="text-copper-light">
                        Deslizá hacia abajo para recorrer la landing ↕
                      </span>
                    </div>
                    <div
                      ref={stageScrollRef}
                      className="max-h-[46svh] sm:max-h-[62vh] overflow-y-auto overscroll-contain w-full bg-[#0d0e10]"
                    >
                      <img
                        src={currentImage}
                        alt={pieceTitle}
                        onLoad={(e) => {
                          const el = e.currentTarget;
                          if (el.naturalWidth && el.naturalHeight) {
                            setImgDims({
                              w: el.naturalWidth,
                              h: el.naturalHeight,
                            });
                          }
                        }}
                        className="w-full h-auto block"
                      />
                    </div>
                  </div>
                ) : isZoomed ? (
                  /* CASO 2: MODO ZOOM DE LECTURA ACTIVO (Desplazamiento Libre 2D en Teléfono/Desktop) */
                  <div className="flex flex-col">
                    <div className="px-3 py-1.5 bg-copper/20 border-b border-copper/30 flex items-center justify-between text-[10px] font-mono text-copper-light">
                      <span className="flex items-center gap-1.5">
                        <Move className="w-3 h-3" />
                        Arrastrá para inspeccionar los detalles y textos
                      </span>
                      <button
                        type="button"
                        onClick={() => setIsZoomed(false)}
                        className="underline font-bold"
                      >
                        Salir de zoom
                      </button>
                    </div>
                    <div
                      ref={stageScrollRef}
                      className="max-h-[48svh] sm:max-h-[64vh] overflow-auto overscroll-contain w-full bg-[#0d0e10] p-2"
                    >
                      <img
                        src={currentImage}
                        alt={pieceTitle}
                        onClick={() => setIsZoomed(false)}
                        className={
                          pieceInfo.type === "panoramic"
                            ? "h-[220px] sm:h-[380px] w-auto max-w-none block mx-auto cursor-zoom-out"
                            : "w-[210%] sm:w-[165%] max-w-none h-auto block cursor-zoom-out"
                        }
                      />
                    </div>
                  </div>
                ) : (
                  /* CASO 3: VISTA ADAPTADA AL FORMATO EXACTO DE CADA PIEZA (Sin bordes negros muertos) */
                  <div
                    className={`w-full flex items-center justify-center bg-[#111214] ${
                      pieceInfo.type === "story-9-16" || pieceInfo.type === "totem"
                        ? "py-1.5 px-3 max-h-[46svh] sm:max-h-[62vh]"
                        : pieceInfo.type === "post-4-5" ||
                          pieceInfo.type === "square-1-1"
                        ? "p-0 sm:p-3 max-h-[48svh] sm:max-h-[62vh]"
                        : "p-0"
                    }`}
                  >
                    <img
                      src={currentImage}
                      alt={pieceTitle}
                      onClick={() => setIsZoomed(true)}
                      onLoad={(e) => {
                        const el = e.currentTarget;
                        if (el.naturalWidth && el.naturalHeight) {
                          setImgDims({
                            w: el.naturalWidth,
                            h: el.naturalHeight,
                          });
                        }
                      }}
                      className={`cursor-zoom-in transition-all duration-200 ${
                        pieceInfo.type === "story-9-16" ||
                        pieceInfo.type === "totem"
                          ? "max-h-[44svh] sm:max-h-[58vh] w-auto object-contain rounded-[2px]"
                          : pieceInfo.type === "post-4-5" ||
                            pieceInfo.type === "square-1-1"
                          ? "w-full sm:w-auto sm:max-h-[58vh] h-auto object-contain"
                          : "w-full h-auto max-h-[48svh] sm:max-h-[62vh] object-contain block"
                      }`}
                    />
                  </div>
                )}

                {/* Botones Flotantes Anterior / Siguiente */}
                {images.length > 1 && !isZoomed && (
                  <>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrev();
                      }}
                      aria-label="Pieza anterior"
                      className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/75 text-white border border-white/25 flex items-center justify-center hover:bg-copper active:scale-95 transition-all shadow-lg z-10"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                      }}
                      aria-label="Siguiente pieza"
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/75 text-white border border-white/25 flex items-center justify-center hover:bg-copper active:scale-95 transition-all shadow-lg z-10"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Pie informativo del visor en móvil + Tira de Miniaturas */}
              <div className="flex items-center justify-between text-[10px] font-mono text-pebble px-0.5">
                <span>
                  {pieceInfo.badge} ({imgDims.w}×{imgDims.h} px)
                </span>
                {pieceInfo.type !== "web-scroll" && (
                  <button
                    type="button"
                    onClick={() => setIsZoomed((z) => !z)}
                    className="text-copper font-bold hover:underline"
                  >
                    {isZoomed ? "Restaurar vista" : "Tocar imagen para Zoom 2x"}
                  </button>
                )}
              </div>

              {images.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto py-1.5 no-scrollbar">
                  {images.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImgIndex(idx)}
                      className={`relative w-16 h-12 sm:w-20 sm:h-14 shrink-0 rounded-[3px] overflow-hidden border transition-all ${
                        activeImgIndex === idx
                          ? "border-copper ring-2 ring-copper/40 opacity-100 scale-[1.02]"
                          : "border-hairline opacity-55 hover:opacity-100 bg-[#121315]"
                      }`}
                    >
                      <img
                        src={imgUrl}
                        alt={`Miniatura ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-0.5 right-0.5 px-1 bg-black/75 text-white font-mono text-[8px] rounded-[1px]">
                        {idx + 1}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* ==============================================================
                INFORMACIÓN TÉCNICA DEL PROYECTO
               ============================================================== */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 pt-2 border-t border-hairline">
              <div className="md:col-span-7 space-y-4">
                <div>
                  <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-copper mb-1.5">
                    ALCANCE & OBJETIVO DEL TRABAJO
                  </h4>
                  <p className="text-xs sm:text-sm text-body leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-ink mb-2">
                    PIEZAS Y ENTREGABLES GENERADOS
                  </h4>
                  <ul className="space-y-1.5">
                    {project.deliverables.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-xs sm:text-sm text-body flex items-start gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="md:col-span-5 space-y-4">
                <div className="bg-cream/70 border border-hairline rounded-[4px] p-4">
                  <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-ink mb-1.5">
                    <Layers className="w-3.5 h-3.5 text-copper" />
                    <span>ESPECIFICACIONES TÉCNICAS</span>
                  </div>
                  <p className="text-xs text-body leading-relaxed font-mono">
                    {project.specs}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-cream border border-hairline font-mono text-[10px] sm:text-[11px] text-ink-secondary rounded-[2px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pie Fijo con Enlaces de Acción */}
          <div className="px-4 py-2.5 sm:px-7 sm:py-4 pb-[calc(env(safe-area-inset-bottom,0px)+0.75rem)] border-t border-hairline bg-surface flex flex-wrap items-center justify-between gap-2 shrink-0">
            <a
              href={currentImage}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] text-copper font-bold hover:underline inline-flex items-center gap-1"
            >
              <span>Ver archivo original HD</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <div className="flex flex-wrap items-center gap-2">
              {isPdf && (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-cream border border-hairline font-mono text-[11px] font-bold uppercase tracking-wider text-ink rounded-[3px] hover:border-copper hover:text-copper transition-colors inline-flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-copper" />
                  <span>Brief (PDF)</span>
                </a>
              )}

              {isWeb && (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-cream border border-hairline font-mono text-[11px] font-bold uppercase tracking-wider text-ink rounded-[3px] hover:border-copper hover:text-copper transition-colors inline-flex items-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5 text-copper" />
                  <span>Sitio Web</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}

              {project.behanceUrl && (
                <a
                  href={project.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 sm:px-4 sm:py-2 bg-copper text-white font-mono text-[11px] font-bold uppercase tracking-wider rounded-[3px] hover:bg-copper-dark transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Behance</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}

              <button
                type="button"
                onClick={onClose}
                className="px-3.5 py-1.5 sm:px-4 sm:py-2 border border-hairline font-mono text-[11px] uppercase tracking-wider text-body hover:text-ink rounded-[3px]"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================================
          LIGHTBOX A PANTALLA COMPLETA (Con Modo Zoom Legible en Móvil)
         ==================================================================== */}
      {isLightbox && (
        <div
          className="fixed inset-0 z-[70] bg-black/95 flex flex-col justify-between p-3 sm:p-6"
          onClick={() => setIsLightbox(false)}
        >
          {/* Barra Superior Lightbox */}
          <div
            className="flex items-center justify-between gap-2 text-white z-10 pb-3 border-b border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="min-w-0">
              <p className="font-mono text-xs font-bold text-copper-light truncate">
                {pieceTitle}
              </p>
              <p className="font-mono text-[10px] text-white/60">
                Pieza {activeImgIndex + 1} de {images.length} • {imgDims.w}×
                {imgDims.h} px
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {pieceInfo.type !== "web-scroll" && (
                <button
                  type="button"
                  onClick={() => setIsZoomed((z) => !z)}
                  className={`px-3 py-1.5 rounded-[3px] font-mono text-xs font-bold inline-flex items-center gap-1.5 transition-colors ${
                    isZoomed
                      ? "bg-copper text-white"
                      : "bg-white/15 hover:bg-white/25 text-white"
                  }`}
                >
                  {isZoomed ? (
                    <>
                      <ZoomOut className="w-3.5 h-3.5" />
                      <span>Ajustar</span>
                    </>
                  ) : (
                    <>
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Zoom 2x</span>
                    </>
                  )}
                </button>
              )}

              <button
                type="button"
                onClick={() => setIsLightbox(false)}
                className="w-9 h-9 rounded-[3px] bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
                aria-label="Cerrar pantalla completa"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Área Central del Lightbox */}
          <div
            className="flex-1 overflow-auto overscroll-contain flex items-start sm:items-center justify-start sm:justify-center my-2 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage}
              alt={pieceTitle}
              onClick={() => {
                if (pieceInfo.type !== "web-scroll") setIsZoomed((z) => !z);
              }}
              className={
                pieceInfo.type === "web-scroll"
                  ? "w-full max-w-4xl mx-auto h-auto block"
                  : isZoomed
                  ? "w-[220vw] sm:w-[150vw] max-w-none h-auto block cursor-zoom-out"
                  : "max-w-full max-h-[74svh] sm:max-h-[78vh] w-auto h-auto m-auto object-contain cursor-zoom-in"
              }
            />
          </div>

          {/* Barra Inferior de Navegación en Lightbox */}
          {images.length > 1 && (
            <div
              className="pt-3 pb-[calc(env(safe-area-inset-bottom,0px)+0.5rem)] border-t border-white/10 flex items-center justify-between gap-3 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={handlePrev}
                className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-[3px] font-mono text-xs flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Anterior</span>
              </button>

              <span className="font-mono text-xs text-white/70">
                {activeImgIndex + 1} / {images.length}
              </span>

              <button
                type="button"
                onClick={handleNext}
                className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-[3px] font-mono text-xs flex items-center gap-1"
              >
                <span>Siguiente</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
