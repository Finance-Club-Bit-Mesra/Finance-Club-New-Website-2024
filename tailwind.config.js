/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fcbluelight: "#e0f2fe",
        fcblue: "#7dc9fc",
        fcbluedark: "#0362a1",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
