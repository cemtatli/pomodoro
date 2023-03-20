/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-red": "#ff3f34",
        "primary-green": "#0be885",
        "primary-white": "#f5f6fa",
      },
    },
  },
  plugins: [],
};
