export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      shadows:{
        'red': 'rgba(255, 0, 0, 0.1)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}