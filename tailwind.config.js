/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // The original portfolio palette, kept and given clearer jobs
        mustard: { DEFAULT: '#F2C53B', deep: '#D9A916', light: '#F8D673' },
        blue: { DEFAULT: '#1C5B8E', deep: '#143F63', ink: '#0E2C46' },
        paper: { DEFAULT: '#F5F1E8', dim: '#EAE4D6' },
        ink: { DEFAULT: '#14181D', soft: '#4A5260' },
      },
      fontFamily: {
        display: ['"Archivo Variable"', 'system-ui', 'sans-serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Roboto Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: { page: '1240px' },
      letterSpacing: { label: '0.08em' },
    },
  },
  plugins: [],
}
