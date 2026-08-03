import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#FBF6E9",
          100: "#F5EACB",
          200: "#EBD79E",
          300: "#DFC176",
          400: "#D3AD5C",
          500: "#C9A24B",
          600: "#B0873A",
          700: "#8C6A2E",
          800: "#6B5124",
          900: "#4E3B1A",
        },
        cream: {
          DEFAULT: "#FBF8F1",
          50: "#FFFEFC",
          100: "#FBF8F1",
          200: "#F5EFDF",
          300: "#EFE6CD",
        },
        ink: {
          DEFAULT: "#161410",
          900: "#161410",
          700: "#2B2822",
        },
        slate: {
          DEFAULT: "#54544E",
          light: "#7A7A72",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        headline: [
          "var(--font-headline)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "dot-texture":
          "radial-gradient(circle, rgba(201,162,75,0.28) 1px, transparent 1.4px)",
      },
      backgroundSize: {
        dots: "18px 18px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(22,20,16,0.04), 0 8px 24px -8px rgba(22,20,16,0.10)",
        pop: "0 12px 32px -12px rgba(22,20,16,0.18)",
      },
      borderRadius: {
        pill: "999px",
      },
    },
  },
  plugins: [],
};

export default config;
