/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors:{
      blue:"#00308F",
      black:"#000000"
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

