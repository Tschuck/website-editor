/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // "primary-hover": "#556c4f",
        // primary: "#42583D",
        // secondary: "#bd7124",
        // whitesmoke: "#f7f3e7",

        // old homepage
        "primary-hover": "#556c4f",
        primary: "#ec7f86",
        secondary: "#51b7b6",
        whitesmoke: "#f5fafa",
      },
      borderWidth: {
        small: "8px",
        medium: "15px",
        thick: "25px",
      },
    },
  },
  plugins: [],
};
