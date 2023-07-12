/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    screens:{
      "xs":'100px',
      "sm":'640px',
      "md":'768px',
      "lg":'1024px',
    },  
    extend: {},
  },
  plugins: [],
}

