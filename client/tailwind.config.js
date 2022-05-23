module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", 
            "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },

      colors: {
        addButton: "#B10494",
        text: "#853177",
        bgRow: "#F9F9F9",
        border: "#E0E7ED",
        calenderbg: "#F5F1F5",
        outline: "#BEC8D0",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
