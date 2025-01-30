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
        background: "var(--background)",
        foreground: "var(--foreground)",
        text: {
          base: "#5F5F5F",
        },
      },
      fontFamily: {
        notokr: ["var(--font-noto-serif-kr)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
