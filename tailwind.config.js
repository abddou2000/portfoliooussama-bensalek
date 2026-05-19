/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#060F22',
          900: '#0A1F3D',
          800: '#102A52',
          700: '#1E293B',
          600: '#334155',
        },
        gold: {
          50: '#FAF6EC',
          100: '#F1E7C9',
          200: '#E3CF94',
          300: '#D6B86A',
          400: '#C9A24B',
          500: '#B5893A',
          600: '#8E6A2C',
        },
        ivory: {
          50: '#FAF8F3',
          100: '#F5F2EC',
          200: '#E8E2D5',
          300: '#D6CCB8',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'premium': '0 30px 60px -20px rgba(10, 31, 61, 0.25)',
        'gold': '0 10px 30px -10px rgba(201, 162, 75, 0.4)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        'radial-fade': 'radial-gradient(ellipse at top, rgba(201,162,75,0.12), transparent 60%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
