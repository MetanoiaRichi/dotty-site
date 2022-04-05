export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'The WhitSundays',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { 
                hid: 'description', 
                name: 'description', 
                content: 'A movie thats waiting to be written' 
            },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.webp' }
        ],
        bodyAttrs: {
            id: 'whitsundays'
        }
    },

    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        viewer: true
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/fonts/OpenSans/style.css',
    ],

    plugins: [
        { src: '~/plugins/vue-nav-tabs', ssr: false },
        { src: '~/plugins/vue-scroll-active', ssr: false },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        terser:{
            terserOptions: {
                compress:{
                    drop_console: false,
                },
            },
        },
    }
}

