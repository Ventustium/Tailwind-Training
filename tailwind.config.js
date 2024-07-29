/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto"],
            },
            colors: {
                'kopi': '#c0ffee'
            }
        },
    },
    plugins: [],
};
