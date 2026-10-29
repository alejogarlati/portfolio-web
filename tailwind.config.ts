import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-space)", "monospace"],
      },
      colors: {
        cover: {
          DEFAULT: "#151617",
          elevated: "#1c1e20",
          text: "#faf8f5",
          secondary: "#b4b0a7",
          muted: "#8c8983",
          footer: "#7a7873",
        },
        canvas: "#faf7f5",
        surface: "#ffffff",
        cream: "#f1ece3",
        hairline: "#e2ddd4",
        copper: {
          DEFAULT: "#9d6a4e",
          light: "#d5b099",
          dark: "#7d523b",
        },
        ink: {
          DEFAULT: "#121314",
          secondary: "#18191b",
        },
        body: "#5c5e62",
        pebble: "#8e9094",
      },
    },
  },
  plugins: [],
};

export default config;
