/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,md,liquid,njk}"],
  plugins: [require("@tailwindcss/typography")],
};
