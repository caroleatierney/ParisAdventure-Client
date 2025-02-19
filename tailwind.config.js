const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "node_modules/flowbite-react/lib/esm/**/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./src/styles/tailwind.css",
  ],
  theme: {
    extend: {
      classes: {
        "slock-arrow.custom-arrow": {
          display: "block",
          background: "red",
        },
      },
      fontFamily: {
        margarine: ["Margarine", "cursive"],
        sofia: ["Sofia", "serif", "sans-serif"],
        delius: ["Delius", "serif", "sans-serif"],
      },
      fontSize: {
        mini: "0.15rem",
        xxxxs: "0.25rem",
        xxxs: "0.35rem",
        xxs: "0.45rem",
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        md: "1rem",
        dmlg: "1.05rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
        "6xl": "4.563rem",
        "7xl": "4.953rem",
        "8xl": "4.441rem",
        "9xl": "5.052rem",
      },
      screens: {
        smallestMobile: "176px",
        // => @media (min-width: 176px) { ... }

        smallMobile: "240px",
        // => @media (min-width: 240px) { ... }

        smallMedMobile: "480px",
        // => @media (min-width: 480px) { ... }

        regularMobile: "640px",
        // => @media (min-width: 640px) { ... }

        tablet: "768px",
        // => @media (min-width: 768px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }

        largeScreen: "1536px",
        // => @media (min-width: 1536px) { ... }

        reallyLargeScreen: "3840px",
        // => @media (min-width: 3840px) { ... }
      },
    },
  },

  plugins: [require("flowbite/plugin")],
};
