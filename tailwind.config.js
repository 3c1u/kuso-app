const baseFont = ['"Open Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif']

module.exports = {
    purge: [
        'resources/bs/**/*.js',
    ],
    darkMode: 'media',
    theme: {
        extend: {
            fontFamily: {
                'body': baseFont,
                'display': baseFont,
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        }
    },
    plugins: [],
}
