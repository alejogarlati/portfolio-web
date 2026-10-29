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

export const PROFILE_DATA = {
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
  availability: "Disponible para proyectos independientes y colaboraciones estratégicas",
  contact: {
    email: "gabrielgarlati@gmail.com",
    phoneDisplay: "+54 9 (381) 220-3431",
    whatsappNumber: "5493812203431",
    whatsappUrl:
      "https://wa.me/5493812203431?text=Hola%20Alejo,%20estuve%20viendo%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto.",
    behance: "https://www.behance.net/alejogarlati1",
    behanceHandle: "behance.net/alejogarlati1",
    linkedin: "https://www.linkedin.com/in/alejogarlati1",
    linkedinHandle: "linkedin.com/in/alejogarlati1",
    cvUrl: "/Alejo-Garlati-CV-2026.pdf",
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
  ] as ServicePillar[],
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
      tags: [
        "Gran Formato",
        "E-Commerce",
        "Meta Ads",
        "Python",
      ],
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
  ] as ExperienceItem[],
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
      subclaim: "Logotipos, sistemas tipográficos, manuales de uso y papelería corporativa lista para imprenta.",
      image: "/services/service-01-branding.webp",
    },
    {
      num: "02",
      title: "Vía Pública & Señalética",
      shortTitle: "Cartelería",
      claim: "Gráfica a gran escala para espacios comerciales y arquitectónicos.",
      subclaim: "Vallas de obra, cartelería de salón, tótems de acceso y sistemas de señalización direccional.",
      image: "/services/service-02-carteleria.webp",
    },
    {
      num: "03",
      title: "Diseño Editorial & Comercial",
      shortTitle: "Editorial",
      claim: "Piezas editoriales pensadas para respaldar la gestión de ventas.",
      subclaim: "Dossiers inmobiliarios, catálogos técnicos, trípticos informativos y presentaciones ejecutivas.",
      image: "/services/service-03-editorial.webp",
    },
    {
      num: "04",
      title: "Diseño Web & Interfaces UI",
      shortTitle: "Web & UI",
      claim: "Interfaces funcionales que unen sensibilidad visual y viabilidad técnica.",
      subclaim: "Diseño de landing pages, cabeceras para Tiendanube y activos optimizados para desarrollo.",
      image: "/services/service-04-web-ui.webp",
    },
    {
      num: "05",
      title: "Social Media & Performance",
      shortTitle: "Social Ads",
      claim: "Piezas digitales diseñadas para captar atención y generar conversión.",
      subclaim: "Sistemas de feed, carruseles informativos y creatividades publicitarias para Meta Ads.",
      image: "/services/service-05-social-media.webp",
    },
  ] as ServiceScopeItem[],
};
