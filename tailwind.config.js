/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'primary-white': '#FFFFFF',
        'background': '#F0EDEE',
        'secondary': '#4B4B4B',
        'primary-200': '#C8803B',
        'primary-100': '#EC9C4C',
        'primary-50': '#F5A96D',
        'primary-blue': '#55A7DB',
        'warning-green': '#28A745',
        'warning-yellow': '#FFB300',
        'warning-red-soft': '#D9534F',
        'warning-red-hard': '#F51111',
      },
    },
  },
  plugins: [],
}

