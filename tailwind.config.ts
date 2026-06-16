import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: [
          "var(--font-heading)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        primary: "#ff6047",
        "primary-hover": "#E95239",
        background: "#f0eee9",
        "text-main": "#3b3c3d",
        "text-muted": "#6B7280",
        "border-light": "#D9D5CE",
        success: "#22C55E",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;

export default config;
