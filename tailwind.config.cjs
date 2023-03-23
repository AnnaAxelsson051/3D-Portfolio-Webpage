/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816", //#050816
        primary2: "#FF69B4", //pink
        secondary: "#aaa6c3", //#aaa6c3
        secondary2: "#ffffff",
        tertiary: "#151030",
        tertiary2: "#a69064",
        tertiary3: "#011228", //   #011837
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3", //#f3f3f3
      },
    
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
     // backgroundImage: {
     //   "hero-pattern": "url('/src/assets/herobg.png')",
     // },
    },
  },
  plugins: [],
};

/* @type {import('tailwindcss').Config} 
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}*/
