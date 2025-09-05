/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // your main HTML file
    "./src/**/*.{html,js}", // if you keep extra HTML/JS files inside src/
  ],
  theme: {
    extend: {}, // customize colors, fonts, spacing here
  },
  plugins: [
    require("flyonui"), // FlyonUI plugin for extra Tailwind components
  ], // you can add plugins later (forms, typography, etc.)
};
