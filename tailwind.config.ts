import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: "#3A5F5A",     // Deep sage
        secondary: "#F4F1EC",   // Warm sand
        accent: "#C48A6A",      // Muted clay

        textPrimary: "#1F2933",
        textMuted: "#6B7280",
        borderSubtle: "#E5E7EB",
      },
      fontFamily: {
        serif: ["'Source Serif 4'", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
