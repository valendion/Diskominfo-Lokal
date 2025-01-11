import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";
export default {
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        tagline: ["Emilys Candy", "serif"],
      },
      colors: {
        "blue-primary": "#3498db",
      },
    },
  },
  plugins: [flowbite.plugin()],
} satisfies Config;
