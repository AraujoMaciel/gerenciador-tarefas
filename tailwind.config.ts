import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#2186fd",
        "primary-red": "#fb3060",
        "primary-orange": "#FF7544",
        "primary-green": "#2cd0c1",
        "basic-white": "#f4f7ff",
        "secondary-blue": "#7498fb",
        "secondary-orange": "#f78c7c",
        "secondary-red": "#FB5A7C",
        "secondary-green": "#45e4da",
        "dark-blue": "#2947fe",
      },
    },
  },
  plugins: [],
} satisfies Config;
