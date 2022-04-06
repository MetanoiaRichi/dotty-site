export default {
    target: 'static',

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

    css: [
        '~/assets/fonts/OpenSans/style.css',
    ],

    plugins: [
        { src: '~/plugins/vue-nav-tabs', ssr: false },
        { src: '~/plugins/vue-scroll-active', ssr: false },
    ],

    components: true,

    buildModules: [
        '@nuxtjs/tailwindcss',
    ],

    modules: [
    ],

    build: {
    }
}

