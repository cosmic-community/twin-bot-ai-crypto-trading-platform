/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        // Twin Bot brand colors
        primary: {
          DEFAULT: '#00ff88', // Neon green
          foreground: '#000000',
        },
        background: {
          DEFAULT: '#0a0b14', // Dark navy
          secondary: '#1a1b24',
        },
        foreground: {
          DEFAULT: '#ffffff',
          muted: '#a1a1aa',
        },
        accent: {
          purple: '#8b5cf6',
          'purple-light': '#a78bfa',
        },
        card: {
          DEFAULT: '#1e1f29',
          border: '#2a2b36',
        },
        success: '#00ff88',
        error: '#ef4444',
      },
      backgroundImage: {
        'aurora-gradient': 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 70%)',
        'hero-gradient': 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'fade-in': 'fade-in 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 5px rgba(0, 255, 136, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 255, 136, 0.8), 0 0 30px rgba(0, 255, 136, 0.4)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      screens: {
        'xs': '475px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}