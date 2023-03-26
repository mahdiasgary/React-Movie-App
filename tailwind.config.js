/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {  screens:{
      "se":'375px',
      'y7':"450",
      "y9":"540px"
      
            },
      colors: {
     
        //MOVIE APP
        screenDark: "#0f0f0f",
        sideBarDark: "#161616",
        prameryColorDark: "#161616",
        secondColorDark: "#1d1d1d",
        btn: "#1e74f1",
        textDark: "#ffffff",
        textPDark: "#555561",
        screenLight: "#f9f9f9",
        sideBarLight: "#f1f1f5",
        prameryColorLight: "#ffffff",
        textLight: "#121212",
        textPlight: "#a7a7ad",
        border:"#2f2f3c",
      },
    },
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  plugins: [],
};
