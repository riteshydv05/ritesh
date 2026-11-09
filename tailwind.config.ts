import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-primary)",
        foreground: "var(--text-primary)",
        editorial: {
          black: "#131615",
          charcoal: "#272d29",      // Mid Charcoal Grey
          "charcoal-bg": "#1c211e", // Base Charcoal background replacing deep black
          "charcoal-dark": "#1f2421",
          "charcoal-light": "#363d38",
          gray: "#797c75",
          "gray-light": "#a1a49c",
          cream: "#ebe4d4",         // Prominent Vintage Book Cream
          "cream-light": "#f6f2e9", // Bright Crisp Cream
          "cream-surface": "rgba(235, 228, 212, 0.12)",
          "cream-muted": "#cfc8b6",
          orange: "#f14d05",
          "orange-hover": "#d94202",
          "orange-muted": "rgba(241, 77, 5, 0.15)",
        },
        neutral: {
          950: "#1c211e",           // Charcoal background
          900: "#222824",           // Deep Charcoal
          850: "#272d29",           // Card Charcoal
          800: "#363d38",           // Border Charcoal
          700: "#49524c",           // Muted borders
          600: "#606b64",
          500: "#797c75",
          400: "#a1a49c",
          300: "#cfc8b6",           // Warm Cream Tint
          200: "#ded8c8",           // Cream
          100: "#ebe4d4",           // Bright Book Cream
          50: "#f6f2e9",            // Highlight Cream
        },
      },
    },
  },
  plugins: [],
};

export default config;
