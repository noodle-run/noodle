import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";
import { primary, secondaryDark, secondaryLight } from "./src/utils/colors";

const config: Config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateAreas: {
        featuresWide: [
          `leftTop    leftTop    centerTop  centerTop    centerTop    right right`,
          `leftBottom leftBottom leftBottom centerBottom centerBottom right right`,
        ],
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@savvywombat/tailwindcss-grid-areas"),
    nextui({
      prefix: "noodle",
      layout: {
        radius: {
          small: "4px",
          medium: "8px",
          large: "12px",
        },
      },
      themes: {
        light: {
          colors: {
            background: "#ffffff",
            foreground: "#000000",
            primary: {
              ...primary,
              foreground: "#ffffff",
            },
            secondary: secondaryLight,
          },
        },
        dark: {
          colors: {
            background: "#000000",
            foreground: "#ffffff",
            primary,
            secondary: secondaryDark,
          },
        },
      },
    }),
  ],
};
export default config;
