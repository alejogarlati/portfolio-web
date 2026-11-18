import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import LanguageSwitch from "@/components/LanguageSwitch";
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
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
        <LanguageProvider>
          {children}
          <LanguageSwitch />
        </LanguageProvider>
      </body>
    </html>
  );
}
