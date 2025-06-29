/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Darker Phthalo Green palette
        'phthalo-deep': '#051015',
        'phthalo-dark': '#0A1A20',
        'phthalo-base': '#0F2428',
        'phthalo-mid': '#143032',
        'phthalo-light': '#1A3C3E',
        'phthalo-accent': '#204A4C',
        
        // Premium typography colors
        'luxury-white': '#F5F0EC',
        'soft-white': '#E8E8E8',
        'muted-white': 'rgba(232, 232, 232, 0.8)',
        
        // Legacy colors for compatibility
        'electric-lime': '#F5F0EC',
        'lime-muted': '#E8E8E8',
        'white-soft': '#E8E8E8',
        dark: '#051015',
        aqua: '#F5F0EC',
        light: '#E8E8E8',
        
        // Legacy compatibility
        'ocean-deep': '#051015',
        'ocean-blue': '#0A1A20',
        'teal-blue': '#0F2428',
        'sea-green': '#143032',
        'forest-green': '#1A3C3E',
        'sage-green': '#204A4C',
        'near-black-green': '#051015',
        'deep-teal': '#0F2428',
        'dusky-cyan': '#143032',
        'warm-sage': '#1A3C3E',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        body: ['Source Sans Pro', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      animation: {
        'cursor-blink': 'cursor-blink 1.5s steps(2) infinite',
        'fade-in': 'fade-in 1s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'phthalo-flow': 'phthalo-flow 45s ease-in-out infinite',
        'ambient-shift': 'ambient-shift 60s linear infinite',
      },
      keyframes: {
        'cursor-blink': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'phthalo-flow': {
          '0%': { 
            backgroundPosition: '0% 50%',
          },
          '25%': { 
            backgroundPosition: '100% 50%',
          },
          '50%': { 
            backgroundPosition: '100% 0%',
          },
          '75%': { 
            backgroundPosition: '0% 100%',
          },
          '100%': { 
            backgroundPosition: '0% 50%',
          },
        },
        'ambient-shift': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
      },
      backgroundImage: {
        'phthalo-gradient': 'linear-gradient(135deg, #051015 0%, #0A1A20 25%, #0F2428 50%, #143032 75%, #1A3C3E 100%)',
        'phthalo-flow': 'radial-gradient(ellipse at center, #0F2428 0%, #051015 70%, transparent 100%)',
        'phthalo-texture': 'linear-gradient(45deg, transparent 30%, rgba(15, 36, 40, 0.05) 50%, transparent 70%)',
      },
    },
  },
  plugins: [],
};