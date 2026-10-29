export type ProjectCategory =
  | "todos"
  | "inmobiliaria-obras"
  | "editorial-branding"
  | "digital-web";

export interface ProjectItem {
  id: string;
  num: string;
  title: string;
  client: string;
  category: Exclude<ProjectCategory, "todos">;
  categoryLabel: string;
  discipline: string;
  year: string;
  tags: string[];
  summary: string;
  specs: string;
  deliverables: string[];
  behanceUrl?: string;
  externalUrl?: string;
  image: string;
  gallery?: string[];
  featured: boolean;
}

export const PROJECT_CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: "todos", label: "Todos los proyectos" },
  { id: "inmobiliaria-obras", label: "Inmobiliaria & Arquitectura" },
  { id: "editorial-branding", label: "Branding, Eventos & Editorial" },
  { id: "digital-web", label: "Web, UI & Digital" },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "norurbana-inmobiliaria",
    num: "01",
    title: "Comunicación Comercial, Fichas de Loteos & Campañas Inmobiliarias",
    client: "Inmobiliaria Norurbana",
    category: "inmobiliaria-obras",
    categoryLabel: "Inmobiliaria & Arquitectura",
    discipline: "Publicidad Digital & Material Inmobiliario",
    year: "2024 — 2025",
    tags: ["Inmobiliaria", "Meta Ads", "Carruseles", "Fichas de Venta", "Brief"],
    summary:
      "Desarrollo de piezas gráficas comerciales, campañas en Meta Ads para venta de lotes y propiedades, grillas mensuales e historias, además de maquetación del brief institucional.",
    specs:
      "Formatos 1080x1350 (carruseles y feed), 1080x1920 (stories) y 1600x400 (banners de formulario). Perfil sRGB calibrado para pauta digital y documento brief en PDF.",
    deliverables: [
      "Previsualización de sistema visual para Feed y Stories (Muestras 1 y 2)",
      "Carruseles comerciales completos (Junio Posteo 7 — 5 piezas / Septiembre Posteo 2 — 4 piezas)",
      "Pieza vertical de lanzamiento (Septiembre Posteo 1R) y Banner de formulario (Oct Form 1)",
      "Documento Brief Institucional de la empresa (PDF Norurbana V2)",
    ],
    image: "/projects/norurbana-inmobiliaria.webp",
    gallery: [
      "/projects/norurbana-inmobiliaria/Feed preview - muestra.webp",
      "/projects/norurbana-inmobiliaria/Stories preview - muestra 1.webp",
      "/projects/norurbana-inmobiliaria/Stories preview - muestra 2.webp",
      "/projects/norurbana-inmobiliaria/Jun posteo 7 - I 1.webp",
      "/projects/norurbana-inmobiliaria/Jun posteo 7 - I 2.webp",
      "/projects/norurbana-inmobiliaria/Jun posteo 7 - I 3.webp",
      "/projects/norurbana-inmobiliaria/Jun posteo 7 - I 4.webp",
      "/projects/norurbana-inmobiliaria/Jun posteo 7 - I 5.webp",
      "/projects/norurbana-inmobiliaria/Sep posteo 1R 1.webp",
      "/projects/norurbana-inmobiliaria/Sep posteo 2 - I 1.webp",
      "/projects/norurbana-inmobiliaria/Sep posteo 2 - I 2.webp",
      "/projects/norurbana-inmobiliaria/Sep posteo 2 - I 3.webp",
      "/projects/norurbana-inmobiliaria/Sep posteo 2 - I 4.webp",
      "/projects/norurbana-inmobiliaria/Oct form1 - G 1.webp",
    ],
    externalUrl: "/projects/norurbana-inmobiliaria/Norurbana-Brief-V2.pdf",
    featured: true,
  },
  {
    id: "skincare-exp",
    num: "02",
    title: "Sistema Visual para Evento, Tótems & Certificados en Lote",
    client: "Skincare Exp",
    category: "editorial-branding",
    categoryLabel: "Branding, Eventos & Editorial",
    discipline: "Identidad para Eventos & Automatización",
    year: "2025",
    tags: ["Congreso", "Tótems", "Presentaciones", "Certificados en Lote", "Sponsors"],
    summary:
      "Producción gráfica integral en caliente para congreso presencial: diseño de pantallas de bienvenida, permanente y sponsors, tótem físico de acceso, flyers de entradas agotadas y exportación automatizada en lote de certificados para auspiciantes.",
    specs:
      "Pantallas widescreen (2560x1024 px), tótem vertical a escala para taller de cartelería y automatización mediante base de datos CSV para emisión de certificados en lote (A4 apaisado).",
    deliverables: [
      "Diapositivas maestras (PPT Bienvenidos, Permanente y Sponsors)",
      "Tótem vertical con isotipo de evento",
      "Flyer promocional de 'Entradas Agotadas'",
      "Exportación automatizada en lote de certificados para sponsors",
    ],
    image: "/projects/skincare-exp.webp",
    gallery: [
      "/projects/skincare-exp/PPT - Bienvenidos.webp",
      "/projects/skincare-exp/PPT - Permanente.webp",
      "/projects/skincare-exp/PPT - Sponsors.webp",
      "/projects/skincare-exp/Totem - Logo.webp",
      "/projects/skincare-exp/Flyer agotadas - I 1.webp",
      "/projects/skincare-exp/Certificado Sponsors - 1.webp",
      "/projects/skincare-exp/Certificado Sponsors - 2.webp",
    ],
    featured: true,
  },
  {
    id: "soluciones-proyectables",
    num: "03",
    title: "Diseño de Interfaz Web (UI) & Landing Page de Obra",
    client: "Soluciones Proyectables",
    category: "digital-web",
    categoryLabel: "Web, UI & Digital",
    discipline: "Diseño Web UI & Identidad",
    year: "2025",
    tags: ["Diseño Web UI", "Landing Page", "Arquitectura", "Figma"],
    summary:
      "Diseño de interfaz y experiencia de usuario (UI/UX) para sitio web institucional de empresa enfocada en obras constructivas, ingeniería y arquitectura.",
    specs:
      "Mockup completo de landing page (1920x9680 px), retícula estructurada para escritorio y móvil, sistema tipográfico y paleta cromática técnica.",
    deliverables: [
      "Maquetación completa de landing page (vista full-scroll)",
      "Definición de sistema cromático y estilos tipográficos",
      "Tratamiento y edición fotográfica de obra",
    ],
    image: "/projects/soluciones-proyectables.webp",
    gallery: [
      "/projects/soluciones-proyectables/Landing.webp",
      "/projects/soluciones-proyectables/Paleta Landing SP.webp",
    ],
    featured: true,
  },
  {
    id: "casco-rosa",
    num: "04",
    title: "Diseño Editorial de Trípticos Institucionales",
    client: "Fundación Casco Rosa",
    category: "editorial-branding",
    categoryLabel: "Branding, Eventos & Editorial",
    discipline: "Diseño Editorial & Folletería",
    year: "2024",
    tags: ["Folletería", "Tríptico", "Institucional", "Imprenta"],
    summary:
      "Diseño y maquetación de folletos trípticos para fundación contra el cáncer de mama en Tucumán, estructurando información clara y accesible para distribución física.",
    specs:
      "Formato tríptico cerrado y abierto, líneas de doblado, 300 DPI, perfil CMYK y demasías perimetrales para guillotina.",
    deliverables: [
      "Tríptico informativo 1 — Mockup de previsualización",
      "Tríptico de difusión 2 — Mockup y original en PDF/X para imprenta",
    ],
    image: "/projects/casco-rosa.webp",
    gallery: [
      "/projects/casco-rosa/Triptico 1 - Mockup.webp",
      "/projects/casco-rosa/Triptico 2 - Mockup.webp",
    ],
    featured: true,
  },
  {
    id: "melka-packaging",
    num: "05",
    title: "Diseño de Packaging, Etiquetas Circulares & Troquelados",
    client: "Melka Pastelería",
    category: "editorial-branding",
    categoryLabel: "Branding, Eventos & Editorial",
    discipline: "Packaging & Planchas de Troquel",
    year: "2024 — 2026",
    tags: ["Packaging", "Etiquetas 50mm", "Troquelado", "Plancha A3"],
    summary:
      "Desarrollo de etiquetas circulares de 50mm de diámetro, sistema de packaging para temporadas (Navidad, Pascuas) y armado de planchas A3 con marcas de corte y troquel para taller gráfico.",
    specs:
      "Trazado vectorial de línea de troquel independiente, sangría de seguridad de 2 mm, escala 1:1, CMYK para imprenta offset/digital.",
    deliverables: [
      "Etiquetas circulares de 50mm para packaging",
      "Pieza gráfica con aplicación de etiqueta (Sorteo Cookies)",
      "Diseño de etiquetas especiales Pascuas 2026 y armado en plancha A3",
    ],
    image: "/projects/melka-packaging.webp",
    gallery: [
      "/projects/melka-packaging/Etiquetas navidad - circulares 50mm preview.webp",
      "/projects/melka-packaging/Sorteo cookies - I 3.webp",
      "/projects/melka-packaging/Pascuas 2026 S 1.webp",
    ],
    featured: true,
  },
  {
    id: "pharmatuk",
    num: "06",
    title: "Identidad Visual & Tarjetas Personales Corporativas",
    client: "Pharmatuk",
    category: "editorial-branding",
    categoryLabel: "Branding, Eventos & Editorial",
    discipline: "Identidad Corporativa & Papelería",
    year: "2024 — 2026",
    tags: ["Identidad", "Tarjetas Personales", "Papelería", "Logotipo"],
    summary:
      "Refresco de logotipo corporativo y diseño de tarjetas personales para dirección y profesionales de farmacia.",
    specs:
      "Formato estándar 90x50 mm frente y dorso, perfil CMYK, 300 DPI y preparación de originales PDF listos para imprenta.",
    deliverables: [
      "Tarjetas personales — Frente y Dorso para imprenta",
      "Mockup de presentación de tarjetas corporativas",
      "Propuesta integral de identidad y logotipo",
    ],
    image: "/projects/pharmatuk.webp",
    gallery: [
      "/projects/pharmatuk/tarjeta-1-cara-1.webp",
      "/projects/pharmatuk/tarjeta-1-cara-2.webp",
      "/projects/pharmatuk/AD-Buisness-Card-Free-Mockup.webp",
      "/projects/pharmatuk/Propuesta pharmatuk - 1.webp",
    ],
    featured: false,
  },
  {
    id: "inizio-feed",
    num: "07",
    title: "Dirección de Arte & Preview de Feed Institucional",
    client: "INIZIO",
    category: "digital-web",
    categoryLabel: "Web, UI & Digital",
    discipline: "Social Media & Grilla Visual",
    year: "2024",
    tags: ["Feed Preview", "Dirección de Arte", "Grilla", "Branding"],
    summary:
      "Estructuración de grilla estética continua para presencia de marca en Instagram, combinando tipografía sobria, espacios en blanco y jerarquía de contenidos.",
    specs:
      "Composición modular de grilla en alta resolución (3240x2160 px), archivos RGB optimizados.",
    deliverables: [
      "Maqueta general de preview de feed",
      "Plantillas modulares para publicaciones de producto y contenido",
    ],
    image: "/projects/inizio-feed.webp",
    gallery: ["/projects/inizio-feed/Feed preview - general.webp"],
    featured: false,
  },
  {
    id: "revitalis-banners",
    num: "08",
    title: "Banners Promocionales para Campañas Estéticas",
    client: "Revitalis",
    category: "digital-web",
    categoryLabel: "Web, UI & Digital",
    discipline: "Publicidad Digital & Banners",
    year: "2024",
    tags: ["Banners", "Promociones", "Stories", "Publicidad"],
    summary:
      "Diseño de piezas promocionales en formato vertical para difusión de paquetes de tratamientos: Pack Lifting, Pack Recuperación Muscular y Pack Fiestas.",
    specs:
      "Formato vertical 1080x1920 px, tratamiento fotográfico de producto y servicio, jerarquía tipográfica legible.",
    deliverables: [
      "Banner Pack Lifting",
      "Banner Pack Recuperación Muscular",
      "Banner Pack Fiestas",
    ],
    image: "/projects/revitalis-banners.webp",
    gallery: [
      "/projects/revitalis-banners/Corregido - Pack lifting - S 1.webp",
      "/projects/revitalis-banners/Corregido - Pack rec. muscular - S 1.webp",
      "/projects/revitalis-banners/Corregido - Pack fiestas - S 1.webp",
    ],
    featured: false,
  },
  {
    id: "nuven-brand",
    num: "09",
    title: "Diseño de Marca & Activos Digitales",
    client: "Nuven",
    category: "editorial-branding",
    categoryLabel: "Branding, Eventos & Editorial",
    discipline: "Identidad Visual Digital",
    year: "2024",
    tags: ["Isotipo", "Identidad", "Activos Digitales", "UI"],
    summary:
      "Desarrollo de isotipo geométrico y adaptación de aplicaciones de perfil para plataformas digitales en entornos oscuros.",
    specs:
      "Construcción vectorial limpia, exportación en SVG y PNG en formato 1080x1080 px.",
    deliverables: [
      "Isotipo corporativo sobre fondo oscuro (Perfil IG Oscuro)",
      "Variante con textura y profundidad de fondo",
    ],
    image: "/projects/nuven-brand.webp",
    gallery: [
      "/projects/nuven-brand/Perfil IG Oscuro.webp",
      "/projects/nuven-brand/Perfil IG Oscuro bg.webp",
    ],
    featured: false,
  },
  {
    id: "fussion-agency",
    num: "10",
    title: "Briefing Corporativo, Propuesta de Servicios & Identidad Digital",
    client: "Fussion Digital Agency",
    category: "editorial-branding",
    categoryLabel: "Branding, Eventos & Editorial",
    discipline: "Diseño Editorial & Presentaciones de Marca",
    year: "2024",
    tags: ["Briefing", "Behance", "Presentaciones", "Dirección de Arte", "Dossier"],
    summary:
      "Diseño y maquetación de caso de estudio y briefing comercial para agencia digital: estructuración de servicios, propuesta de valor, planes comerciales, dirección de arte y mockups 3D.",
    specs:
      "Láminas en alta resolución (2160x720 / 2160x1080 / 2160x1318 px) y presentación continua para Behance (2160x9239 px) calibrada en perfil sRGB digital.",
    deliverables: [
      "Presentación continua completa del caso de estudio (Behance)",
      "Portada institucional & concepto de briefing",
      "Estructura de servicios, soluciones y propuesta metodológica",
      "Desglose de planes comerciales y detalle de entregables",
      "Dirección de arte visual, render 3D y mockups de marca",
    ],
    image: "/projects/fussion-agency.webp",
    gallery: [
      "/projects/fussion-agency/fussion-behance-full.webp",
      "/projects/fussion-agency/fussion-section-1.webp",
      "/projects/fussion-agency/fussion-section-2.webp",
      "/projects/fussion-agency/fussion-section-3.webp",
      "/projects/fussion-agency/fussion-section-4.webp",
      "/projects/fussion-agency/fussion-section-5.webp",
      "/projects/fussion-agency/fussion-section-6.webp",
      "/projects/fussion-agency/fussion-section-7.webp",
      "/projects/fussion-agency/fussion-section-8.webp",
      "/projects/fussion-agency/fussion-section-9.webp",
      "/projects/fussion-agency/fussion-section-10.webp",
      "/projects/fussion-agency/fussion-section-11.webp",
    ],
    behanceUrl:
      "https://www.behance.net/gallery/190442837/Briefing-Fussion-Digital-Agency",
    featured: false,
  },
];
