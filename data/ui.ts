import { Language } from "@/context/LanguageContext";

export const UI_COPY: Record<
  Language,
  {
    hero: {
      brandTag: string;
      nav: {
        approach: string;
        experience: string;
        services: string;
        projects: string;
        contact: string;
      };
      archiveTag: string;
      eyebrow: string;
      title: string;
      ctaProjects: string;
      ctaWhatsapp: string;
      ctaCv: string;
      specs: {
        profileLabel: string;
        profileRole: string;
        educationLabel: string;
        educationTitle: string;
        educationSub: string;
        locationLabel: string;
        locationSub: string;
        channelsLabel: string;
      };
      langSwitchAria: string;
    };
    approach: {
      sectionCode: string;
      badge: string;
      heading: string;
    };
    experience: {
      sectionCode: string;
      heading: string;
      summary: string;
    };
    services: {
      sectionCode: string;
      heading: string;
    };
    projects: {
      dossierTag: string;
      sectionCode: string;
      galleryEyebrow: string;
      heading: string;
      subtitle: string;
      filterAria: string;
      behanceCta: string;
      behanceAria: string;
      clientPrefix: string;
      archiveFallback: string;
      viewSpecSheet: string;
    };
    modal: {
      specPrefix: string;
      closeAria: string;
      fit: string;
      zoom2x: string;
      expand: string;
      fullMockupView: string;
      scrollHint: string;
      dragHint: string;
      exitZoom: string;
      prevPieceAria: string;
      nextPieceAria: string;
      resetView: string;
      tapZoomHint: string;
      thumbnailAlt: string;
      scopeHeading: string;
      deliverablesHeading: string;
      specsHeading: string;
      viewOriginalHd: string;
      briefPdf: string;
      website: string;
      close: string;
      pieceOf: (current: number, total: number) => string;
      exitFullscreenAria: string;
      previous: string;
      next: string;
      pieceFallback: (num: string) => string;
      ratioBadges: {
        webScroll: string;
        totem: string;
        story916: string;
        post45: string;
        square11: string;
        panoramic41: string;
        widescreen251: string;
        landscape: string;
      };
    };
    contact: {
      sectionCode: string;
      heading: string;
      whatsappCta: string;
      emailCta: string;
      emailSubject: string;
      cvCta: string;
      availabilityNote: string;
      footerLine: string;
    };
  }
> = {
  es: {
    hero: {
      brandTag: "ALEJO GARLATI • DISEÑO GRÁFICO & MULTIMEDIA",
      nav: {
        approach: "01. Enfoque",
        experience: "02. Trayectoria",
        services: "03. Servicios",
        projects: "04. Proyectos",
        contact: "05. Contacto",
      },
      archiveTag: "PORTFOLIO & ARCHIVO VISUAL",
      eyebrow:
        "C R E A T I V I D A D \u00A0 V I S U A L \u00A0 • \u00A0 E S T R A T E G I A \u00A0 D I G I T A L",
      title: "Diseño gráfico, comunicación visual y experiencias digitales.",
      ctaProjects: "Ver Proyectos",
      ctaWhatsapp: "Conversar por WhatsApp",
      ctaCv: "CV (PDF)",
      specs: {
        profileLabel: "P E R F I L \u00A0 P R O F E S I O N A L",
        profileRole: "Diseño Gráfico, Multimedia & UI",
        educationLabel: "F O R M A C I Ó N \u00A0 T É C N I C A",
        educationTitle: "Diseño + Programación",
        educationSub: "UTN — Fac. Regional Tucumán",
        locationLabel: "U B I C A C I Ó N \u00A0 Y \u00A0 A L C A N C E",
        locationSub: "Trabajo presencial y remoto",
        channelsLabel: "C A N A L E S \u00A0 D I R E C T O S",
      },
      langSwitchAria: "Seleccionar idioma",
    },
    approach: {
      sectionCode: "01. PERFIL & CRITERIO",
      badge: "Enfoque de Trabajo",
      heading: "Diseño con visión comercial, rigor técnico y criterio visual",
    },
    experience: {
      sectionCode: "TRAYECTORIA PROFESIONAL",
      heading: "Experiencia en empresas, agencias y proyectos",
      summary:
        "Más de 5 años desarrollando comunicación visual, gestión de e-commerce, campañas digitales y producción gráfica para el sector comercial, constructivo e inmobiliario.",
    },
    services: {
      sectionCode: "02. SERVICIOS & ESPECIALIDADES",
      heading: "Áreas de trabajo y capacidades técnicas",
    },
    projects: {
      dossierTag: "DOSSIER VISUAL & ARCHIVO",
      sectionCode: "03. PROYECTOS SELECCIONADOS",
      galleryEyebrow: "GALERÍA PRINCIPAL",
      heading: "Obras y piezas por área de especialidad",
      subtitle:
        "Exploración de proyectos en cartelería comercial, sistemas de señalética física, identidades corporativas, infografías de obra y diseño web.",
      filterAria: "Filtrar proyectos por categoría",
      behanceCta: "Ver más proyectos",
      behanceAria: "Ver más proyectos de Alejo Garlati en Behance",
      clientPrefix: "Cliente:",
      archiveFallback: "AG STUDIO • ARCHIVO GRÁFICO",
      viewSpecSheet: "Ver Ficha Técnica",
    },
    modal: {
      specPrefix: "FICHA",
      closeAria: "Cerrar ficha técnica",
      fit: "Ajustar",
      zoom2x: "Zoom 2x",
      expand: "Ampliar",
      fullMockupView: "VISTA MOCKUP COMPLETO",
      scrollHint: "Deslizá hacia abajo para recorrer la landing ↕",
      dragHint: "Arrastrá para inspeccionar los detalles y textos",
      exitZoom: "Salir de zoom",
      prevPieceAria: "Pieza anterior",
      nextPieceAria: "Siguiente pieza",
      resetView: "Restaurar vista",
      tapZoomHint: "Tocar imagen para Zoom 2x",
      thumbnailAlt: "Miniatura",
      scopeHeading: "ALCANCE & OBJETIVO DEL TRABAJO",
      deliverablesHeading: "PIEZAS Y ENTREGABLES GENERADOS",
      specsHeading: "ESPECIFICACIONES TÉCNICAS",
      viewOriginalHd: "Ver archivo original HD",
      briefPdf: "Brief (PDF)",
      website: "Sitio Web",
      close: "Cerrar",
      pieceOf: (current, total) => `Pieza ${current} de ${total}`,
      exitFullscreenAria: "Cerrar pantalla completa",
      previous: "Anterior",
      next: "Siguiente",
      pieceFallback: (num) => `Pieza ${num}`,
      ratioBadges: {
        webScroll: "LANDING COMPLETA • SCROLL VERTICAL",
        totem: "FORMATO TÓTEM VERTICAL",
        story916: "FORMATO VERTICAL 9:16",
        post45: "FORMATO FEED 4:5",
        square11: "FORMATO 1:1",
        panoramic41: "BANNER PANORÁMICO 4:1",
        widescreen251: "PANTALLA WIDESCREEN 2.5:1",
        landscape: "LÁMINA HORIZONTAL",
      },
    },
    contact: {
      sectionCode: "04. CONTACTO DIRECTO",
      heading: "Iniciemos una conversación",
      whatsappCta: "Contactar por WhatsApp",
      emailCta: "Enviar Correo",
      emailSubject: "Consulta%20desde%20el%20Portfolio%20-%20Alejo%20Garlati",
      cvCta: "Descargar CV (PDF)",
      availabilityNote:
        "Disponible para contrataciones externas, proyectos independientes y colaboraciones estratégicas en diseño y desarrollo.",
      footerLine:
        "Alejo Garlati — Diseño Gráfico & Comunicación Visual • Tucumán, Argentina",
    },
  },
  en: {
    hero: {
      brandTag: "ALEJO GARLATI • GRAPHIC & MULTIMEDIA DESIGN",
      nav: {
        approach: "01. Approach",
        experience: "02. Experience",
        services: "03. Services",
        projects: "04. Projects",
        contact: "05. Contact",
      },
      archiveTag: "PORTFOLIO & VISUAL ARCHIVE",
      eyebrow: "VISUAL CREATIVITY • DIGITAL STRATEGY",
      title: "Graphic design, visual communication, and digital experiences.",
      ctaProjects: "View Projects",
      ctaWhatsapp: "Chat on WhatsApp",
      ctaCv: "Resume (PDF)",
      specs: {
        profileLabel: "PROFESSIONAL PROFILE",
        profileRole: "Graphic, Multimedia & UI Design",
        educationLabel: "TECHNICAL BACKGROUND",
        educationTitle: "Design + Programming",
        educationSub: "UTN — Tucumán Regional Faculty",
        locationLabel: "LOCATION & REACH",
        locationSub: "On-site & remote work",
        channelsLabel: "DIRECT CHANNELS",
      },
      langSwitchAria: "Select language",
    },
    approach: {
      sectionCode: "01. PROFILE & APPROACH",
      badge: "Work Approach",
      heading: "Design with commercial vision, technical rigor, and visual judgment",
    },
    experience: {
      sectionCode: "PROFESSIONAL EXPERIENCE",
      heading: "Experience across companies, agencies, and projects",
      summary:
        "Over 5 years developing visual communication, e-commerce management, digital campaigns, and graphic production for retail, construction, and real estate.",
    },
    services: {
      sectionCode: "02. SERVICES & SPECIALTIES",
      heading: "Practice areas and technical capabilities",
    },
    projects: {
      dossierTag: "VISUAL DOSSIER & ARCHIVE",
      sectionCode: "03. SELECTED PROJECTS",
      galleryEyebrow: "MAIN GALLERY",
      heading: "Works and pieces by area of specialty",
      subtitle:
        "Exploration of projects in commercial signage, physical wayfinding systems, corporate identities, architectural infographics, and web design.",
      filterAria: "Filter projects by category",
      behanceCta: "View more projects",
      behanceAria: "View more projects by Alejo Garlati on Behance",
      clientPrefix: "Client:",
      archiveFallback: "AG STUDIO • GRAPHIC ARCHIVE",
      viewSpecSheet: "View Spec Sheet",
    },
    modal: {
      specPrefix: "SPEC",
      closeAria: "Close spec sheet",
      fit: "Fit",
      zoom2x: "2x Zoom",
      expand: "Expand",
      fullMockupView: "FULL MOCKUP VIEW",
      scrollHint: "Scroll down to explore the landing page ↕",
      dragHint: "Drag to inspect details and copy",
      exitZoom: "Exit zoom",
      prevPieceAria: "Previous piece",
      nextPieceAria: "Next piece",
      resetView: "Reset view",
      tapZoomHint: "Tap image for 2x Zoom",
      thumbnailAlt: "Thumbnail",
      scopeHeading: "SCOPE & PROJECT GOAL",
      deliverablesHeading: "PIECES & DELIVERABLES",
      specsHeading: "TECHNICAL SPECIFICATIONS",
      viewOriginalHd: "View original HD file",
      briefPdf: "Brief (PDF)",
      website: "Website",
      close: "Close",
      pieceOf: (current, total) => `Piece ${current} of ${total}`,
      exitFullscreenAria: "Exit fullscreen",
      previous: "Previous",
      next: "Next",
      pieceFallback: (num) => `Piece ${num}`,
      ratioBadges: {
        webScroll: "FULL LANDING • VERTICAL SCROLL",
        totem: "VERTICAL TOTEM FORMAT",
        story916: "VERTICAL 9:16 FORMAT",
        post45: "FEED 4:5 FORMAT",
        square11: "1:1 SQUARE FORMAT",
        panoramic41: "4:1 PANORAMIC BANNER",
        widescreen251: "2.5:1 WIDESCREEN DISPLAY",
        landscape: "HORIZONTAL PLATE",
      },
    },
    contact: {
      sectionCode: "04. DIRECT CONTACT",
      heading: "Let's start a conversation",
      whatsappCta: "Contact via WhatsApp",
      emailCta: "Send Email",
      emailSubject: "Inquiry%20from%20Portfolio%20-%20Alejo%20Garlati",
      cvCta: "Download Resume (PDF)",
      availabilityNote:
        "Available for external contracts, freelance projects, and strategic collaborations in design and development.",
      footerLine:
        "Alejo Garlati — Graphic Design & Visual Communication • Tucumán, Argentina",
    },
  },
};
