module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // <-- required for manual toggling
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
