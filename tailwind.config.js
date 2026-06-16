/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: "var(--color-bone)",
        ink: "var(--color-ink)",
        signal: "var(--color-signal)",
        stone: "var(--color-stone)",
        panel: "var(--color-panel)",
        panel2: "var(--color-panel2)",
        line: "var(--color-line)",
      },
    },
  },
  plugins: [],
};
