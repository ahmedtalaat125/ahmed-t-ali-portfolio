/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#121212',
        graphite: '#1A1A1A',
        panel: '#1E1E1E',
        ash: '#A3A3A3',
        offwhite: '#F8F9FA',
        line: '#2A2A2A',
        accent: '#4F7CFF',
        tealAccent: '#14B8A6',
        violetAccent: '#8B5CF6',
        emeraldAccent: '#10B981',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'ui-serif', 'serif'],
        mono: ['"JetBrains Mono"', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      boxShadow: {
        none: 'none',
        'glass-glow': '0 8px 32px 0 rgba(79, 124, 255, 0.08)',
        'accent-glow': '0 0 50px -12px rgba(79, 124, 255, 0.25)',
      },
    },
  },
  plugins: [],
};
