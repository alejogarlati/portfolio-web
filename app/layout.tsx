import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alejo Garlati — Diseño Gráfico & Comunicación Visual",
  description:
    "Portfolio profesional de Alejo Garlati: diseño gráfico, identidad visual, cartelería comercial, sistemas de señalética, diseño web UI y publicidad digital.",
  keywords: [
    "Alejo Garlati",
    "Diseñador Gráfico",
    "Diseño Multimedia",
    "Cartelería",
    "Señalética",
    "Tucumán",
    "Branding",
    "Web UI",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${plusJakarta.variable} ${spaceGrotesk.variable}`}
    >
      <body
        suppressHydrationWarning
        className="font-sans bg-canvas text-ink antialiased"
      >
        {children}
      </body>
    </html>
  );
}
