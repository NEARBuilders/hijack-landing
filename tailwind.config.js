/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        matrix: {
          primary: "#00EC97",
          dark: "#001a1a",
          light: "#66FFB2",
          hover: "#00D989",
        },
      },
      fontFamily: {
        matrix: ["Matrix", "Courier New", "monospace"],
        mono: ["Courier New", "monospace"],
      },
      animation: {
        "matrix-rain": "matrix-rain 20s linear infinite",
        "pulse-matrix": "pulse-matrix 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "matrix-rain": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "pulse-matrix": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
