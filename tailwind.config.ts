import { defineConfig } from 'tailwindcss';

/
 * Custom Tailwind configuration for luxery dark AirBNB
 * This configuration focuses on a dark-themed design with
 * a pink and black color scheme to match the luxury technology
 * industry context.
 */

export default defineConfig({
  theme: {
    extend: {
      colors: {
        pink: {
          DEFAULT: '#FF007F', // Primary pink color
          light: '#FF66B2',   // Light variant of pink for accents
        },
        black: {
          DEFAULT: '#000000', // Primary black color
          light: '#333333',   // Light variant for backgrounds
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in forwards',
        slideIn: 'slideIn 0.5s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
});