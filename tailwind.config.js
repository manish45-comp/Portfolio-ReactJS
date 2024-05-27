/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        25: "repeat(25, 1fr)",
      },
      gridColumnStart: {
        14: "14",
      },
      gridColumnEnd: {
        23: "23",
      },
    },
  },
  plugins: [],
};
