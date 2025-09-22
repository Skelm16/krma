/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0d1512",
        card: "#111c18",
        accent: "#2dd4bf",
        muted: "#98a5a1",
        border: "#1a2622",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Ubuntu", "Cantarell", "Noto Sans", "Helvetica Neue", "Arial", "sans-serif"],
      },
      boxShadow: {
        soft: "0 0 0 1px rgba(45,212,191,0.12), 0 20px 80px -20px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};
