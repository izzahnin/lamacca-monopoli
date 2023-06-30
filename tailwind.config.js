/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      gray: {
        50: "#eeeeee",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
      midnight: "#1A2238",
      purple: "#9DAAF2",
      mandarin: "#FF6A3D",
      sun: "#F4DB7D",
      a: "#ab000b",
      b: "#5d944e",
      c: "#fdbb0d",
      d: "#5181de",
      e: " #ba770d",
      f: "#666665",
      g: "#fe6600",
      h: "#68171e",
      french_rose: "#F75590",
      champagne_pink: "#FCE4D8",
      jasmine: "#FBD87F",
      celester: "#B5F8FE",
      aquamarine: "#10FFCB"
    },
    extend: {},
  },
  plugins: [],
};
