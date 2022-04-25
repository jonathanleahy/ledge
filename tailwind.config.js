module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    safelist: [
        {
            pattern: /./
        },
    ],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        styled: true,
        themes: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "retro",
    },
}
