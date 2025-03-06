/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'sans-serif'],
        display: ['Plus Jakarta Sans Variable', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
        futura: ['Urbanist', 'sans-serif'],
      },
      colors: {
        primary: '#ffffff',
        accent: '#C5A5E6',
        dark: {
          100: '#161616',
          200: '#0A0A0A',
          300: '#000000',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}