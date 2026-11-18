"use client";

import React from "react";
import { ArrowUpRight, FileText, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getProfileData } from "@/data/profile";
import { UI_COPY } from "@/data/ui";

export default function ContactFooter() {
  const { lang } = useLanguage();
  const profile = getProfileData(lang);
  const copy = UI_COPY[lang].contact;

  return (
    <footer id="contacto" className="canvas-ambient-light text-ink scroll-mt-16 py-24 md:py-36 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        <p className="font-mono text-xs font-bold tracking-[0.16em] uppercase text-copper mb-3">
          {copy.sectionCode}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight mb-12">
          {copy.heading}
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
                {profile.shortName}
              </h3>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-copper">
                {profile.role}
              </p>
              <p className="text-xs sm:text-sm text-pebble pt-1">
                {profile.location} • {profile.availability}
              </p>
            </div>
          </div>

          {/* Canales de Contacto */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 text-sm">
            <div>
              <span className="text-body">WhatsApp: </span>
              <a
                href={profile.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-ink-secondary hover:text-copper transition-colors"
              >
                {profile.contact.phoneDisplay}
              </a>
            </div>

            <div>
              <span className="text-body">Email: </span>
              <a
                href={`mailto:${profile.contact.email}`}
                className="font-bold text-ink-secondary hover:text-copper transition-colors"
              >
                {profile.contact.email}
              </a>
            </div>

            <div>
              <span className="text-body">LinkedIn: </span>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-ink-secondary hover:text-copper transition-colors"
              >
                {profile.contact.linkedinHandle}
              </a>
            </div>

            <div>
              <span className="text-body">Behance: </span>
              <a
                href={profile.contact.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-ink-secondary hover:text-copper transition-colors"
              >
                {profile.contact.behanceHandle}
              </a>
            </div>
          </div>
        </div>

        {/* Acciones Directas */}
        <div className="flex flex-wrap items-center justify-between gap-6 pb-16 border-b border-hairline">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={profile.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-ink text-canvas font-mono text-xs font-bold uppercase tracking-[0.14em] rounded-[3px] hover:bg-copper transition-colors inline-flex items-center gap-2.5 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{copy.whatsappCta}</span>
            </a>

            <a
              href={`mailto:${profile.contact.email}?subject=${copy.emailSubject}`}
              className="px-6 py-4 bg-surface border border-hairline text-ink font-mono text-xs font-bold uppercase tracking-[0.14em] rounded-[3px] hover:border-copper hover:text-copper transition-colors inline-flex items-center gap-2.5"
            >
              <Mail className="w-4 h-4 text-copper" />
              <span>{copy.emailCta}</span>
            </a>

            <a
              href={profile.contact.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-4 bg-cream border border-hairline text-ink-secondary font-mono text-xs uppercase tracking-[0.12em] rounded-[3px] hover:border-copper transition-colors inline-flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-copper" />
              <span>{copy.cvCta}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <p className="text-xs sm:text-[13px] text-pebble max-w-md leading-relaxed">
            {copy.availabilityNote}
          </p>
        </div>

        {/* Pie Editorial */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-pebble">
          <span>
            {copy.footerLine}
          </span>
        </div>
      </div>
    </footer>
  );
}
