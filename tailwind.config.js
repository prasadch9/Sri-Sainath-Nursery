/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#2e7d32",
        forestDark: "#1b5e20",
        leaf: "#43a047",
        sage: "#e8f5e9",
        cream: "#fffdf7",
        earth: "#6d4c41",
        gold: "#d6a62e",
      },
      boxShadow: {
        soft: "0 12px 35px rgba(27, 94, 32, 0.10)",
        card: "0 10px 28px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
