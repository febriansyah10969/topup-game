import defaultTheme from "tailwindcss/defaultTheme";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [tailwindcss, autoprefixer],
};
