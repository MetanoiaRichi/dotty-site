module.exports = {
    theme: {
        fontFamily: {
            'sans': ['OpenSans-Medium', 'Sans-Serif']
        },
        extend: {
            colors: {
                'black': '#282828',
            },
        },
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }
      
            'md': '768px',
            // => @media (min-width: 768px) { ... }
      
            'lg': '1366px',
            // => @media (min-width: 1024px) { ... }
      
            'xl': '1600px',
            // => @media (min-width: 1280px) { ... }
      
            '2xl': '1920px',
            // => @media (min-width: 1536px) { ... }
        }
    },
    mode: 'jit',
    content: [
        './pages/**/*.{html,js}',
        './components/**/*.{html,js}',
    ],
}