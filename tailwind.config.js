module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        sans: ["Open Sans"]
      },
      gridTemplateColumns: {
        "1/5": "1fr 5fr"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
  safelist: [
    'bg-red-500',
    'bg-indigo-500',
    'bg-green-500',
    'bg-gray-500',
    'bg-blue-500',
    'bg-purple-500',
    'bg-red-200',
    'bg-indigo-200',
    'bg-green-200',
    'bg-gray-200',
    'bg-blue-200',
    'bg-purple-200',
    'text-red-400',
    'text-indigo-400',
    'text-green-400',
    'text-gray-400',
    'text-blue-400',
    'text-purple-400',
  ]
}
