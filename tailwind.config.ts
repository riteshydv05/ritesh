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
          black: "#131615",      // Deep vintage carbon
          charcoal: "#242926",   // Rich Charcoal Grey (Stripe 1-2 bridge)
          "charcoal-dark": "#1a1f1c",
          "charcoal-light": "#333935",
          gray: "#797c75",       // Ash / Slate gray (Stripe 2)
          "gray-light": "#969990",
          cream: "#ebe4d4",      // Vintage Book Cream (Stripe 3)
          "cream-light": "#f4efe4",
          "cream-muted": "#dcd4c0",
          "cream-surface": "rgba(235, 228, 212, 0.08)",
          orange: "#f14d05",     // Cadmium Penguin Orange (Stripe 4)
          "orange-hover": "#d94202",
          "orange-light": "#ff6a2b",
          "orange-muted": "rgba(241, 77, 5, 0.15)",
        },
        neutral: {
          950: "#131615",
          900: "#1a1f1c",
          850: "#242926",
          800: "#333935",
          700: "#484f4a",
          600: "#5e6660",
          500: "#797c75",
          400: "#969990",
          300: "#c2beb2",
          200: "#dcd4c0",
          100: "#ebe4d4",
          50: "#f4efe4",
        },
      },
    },
  },
  plugins: [],
};

export default config;
