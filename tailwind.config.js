/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c3d66',
        },
        neon: {
          blue: '#00d4ff',
          purple: '#a855f7',
          pink: '#ec4899',
          cyan: '#06b6d4',
          green: '#10b981',
          yellow: '#f59e0b',
          orange: '#f97316',
        },
        accent: {
          primary: '#00d4ff',
          secondary: '#a855f7',
          tertiary: '#ec4899',
        },
        dark: {
          bg: '#0f172a',
          card: '#1e293b',
          border: '#334155',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'avenir', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-in-up': 'slideInUp 0.8s ease-out',
        'slide-in-down': 'slideInDown 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'slide-left': 'slideInFromLeft 0.6s ease-out',
        'slide-right': 'slideInFromRight 0.6s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'morph': 'morphing 4s ease-in-out infinite',
        'typing': 'typing 3s steps(40) 1s forwards',
        'blink': 'blink 1s infinite',
        'border-glow': 'borderGlow 3s linear infinite',
        'gradient-shift': 'gradientShift 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(0, 212, 255, 0.5), 0 0 20px rgba(168, 85, 247, 0.3)',
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(0, 212, 255, 0.8), 0 0 40px rgba(168, 85, 247, 0.6)',
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(1deg)' },
          '66%': { transform: 'translateY(5px) rotate(-1deg)' },
        },
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100px) rotate(-5deg)', opacity: '0' },
          '100%': { transform: 'translateX(0) rotate(0deg)', opacity: '1' },
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(100px) rotate(5deg)', opacity: '0' },
          '100%': { transform: 'translateX(0) rotate(0deg)', opacity: '1' },
        },
        morphing: {
          '0%, 100%': { borderRadius: '20px' },
          '25%': { borderRadius: '50px 20px' },
          '50%': { borderRadius: '20px 50px' },
          '75%': { borderRadius: '50px' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          '0%, 50%': { borderColor: 'transparent' },
          '51%, 100%': { borderColor: '#00d4ff' },
        },
        borderGlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'rotate-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(10px)',
        'blur-sm': 'blur(4px)',
        'blur-md': 'blur(12px)',
        'blur-lg': 'blur(16px)',
        'blur-xl': 'blur(24px)',
        'blur-2xl': 'blur(40px)',
        'blur-3xl': 'blur(64px)',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'elastic': 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(0, 212, 255, 0.5)',
        'glow-lg': '0 0 30px rgba(0, 212, 255, 0.7)',
        'glow-xl': '0 0 50px rgba(0, 212, 255, 0.8)',
        'neon': '0 0 10px rgba(168, 85, 247, 0.6)',
        'neon-lg': '0 0 25px rgba(168, 85, 247, 0.8)',
        'inner-glow': 'inset 0 0 20px rgba(0, 212, 255, 0.2)',
        'multi-glow': '0 0 20px rgba(0, 212, 255, 0.4), 0 0 40px rgba(168, 85, 247, 0.2), 0 0 60px rgba(236, 72, 153, 0.1)',
      },
    },
  },
  plugins: [],
}
