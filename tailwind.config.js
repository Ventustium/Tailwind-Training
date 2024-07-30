/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    darkMode: 'class',
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
