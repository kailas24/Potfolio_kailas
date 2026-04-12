import { Inter, Roboto, Roboto_Slab, Suez_One } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        Roboto: ['var(--font-roboto)'],
        Roboto_Slab: ['var(--font-roboto-slab)'],
        Inter: ['var(--font-inter)'],
        Suez_One: ['var(--font-suze-one)']
      },
    },
  },
  plugins: [],
};
export default config;
