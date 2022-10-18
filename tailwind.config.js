/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        floating: {
          "0%": { transform: "translate(0,  0px)" },
          "50%": { transform: "translate(0, 40px)" },
          "100%": { transform: "translate(0,  -0px)" },
        },
      },
      animation: {
        floating: "floating 3s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
