import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        hero: "hero 5s infinite linear",
      },
      keyframes: {
        hero: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "90%": { opacity: "0" },
          "100%": { opacity: "0" },
        },
      },
      fontFamily: {
        cairo: "Cairo",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        muted: "var(--muted)",
      },
      screens: {
        "2xl": "1400px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
