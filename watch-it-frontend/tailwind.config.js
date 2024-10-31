/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* For Firefox */
          "scrollbar-width": "none",
          /* For Chrome, Safari, and Edge */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    },
  ],
};
