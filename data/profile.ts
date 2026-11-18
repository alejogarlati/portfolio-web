import { Language } from "@/context/LanguageContext";

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  sector: string;
  location: string;
  summary: string;
  highlights: string[];
  tags: string[];
}

export interface ServicePillar {
  num: string;
  code: string;
  title: string;
  description: string;
}

export interface ServiceScopeItem {
  num: string;
  title: string;
  shortTitle: string;
  claim: string;
  subclaim: string;
  image: string;
  focus?: string;
  description?: string;
  deliverables?: string;
}

export interface ProfileData {
  name: string;
  shortName: string;
  monogram: string;
  role: string;
  headline: string;
  bio: string;
  location: string;
  experienceYears: string;
  availability: string;
  contact: {
    email: string;
    phoneDisplay: string;
    whatsappNumber: string;
    whatsappUrl: string;
    behance: string;
    behanceHandle: string;
    linkedin: string;
    linkedinHandle: string;
    cvUrl: string;
  };
  pillars: ServicePillar[];
  experiences: ExperienceItem[];
  education: {
    period: string;
    title: string;
    institution: string;
    detail: string;
  }[];
  services: ServiceScopeItem[];
}

const SHARED_CONTACT = {
  email: "gabrielgarlati@gmail.com",
  phoneDisplay: "+54 9 (381) 220-3431",
  whatsappNumber: "5493812203431",
  behance: "https://www.behance.net/alejogarlati1",
  behanceHandle: "behance.net/alejogarlati1",
  linkedin: "https://www.linkedin.com/in/alejogarlati1",
  linkedinHandle: "linkedin.com/in/alejogarlati1",
  cvUrl: "/Alejo-Garlati-CV-2026.pdf",
};

export const PROFILE_DATA_BY_LANG: Record<Language, ProfileData> = {
  es: {
    name: "Alejo Gabriel Garlati",
    shortName: "Alejo Garlati",
    monogram: "AG",
    role: "Diseño Gráfico, Multimedia & Dirección Visual",
    headline:
      "Diseñador gráfico y multimedia. Combino criterio visual, estrategia y herramientas digitales para construir marcas y piezas con impacto.",
    bio:
      "Con más de 5 años de experiencia práctica, abordo cada proyecto con criterio visual y rigor técnico: desde cartelería y producción impresa hasta interfaces web y campañas digitales.",
    location: "Tucumán, Argentina",
    experienceYears: "+5 años",
    availability:
      "Disponible para proyectos independientes y colaboraciones estratégicas",
    contact: {
      ...SHARED_CONTACT,
      whatsappUrl:
        "https://wa.me/5493812203431?text=Hola%20Alejo,%20estuve%20viendo%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto.",
    },
    pillars: [
      {
        num: "01",
        code: "01 / CRITERIO",
        title: "Diseño con propósito",
        description:
          "Comunicación visual clara, enfocada en diferenciar a la marca y resolver objetivos comerciales concretos.",
      },
      {
        num: "02",
        code: "02 / TÉCNICA",
        title: "Rigor de producción",
        description:
          "Originales normalizados listos para imprenta (CMYK, PDF/X, demasías) y entornos web (SVG, WebP optimizado).",
      },
      {
        num: "03",
        code: "03 / ESTRUCTURA",
        title: "Mentalidad metódica",
        description:
          "Criterio estructurado aplicado al orden visual, producción en serie, automatización y viabilidad técnica.",
      },
    ],
    experiences: [
      {
        id: "corralon-aconquija",
        period: "12/2022 — Actualidad",
        role: "Encargado de Marketing y E-Commerce",
        company: "Corralón Aconquija S.R.L.",
        sector: "Construcción & Retail",
        location: "Tucumán, Salta y Jujuy",
        summary:
          "Gestión de comunicación visual, vía pública y canal online para sucursales en el NOA.",
        highlights: [
          "Cartelería exterior, señalética de salón, punteras y vinilos de gran formato.",
          "Administración de Tiendanube: banners, catálogo visual y campañas comerciales.",
          "Pauta en Meta Ads y automatización de listas de precios con Python.",
        ],
        tags: ["Gran Formato", "E-Commerce", "Meta Ads", "Python"],
      },
      {
        id: "comunica-mas",
        period: "05/2024 — 11/2025",
        role: "Diseñador Gráfico y Multimedial",
        company: "Comunica Más",
        sector: "Agencia & Sector Inmobiliario",
        location: "Tucumán, AR",
        summary:
          "Producción publicitaria, material corporativo y sistemas gráficos para marcas e inmobiliarias.",
        highlights: [
          "Inmobiliaria Norurbana: dossiers de loteos, fichas de venta, redes y vía pública.",
          "Campañas gráficas para cuentas regionales (Kalimera, El Mesón, Bilac).",
          "Diseño de brochures corporativos, presentaciones, roll-ups y papelería.",
        ],
        tags: [
          "Sector Inmobiliario",
          "Branding",
          "Diseño Editorial",
          "Social Media",
        ],
      },
      {
        id: "freelance-independent",
        period: "2021 — Actualidad",
        role: "Diseñador Visual Independiente",
        company: "Proyectos & Colaboraciones",
        sector: "Eventos, Salud, Gastronomía & Tech",
        location: "Yerba Buena, Tucumán",
        summary:
          "Desarrollo integral de identidad visual, packaging, gráfica de eventos e interfaces web.",
        highlights: [
          "Skincare Exp & Casco Rosa: pantallas de evento, tótems, trípticos y certificados en lote.",
          "Pharmatuk, Melka & Nuven: identidad, tarjetas imprenta, troquelados A3 y UI.",
          "Soluciones Proyectables: diseño de landing page comercial y activos digitales.",
        ],
        tags: [
          "Identidad & Impresión",
          "Eventos",
          "Packaging",
          "Diseño Web & UI",
        ],
      },
    ],
    education: [
      {
        period: "2025 — Actualidad (Finalización: 2026)",
        title: "Tecnicatura Universitaria en Programación",
        institution: "UTN — Facultad Regional Tucumán",
        detail:
          "Formación en estructuras de datos, lógica algorítmica, programación orientada a objetos y desarrollo de aplicaciones.",
      },
      {
        period: "Formación Especializada",
        title: "Diseño Gráfico, Multimedia & Creación Visual",
        institution: "Suite Adobe, Figma & Producción Técnica",
        detail:
          "Dominio avanzado de Adobe Illustrator, Photoshop, Premiere Pro, After Effects, Figma, Tiendanube y preparación técnica para imprenta y web.",
      },
    ],
    services: [
      {
        num: "01",
        title: "Identidad Visual & Branding",
        shortTitle: "Branding",
        claim: "Identidades visuales con criterio, coherencia y valor comercial.",
        subclaim:
          "Logotipos, sistemas tipográficos, manuales de uso y papelería corporativa lista para imprenta.",
        image: "/services/service-01-branding.webp",
      },
      {
        num: "02",
        title: "Vía Pública & Señalética",
        shortTitle: "Cartelería",
        claim:
          "Gráfica a gran escala para espacios comerciales y arquitectónicos.",
        subclaim:
          "Vallas de obra, cartelería de salón, tótems de acceso y sistemas de señalización direccional.",
        image: "/services/service-02-carteleria.webp",
      },
      {
        num: "03",
        title: "Diseño Editorial & Comercial",
        shortTitle: "Editorial",
        claim:
          "Piezas editoriales pensadas para respaldar la gestión de ventas.",
        subclaim:
          "Dossiers inmobiliarios, catálogos técnicos, trípticos informativos y presentaciones ejecutivas.",
        image: "/services/service-03-editorial.webp",
      },
      {
        num: "04",
        title: "Diseño Web & Interfaces UI",
        shortTitle: "Web & UI",
        claim:
          "Interfaces funcionales que unen sensibilidad visual y viabilidad técnica.",
        subclaim:
          "Diseño de landing pages, cabeceras para Tiendanube y activos optimizados para desarrollo.",
        image: "/services/service-04-web-ui.webp",
      },
      {
        num: "05",
        title: "Social Media & Performance",
        shortTitle: "Social Ads",
        claim:
          "Piezas digitales diseñadas para captar atención y generar conversión.",
        subclaim:
          "Sistemas de feed, carruseles informativos y creatividades publicitarias para Meta Ads.",
        image: "/services/service-05-social-media.webp",
      },
    ],
  },
  en: {
    name: "Alejo Gabriel Garlati",
    shortName: "Alejo Garlati",
    monogram: "AG",
    role: "Graphic Design, Multimedia & Visual Direction",
    headline:
      "Graphic and multimedia designer. I combine visual judgment, strategy, and digital tools to build impactful brands and visual pieces.",
    bio:
      "With over 5 years of hands-on experience, I approach every project with visual judgment and technical rigor: from signage and print production to web interfaces and digital campaigns.",
    location: "Tucumán, Argentina",
    experienceYears: "5+ years",
    availability:
      "Available for freelance projects and strategic collaborations",
    contact: {
      ...SHARED_CONTACT,
      whatsappUrl:
        "https://wa.me/5493812203431?text=Hi%20Alejo,%20I%20was%20looking%20at%20your%20portfolio%20and%20would%20like%20to%20talk%20about%20a%20project.",
    },
    pillars: [
      {
        num: "01",
        code: "01 / JUDGMENT",
        title: "Purpose-driven design",
        description:
          "Clear visual communication focused on differentiating the brand and solving concrete business goals.",
      },
      {
        num: "02",
        code: "02 / TECHNIQUE",
        title: "Production rigor",
        description:
          "Standardized artwork ready for print (CMYK, PDF/X, bleeds) and web environments (SVG, optimized WebP).",
      },
      {
        num: "03",
        code: "03 / STRUCTURE",
        title: "Methodical mindset",
        description:
          "Structured criteria applied to visual order, batch production, automation, and technical feasibility.",
      },
    ],
    experiences: [
      {
        id: "corralon-aconquija",
        period: "12/2022 — Present",
        role: "Marketing & E-Commerce Lead",
        company: "Corralón Aconquija S.R.L.",
        sector: "Construction & Retail",
        location: "Tucumán, Salta & Jujuy",
        summary:
          "Management of visual communication, outdoor signage, and online channel for branches across Northwest Argentina.",
        highlights: [
          "Outdoor signage, in-store wayfinding, end-cap displays, and large-format vinyl graphics.",
          "Tiendanube store management: banners, visual catalog, and commercial campaigns.",
          "Meta Ads campaigns and automated price list generation with Python.",
        ],
        tags: ["Large Format", "E-Commerce", "Meta Ads", "Python"],
      },
      {
        id: "comunica-mas",
        period: "05/2024 — 11/2025",
        role: "Graphic & Multimedia Designer",
        company: "Comunica Más",
        sector: "Agency & Real Estate",
        location: "Tucumán, AR",
        summary:
          "Advertising production, corporate collateral, and graphic systems for brands and real estate agencies.",
        highlights: [
          "Inmobiliaria Norurbana: land development dossiers, sales sheets, social media, and outdoor ads.",
          "Graphic campaigns for regional accounts (Kalimera, El Mesón, Bilac).",
          "Design of corporate brochures, presentations, roll-ups, and stationery.",
        ],
        tags: [
          "Real Estate",
          "Branding",
          "Editorial Design",
          "Social Media",
        ],
      },
      {
        id: "freelance-independent",
        period: "2021 — Present",
        role: "Independent Visual Designer",
        company: "Projects & Collaborations",
        sector: "Events, Healthcare, Food & Tech",
        location: "Yerba Buena, Tucumán",
        summary:
          "End-to-end development of visual identity, packaging, event graphics, and web interfaces.",
        highlights: [
          "Skincare Exp & Casco Rosa: event screens, totems, tri-fold brochures, and batch certificates.",
          "Pharmatuk, Melka & Nuven: brand identity, print business cards, A3 die-cut sheets, and UI.",
          "Soluciones Proyectables: commercial landing page design and digital assets.",
        ],
        tags: [
          "Identity & Print",
          "Events",
          "Packaging",
          "Web & UI Design",
        ],
      },
    ],
    education: [
      {
        period: "2025 — Present (Expected: 2026)",
        title: "University Associate Degree in Programming",
        institution: "UTN — Tucumán Regional Faculty",
        detail:
          "Training in data structures, algorithmic logic, object-oriented programming, and application development.",
      },
      {
        period: "Specialized Training",
        title: "Graphic Design, Multimedia & Visual Creation",
        institution: "Adobe Suite, Figma & Technical Production",
        detail:
          "Advanced proficiency in Adobe Illustrator, Photoshop, Premiere Pro, After Effects, Figma, Tiendanube, and technical prepress/web preparation.",
      },
    ],
    services: [
      {
        num: "01",
        title: "Visual Identity & Branding",
        shortTitle: "Branding",
        claim:
          "Visual identities built with criteria, consistency, and commercial value.",
        subclaim:
          "Logos, typographic systems, brand guidelines, and print-ready corporate stationery.",
        image: "/services/service-01-branding.webp",
      },
      {
        num: "02",
        title: "Outdoor Signage & Wayfinding",
        shortTitle: "Signage",
        claim:
          "Large-scale graphics for commercial and architectural spaces.",
        subclaim:
          "Construction site hoardings, showroom signage, entrance totems, and directional wayfinding systems.",
        image: "/services/service-02-carteleria.webp",
      },
      {
        num: "03",
        title: "Editorial & Commercial Design",
        shortTitle: "Editorial",
        claim:
          "Editorial pieces crafted to support sales and commercial operations.",
        subclaim:
          "Real estate dossiers, technical catalogs, informational tri-folds, and executive decks.",
        image: "/services/service-03-editorial.webp",
      },
      {
        num: "04",
        title: "Web Design & UI Interfaces",
        shortTitle: "Web & UI",
        claim:
          "Functional interfaces that bridge visual sensibility and technical feasibility.",
        subclaim:
          "Landing page design, Tiendanube storefronts, and development-ready optimized assets.",
        image: "/services/service-04-web-ui.webp",
      },
      {
        num: "05",
        title: "Social Media & Performance",
        shortTitle: "Social Ads",
        claim:
          "Digital creatives engineered to capture attention and drive conversion.",
        subclaim:
          "Feed systems, informational carousels, and ad creatives for Meta Ads.",
        image: "/services/service-05-social-media.webp",
      },
    ],
  },
};

export const PROFILE_DATA = PROFILE_DATA_BY_LANG.es;

export function getProfileData(lang: Language): ProfileData {
  return PROFILE_DATA_BY_LANG[lang];
}
