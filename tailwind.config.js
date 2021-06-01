module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Farro"],
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
