/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FAF7F2",
          100: "#F5F0E8", // primary ivory/cream background
          200: "#EBE3D5",
          300: "#DFD2BE",
          DEFAULT: "#F5F0E8",
        },
        ivory: {
          light: "#FAF7F2",
          DEFAULT: "#F5F0E8",
          dark: "#E8DFC8",
        },
        gold: {
          light: "#C9A873",
          DEFAULT: "#B08D57",
          dark: "#8B7355",
        },
        bronze: {
          light: "#9C8366",
          DEFAULT: "#8B7355",
          dark: "#6F5C44",
        },
        charcoal: {
          light: "#4A4A4A",
          DEFAULT: "#2A2A2A", // primary text
          dark: "#1A1A1A",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "Montserrat", "Poppins", "sans-serif"],
        cormorant: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        montserrat: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        amiri: ["var(--font-amiri)", "Amiri", "serif"],
        ruqaa: ["var(--font-ruqaa)", "Aref Ruqaa", "var(--font-amiri)", "serif"],
        cairo: ["var(--font-cairo)", "Cairo", "Tajawal", "sans-serif"],
      },
      borderRadius: {
        mihrab: "50% 50% 0 0 / 25% 25% 0 0",
      },
      keyframes: {
        "slow-zoom": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.03)" },
        },
      },
      animation: {
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
