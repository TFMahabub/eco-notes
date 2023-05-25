/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#fff",
      secondary: "#000",
      background:{
        dark: "#0e0d0a",
        light: "#222222"
      }
    },
    extend: {
      fontFamily: {
        'jost': ['Jost', 'sans-serif'],
        'cormorant': ['Cormorant Garamond', 'serif'],
      },
      letterSpacing: {
        common: '.01rem',
      },
      spacing: {
        'main-content-gap': '1.5rem',
        'common': '0.5rem',
        'common-.75': '0.75rem',
      },
      borderRadius: {
        'common': '0.5rem',
      },
      padding: {
        'common': '0.5rem',
        'common-.75': '0.75rem',
        'common-1': '1rem'
      },
      width: {
        'icon-1': '1.2rem',
        'icon-2': '1.4rem',
      },
      backgroundImage: {
        'banner_background_image': "url('../public/assats/bannerImage.jpg')",
      }
    },
  },
  plugins: [],
}

