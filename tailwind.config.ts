import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Bricolage Grotesque', 'sans-serif'],
        secondary: ['Bruno Ace SC', 'cursive'],
      },
      fontSize: {
        base: ['20px', '24px'], // 20px font with 24px line height
        large: ['80px', '96.48px'], // 80px font with 96.48px line height
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
