/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",


  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "fondu" : "url('/BG-fondu.svg')",
          "authentification" : "url('/Authentification.svg')",
          "Stockage" : "url('/Stockage.svg')",
          "Realtime" : "url('/Realtime.svg')",
          "BG-Performance" : "url('/BG-Performance.svg')",
          "Analyse" : "url('/Analyse-BG.svg')"
      },

      colors: {
        "background-colors": "#2E1452",
      },

    },
  },
  plugins: [],
};

