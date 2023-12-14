/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                orange: "hsl(26, 100%, 55%)",
                "pale-orange": "hsl(25, 100%, 94%)",
                "very-dark-blue": "hsl(220, 13%, 13%)",
                "dark-grayish-blue": "hsl(219, 9%, 45%)",
                "grayish-blue": "hsl(220, 14%, 75%)",
                "light-grayish-blue": "hsl(223, 64%, 98%)",
                white: "hsl(0, 0%, 100%)",
                black: "hsl(0, 0%, 0%)",
            },
        },
    },
    plugins: [],
};