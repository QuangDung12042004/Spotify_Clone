/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                spotify: {
                    green: '#1db954',
                    'green-hover': '#1ed760',
                    black: '#191414',
                    'dark-gray': '#121212',
                    'medium-gray': '#282828',
                    'light-gray': '#b3b3b3',
                    white: '#ffffff',
                },
            },
            fontFamily: {
                spotify: [
                    'Circular Std',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'Segoe UI',
                    'Roboto',
                    'sans-serif',
                ],
            },

            /* === Thêm phần này === */
            keyframes: {
                revealCenter: {
                    '0%': { transform: 'scaleX(0)', opacity: '0' },
                    '10%': { transform: 'scaleX(0.3)', opacity: '1' },
                    '50%': { transform: 'scaleX(1)', opacity: '1' },
                    '80%': { transform: 'scaleX(0.2)', opacity: '0.9' },
                    '100%': { transform: 'scaleX(0)', opacity: '0' },
                },
            },
            animation: {
                revealCenter: 'revealCenter 2.4s linear infinite',
            },
            /* === Hết phần thêm === */
        },
    },
    plugins: [],
}
