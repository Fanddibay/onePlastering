/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "blue-custom": "#3559c7",
        "orange-custom": "#f9995d",
        "Text Color/1": "#4d4d4d",
        "Text Color/2": "#121212",
        "Text Color/White": "#ffffff",
        "bg-footer": "#252525",
      },
      fontSize: {
        "text-heading1": "64px",
        "text-heading-3": "32px",
        "text-heading2": "48px",
        "text-display": "24px",
        "text-content": "20px",
        "text-mini1": "18px",
        "text-mini2": "16px",
      },
    },
  },
  plugins: [],
};
