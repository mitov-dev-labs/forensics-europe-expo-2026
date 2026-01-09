/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Forensics Europe Expo Brand Colors - Using blue from screenshot
        'fee-teal': {
          DEFAULT: '#5B9BD5',
          50: '#f0f7fc',
          100: '#d9ebf7',
          200: '#b3d7ef',
          300: '#8dc3e7',
          400: '#6aafdf',
          500: '#5B9BD5',
          600: '#4a89c4',
          700: '#3a77b3',
          800: '#2d5f8f',
          900: '#1f476b',
        },
        // Dark blues/greys for backgrounds
        'fee-purple': {
          DEFAULT: '#0f172a',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        'fee-orange': {
          DEFAULT: '#f07c42',
          50: '#fef3ed',
          100: '#fce0d1',
          200: '#f9c1a3',
          300: '#f5a175',
          400: '#f28247',
          500: '#f07c42',
          600: '#d65a1f',
          700: '#b24818',
          800: '#8e3812',
          900: '#6a2a0d',
        },
        'fee-dark': {
          DEFAULT: '#000000',
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#020617',
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
