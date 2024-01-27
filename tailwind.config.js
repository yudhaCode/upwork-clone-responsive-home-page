/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"], // Adjust the paths as needed
  theme: {
    extend: {
      colors: {
        forestGreen: "#14a800",
        forestGreenAccent: "#90E5B2",
        royalBlue: "#1f57c3",
        burntOrange: "#bc511b",
        forestGreenText: "#13544e",
        darkForestGreen: "#108A00",
        deepForestGreen: "#001e00",
        stoneGray: "#5e6d55",
        softerGray: "#d5e0d5",
        softStoneGray: "#9AAA97",
      },
      backgroundImage: {
        forClientsMd: "url('/assets/find-talent-mobile-2x.jpg')",
        forClientsMd2x: "url('/assets/find-talent-2x.jpg')",
        ukraine: "url('/assets/ukraine-help.svg')",
      },
    },
  },
  plugins: [],
};
