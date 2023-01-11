/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://i.ibb.co/mBqxCLF/baking-cooking-background-frame-ingredients-kitchen-items-baking-cakes-kitchen-utensils-flour-eggs-b.jpg')",
      },
    },
  },
  plugins: [],
};
