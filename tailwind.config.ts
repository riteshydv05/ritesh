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
          charcoal: "#262b28",        // Rich Charcoal Grey
          "charcoal-dark": "#1d221f", // Base background (replaces harsh pitch black)
          "charcoal-card": "#2e3531", // Elevated Charcoal for cards & panels
          "charcoal-light": "#3b443e",
          gray: "#797c75",            // Ash / Slate gray
          "gray-light": "#969990",
          cream: "#ebe4d4",           // Vintage Book Cream
          "cream-light": "#f6f2e8",   // Crisp Bright Cream for headers/highlights
          "cream-soft": "#ded6c3",    // Cream secondary
          "cream-surface": "#f0ebd9",
          orange: "#f14d05",          // Cadmium Penguin Orange
          "orange-hover": "#d94202",
          "orange-light": "#ff6a2b",
        },
        neutral: {
          950: "#1d221f", // Now rich charcoal dark
          900: "#262b28", // Mid charcoal
          850: "#2e3531", // Elevated charcoal
          800: "#3d4641", // Charcoal border
          700: "#525c56",
          600: "#69746c",
          500: "#797c75",
          400: "#969990",
          300: "#c2beb2",
          200: "#ded6c3", // Soft cream
          100: "#ebe4d4", // Main cream
          50: "#f6f2e8",  // Light cream
        },
      },
    },
  },
  plugins: [],
};

export default config;
