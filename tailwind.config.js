const { fontFamily } = require("tailwindcss/defaultTheme")
const { colors } = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./ui/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "var(--background)",
        accent: "var(--background-1)",
        decend: "var(--background-2)",
        secondary: "var(--background-3)",
        primaryFg: "var(--foreground:)",
        accentFg: "var(--foreground:-1)",
        decendFg: "var(--foreground:-2)",
        secondaryFg: "var(--foreground:-3)",
        ashley: "var(--ashley)",
        red: "var(--red)",
        pink: "var(--pink)",
        blue: "var(--blue)",
        purple: "var(--purple)",
        teal: "var(--teal)",
        yellow: "var(--yellow)",
        orange: "var(--orange)",
        brown: "var(--brow)",
        gray: "var(--gray)",
        red_background: "var(--red_background)",
        pink_background: "var(--pink_background)",
        blue_background: "var(--blue_background)",
        purple_background: "var(--purple_background)",
        teal_background: "var(--teal_background)",
        yellow_background: "var(--yellow_background)",
        orange_background: "var(--orange_background)",
        brown_background: "var(--brow_background)",
        gray_background: "var(--gray_background)",
        red_background_co: "var(--red_background_co)",
        pink_background_co: "var(--pink_background_co)",
        blue_background_co: "var(--blue_background_co)",
        purple_background_co: "var(--purple_background_co)",
        teal_background_co: "var(--teal_background_co)",
        yellow_background_co: "var(--yellow_background_co)",
        orange_background_co: "var(--orange_background_co)",
        brown_background_co: "var(--brow_background_co)",
        gray_background_co: "var(--gray_background_co)",
        item_blue: "var(--item-blue)",
        item_orange: "var(--item-orange)",
        item_green: "var(--item-green)",
        item_pink: "var(--item-pink)",
        item_brown: "var(--item-brown)",
        item_red: "var(--item-red)",
        item_yellow: "var(--item-yellow)",
        item_default: "var(--item-default)",
        item_purple: "var(--item-purple)",
        item_gray: "var(--item-gray)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        heading: ["var(--font-heading)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
