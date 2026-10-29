import React from "react";
import HeroCover from "@/components/HeroCover";
import ExperienceSection from "@/components/ExperienceSection";
import ServicesScope from "@/components/ServicesScope";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import ContactFooter from "@/components/ContactFooter";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* 01. Portada Dark Editorial (#151617) con Escultura 3D Interactiva */}
      <HeroCover />

      {/* 02. Enfoque de Trabajo & Trayectoria Profesional (#faf7f5) */}
      <ExperienceSection />

      {/* 03. Servicios & Especialidades Permanentes */}
      <ServicesScope />

      {/* 04. Dossier de Obras & Proyectos Filtrables */}
      <ProjectsShowcase />

      {/* 05. Contacto Directo & Descarga de CV */}
      <ContactFooter />
    </main>
  );
}
