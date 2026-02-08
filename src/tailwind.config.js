// tailwind.config.js
import forms from "@tailwindcss/forms";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [
    forms({
      strategy: "class",
    }),
  ],
};
