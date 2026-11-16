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
          500: '#0284c7',
          600: '#0369a1',
          700: '#075985',
          800: '#0c4a6e',
          900: '#082f49',
        },
        // Refined, human-crafted palette (eliminating harsh generative AI neon)
        neon: {
          blue: '#38bdf8',    // Refined Sky Azure
          purple: '#6366f1',  // Refined Clean Indigo
          pink: '#f43f5e',    // Subtle Rose accent
          cyan: '#38bdf8',    // Crisp Ice Azure
          green: '#10b981',   // Emerald
          yellow: '#f59e0b',  // Warm Amber
          orange: '#ea580c',  // Deep Copper
        },
        accent: {
          primary: '#38bdf8',
          secondary: '#6366f1',
          tertiary: '#f59e0b',
        },
        dark: {
          bg: '#080d1a',      // Rich Obsidian Navy
          surface: '#0d1527',
          card: '#111c33',
          border: 'rgba(255, 255, 255, 0.08)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-in-up': 'slideInUp 0.6s ease-out',
        'slide-in-down': 'slideInDown 0.6s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        rotateSlow: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(56, 189, 248, 0.15)',
        'glow': '0 0 25px rgba(56, 189, 248, 0.2)',
        'glow-lg': '0 0 35px rgba(56, 189, 248, 0.25)',
        'glow-xl': '0 0 50px rgba(56, 189, 248, 0.3)',
      },
    },
  },
  plugins: [],
}
