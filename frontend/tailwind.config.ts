import type { Config } from "tailwindcss";

const config: Config = {
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
        headercolor: "#0D3858",
        headercolor2: "#092137",
        footercolor: "#0D3657",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
};
export default config;
