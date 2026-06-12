import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17211d",
        eucalyptus: "#386f5b",
        gumleaf: "#d8e5dd",
        linen: "#f7f3ec",
        clay: "#b76343",
        mist: "#eef2ef",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(23, 33, 29, 0.12)",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
