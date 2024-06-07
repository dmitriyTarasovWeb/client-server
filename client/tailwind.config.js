/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'spotify-black': '#191414',
        'spotify-black-grey': '#282828',
        'spotify-grey': '#535353',
        'spotify-light-grey': '#B3B3B3',
        'spotify-text': '#B3B3B3',
        'spotify-green': '#1ED760',
        'spotify-green-dark': '#1DB954',
        'spotify-green-light': '#1ED760',
        'spotify-red': '#E22134',
        'spotify-red-light': '#A81A31',
        'spotify-yellow': '#F1C40F',
        'spotify-blue': '#3498DB',
        'spotify-white': '#FFFFFF',
      },
      backgroundImage: theme => ({
        'spotify-gradient': 'radial-gradient(circle at 7% 2%, #1DB954 4%, transparent 9%)',
        'spotify-linear-gradient': 'linear-gradient(135deg, #1DB954 0%, #1ED760 100%)',
      }),
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
