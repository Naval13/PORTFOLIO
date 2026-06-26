import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0D1117",
        surface: "#161B22",
        surface2: "#1C2128",
        amber: "#F0A500",
        teal: "#00D4AA",
        purple: "#7C6AF7",
        red: "#E85D75",
        green: "#3DD68C",
        blue: "#00B4D8",
        text: "#E6EDF3",
        muted: "#8B949E",
        border: "#21262D",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      borderRadius: {
        card: "12px",
        input: "8px",
        pill: "99px",
      },
      maxWidth: {
        content: "1100px",
      },
    },
  },
  plugins: [],
};

export default config;
