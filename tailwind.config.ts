import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: "#5F7C8A",     // Soft Sage
        secondary: "#ECEFF1",   // Warm Off-White
        accent: "#C79AA0",      // Muted clay Beige

        textPrimary: "#263238",
        textMuted: "#6B747C ",
        borderSubtle: "#D4DBE0",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
