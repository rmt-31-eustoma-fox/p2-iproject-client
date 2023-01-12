/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/views/*.{js,vue}",
    "./src/components/*.{vue,js}",
    "/src/App.vue"
  ],
  safelist: [
    "bg-amber-800",
    "bg-red-600",
    "bg-purple-600",
    "bg-gray-600",
    "bg-slate-900",
    "bg-yellow-600",
    "bg-rose-600",
    "bg-pink-600",
    "bg-fuchsia-400",
      "bg-orange-900",
      "bg-orange-500",
      "bg-blue-700",
       "bg-zinc-400",
       "bg-stone-800"
  ],
  theme: {
    extend: {
      colors: {
        "primary":"#152238"
      }
    },
  }
}
