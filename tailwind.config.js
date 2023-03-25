const daisyui = require("daisyui");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    colors: {
      orange: "hsl(26, 100%, 55%)",
      "pale-orange": "hsl(25, 100%, 94%)",
      "dark-blue": " hsl(220, 13%, 13%)",
      "dark-grayblue": "hsl(219, 9%, 45%)",
      "grayish-blue": "hsl(220, 14%, 75%)",
      "light-grayishblue": "hsl(223, 64%, 98%)",
      white: "hsl(0, 0%, 100%)",
      offwhite: "hsla(220, 59%, 98%, 1)",
      cartwhite: "hsla(219, 35%, 92%, 1)",
      bwhite: "rgba(228, 233, 242, 1)",
      cwhite: "hsla(0, 0%, 100%, 0.75)",
      twhite: "hsla(0, 0%, 100%, 0.5)",
      bgblack: "rgba(0, 0, 0, 0.9)",
    },

    fontSize: {
      xs: ["0.813rem", { lineheight: "16px", letterSpacing: "2px" }],
      sm: ["0.938rem", { lineHeight: "25px" }],
      lg: ["1rem", { lineHeight: "20px" }],
      xl: ["1rem", { lineHeight: "26px" }],
      "2xl": ["1.75rem", { lineHeight: "35px" }],
      "3xl": ["2.75rem", { lineHeight: "48px" }],
      "4xl": ["1.125rem", { lineHeight: "26px" }],
    },

    fontFamily: {
      "Kumbh-sans": "'Kumbh Sans', sans-serif",
    },

    extend: {
      padding: {
        1.1: "1.071rem",
        1.2: "0.893rem",
      },
      dropShadow: {
        cs: " 0 20px 50px rgba(29, 32, 38, 0.5031)",
      },

      screens: {
        cs: "31.188rem",
      },
    },
  },
  plugins: [],
};
