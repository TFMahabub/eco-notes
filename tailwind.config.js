/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./Utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#fff",
      secondary: {
        dark: "#242424",
        light: "#5C575C"
      },
      border: {
        dark: '#5C575C',
        light: '#d5d5d5'
      },
      casual:{
        blue: '#3B49DF'
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
        'vertical': '0.5rem',
        'horizontal': '0.5rem',
        'main-content-gap': '1.5rem',
        'section-gap': '1.5rem',
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

