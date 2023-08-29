/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Transparent: "rgba(0, 0, 0, 0.35)",
        orangePrimary: "#FF8C38",
        primaryBG: "#fff7ed",
      },
    },
  },
  plugins: [],
};
