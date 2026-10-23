/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0B0F19',
          surface: '#111726',
          card: '#161F36',
          border: 'rgba(255, 255, 255, 0.08)',
        },
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
