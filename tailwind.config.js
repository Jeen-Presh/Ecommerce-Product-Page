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
    },

    fontSize: {
      xs: ["0.813rem", { lineheight: "16px", letterSpacing: "2px" }],
      sm: ["1rem", { lineHeight: "20px" }],
      lg: ["1rem", { lineHeight: "26px" }],
      xl: ["1.75rem", { lineHeight: "35px" }],
      "2xl": ["2.75rem", { lineHeight: "48px" }],
    },

    fontFamily: {
      "Kumbh-sans": "'Kumbh Sans', sans-serif",
    },
    extend: {},
  },
  plugins: [],
};
