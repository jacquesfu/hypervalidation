module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0473bc',
        },
        secondary: {
          DEFAULT: '#642c94',
        },
        tertiary: {
          DEFAULT: '#4c4c4c',
        },
        quaternary: {
          DEFAULT: '#151515',
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
