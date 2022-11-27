/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
  redirects: async() => {
    return [
      {
        source: '/posts/prancing-pony',
        destination: 'trendofweek.com',
        permanent: true,
      },
     ]
  },
}
