/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0E1621",
          surface: "#141F2E",
          raised: "#1B2838",
        },
        line: {
          DEFAULT: "#26374B",
          soft: "#1E2C3D",
        },
        ink: {
          DEFAULT: "#E9EEF4",
          dim: "#93A6BC",
          faint: "#5E7188",
        },
        accent: {
          DEFAULT: "#4C93C7",
          dim: "#2E4A61",
        },
        good: { DEFAULT: "#4F9E72", dim: "#20362A" },
        warn: { DEFAULT: "#C79A48", dim: "#3A2F1A" },
        bad: { DEFAULT: "#C15A52", dim: "#3A2320" },
      },
      fontFamily: {
        sans: ["IBM Plex Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
