/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': {'max': '520px'},
      'md': {'min': '521px','max': '820px'},
      'lg': {'max': '1536px', 'min':'821px'}
    },
    extend: {
        colors: {
        primary:'#4E6BFF',
        secondary: "#0F0E23",
        tertiary: '#971C62'
      },
      fontFamily: {
        inter: ['Roboto', 'sans-serif'],
      },
        backdropBlur: {
        'none': '0',
        'sm': '4px',
        DEFAULT: '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px',
      }
    },
  },
  plugins: [],
}
