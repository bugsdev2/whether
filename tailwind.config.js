/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,jsx,ts,tsx}', './<custom directory>/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                ddark: '#111111',
                ldark: '#313131',
                grdark: '#151515',
                grlight: '#1c1c1c',
                light: '#fbfbfb',
            },
        },
    },
    plugins: [],
};
