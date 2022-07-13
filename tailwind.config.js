module.exports = {
  mode: "jit",
  purge: ["*.html", "tailwind.css"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#dc2626",
        secondary: "#ef4444",
      },

      backgroundImage: {
        "bg-image-primary": "url('img/bg.png",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
