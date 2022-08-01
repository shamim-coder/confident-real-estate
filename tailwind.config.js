/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Oswald: ["Oswald", "sans-serif"],
                WorkSans: ["Work Sans", "sans-serif"],
            },
        },
        container: {
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6rem",
            },
        },
    },
    daisyui: {
        themes: [
            {
                crcTheme: {
                    primary: "#29B88C",
                    secondary: "#001e4c",
                    accent: "#ffbc13",
                    neutral: "#232B43",
                    "base-100": "#F9F9FB",
                    info: "#649BCE",
                    success: "#15A859",
                    warning: "#F3BA59",
                    error: "#F0142E",
                    "--rounded-box": "0",
                    "--rounded-btn": "0",
                    "--rounded-badge": "0",
                    "--animation-btn": "0.25s",
                    "--animation-input": "0.2s",
                    "--btn-text-case": "capitalized",
                    "--btn-focus-scale": "0.95",
                    "--border-btn": "1px",
                    "--tab-border": "1px",
                    "--tab-radius": "0.5rem",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
