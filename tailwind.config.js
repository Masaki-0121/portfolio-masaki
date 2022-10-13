/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "3dMac": "url('assets/3d-mac.svg')",
      },
    },
  },
  plugins: [],
};
