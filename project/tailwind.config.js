/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "back-button": "5.92105px 11.8421px 23.6842px rgba(211, 209, 216, 0.3)",
      },
      colors: {
        "fe-header-blue": "#DDE4F1",
        "fe-green-icon": "#578F5D",
        "fe-input-background": "#F2F3F5",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        urbanist: ["var(--font-urbanist)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
