/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F5F8FD",
        secondary: "#212538",
      },
      fontFamily: {
        "dancing-Script": ["Dancing Script", "cursive"],
        fredoka: ["Fredoka", "sans-serif"],
      },
    },
  },
  plugins: [],
};
