import React from "react";
import { ArrowUpRight, FileText, Mail, MessageCircle } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";

export default function ContactFooter() {
  return (
    <footer id="contacto" className="canvas-ambient-light text-ink scroll-mt-16 py-24 md:py-36 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        <p className="font-mono text-xs font-bold tracking-[0.16em] uppercase text-copper mb-3">
          04. CONTACTO DIRECTO
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight mb-12">
          Iniciemos una conversación
        </h2>

        {/* Tarjeta Principal de Contacto con fondo sólido blanco y sombra nítida */}
        <div className="surface-glossy border-glossy rounded-[4px] p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-10 mb-14">
          <div className="flex items-start sm:items-center gap-6">
            {/* Monograma AG en caja #f1ece3 con borde #121213 */}
            <div className="w-16 h-16 bg-cream border border-ink flex items-center justify-center shrink-0">
              <span className="font-mono text-xl font-bold text-ink tracking-wider">
                AG
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold text-ink">
                {PROFILE_DATA.shortName}
              </h3>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-copper">
                {PROFILE_DATA.role}
              </p>
              <p className="text-xs sm:text-sm text-pebble pt-1">
                {PROFILE_DATA.location} • {PROFILE_DATA.availability}
              </p>
            </div>
          </div>

          {/* Canales de Contacto */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 text-sm">
            <div>
              <span className="text-body">WhatsApp: </span>
              <a
                href={PROFILE_DATA.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-ink-secondary hover:text-copper transition-colors"
              >
                {PROFILE_DATA.contact.phoneDisplay}
              </a>
            </div>

            <div>
              <span className="text-body">Email: </span>
              <a
                href={`mailto:${PROFILE_DATA.contact.email}`}
                className="font-bold text-ink-secondary hover:text-copper transition-colors"
              >
                {PROFILE_DATA.contact.email}
              </a>
            </div>

            <div>
              <span className="text-body">LinkedIn: </span>
              <a
                href={PROFILE_DATA.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-ink-secondary hover:text-copper transition-colors"
              >
                {PROFILE_DATA.contact.linkedinHandle}
              </a>
            </div>

            <div>
              <span className="text-body">Behance: </span>
              <a
                href={PROFILE_DATA.contact.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-ink-secondary hover:text-copper transition-colors"
              >
                {PROFILE_DATA.contact.behanceHandle}
              </a>
            </div>
          </div>
        </div>

        {/* Acciones Directas */}
        <div className="flex flex-wrap items-center justify-between gap-6 pb-16 border-b border-hairline">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={PROFILE_DATA.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-ink text-canvas font-mono text-xs font-bold uppercase tracking-[0.14em] rounded-[3px] hover:bg-copper transition-colors inline-flex items-center gap-2.5 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contactar por WhatsApp</span>
            </a>

            <a
              href={`mailto:${PROFILE_DATA.contact.email}?subject=Consulta%20desde%20el%20Portfolio%20-%20Alejo%20Garlati`}
              className="px-6 py-4 bg-surface border border-hairline text-ink font-mono text-xs font-bold uppercase tracking-[0.14em] rounded-[3px] hover:border-copper hover:text-copper transition-colors inline-flex items-center gap-2.5"
            >
              <Mail className="w-4 h-4 text-copper" />
              <span>Enviar Correo</span>
            </a>

            <a
              href={PROFILE_DATA.contact.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-4 bg-cream border border-hairline text-ink-secondary font-mono text-xs uppercase tracking-[0.12em] rounded-[3px] hover:border-copper transition-colors inline-flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-copper" />
              <span>Descargar CV (PDF)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <p className="text-xs sm:text-[13px] text-pebble max-w-md leading-relaxed">
            Disponible para contrataciones externas, proyectos independientes y colaboraciones estratégicas en diseño y desarrollo.
          </p>
        </div>

        {/* Pie Editorial */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-pebble">
          <span>
            Alejo Garlati — Diseño Gráfico & Comunicación Visual • Tucumán, Argentina
          </span>
        </div>
      </div>
    </footer>
  );
}
