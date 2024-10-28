/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "hijau-muda": "#E7F6DC",
        hijau: "#D5ED9F",
        "hijau-tua": "#445D48",
        "teks-hitam": "#696969",
        "hijau-opa": "#B0B7A5",
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [daisyui],
};
