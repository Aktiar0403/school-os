import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        emerald: {
          450: "#10b981",
        },
      },
      boxShadow: {
        soft: "0 20px 60px -24px rgba(15, 23, 42, .18)",
        glow: "0 24px 80px -28px rgba(16, 185, 129, .45)",
      },
    },
  },
  plugins: [],
};

export default config;
