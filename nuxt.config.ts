// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    typescript:{
        shim:false
    },
    app: {
        head: {
          meta: [
            // <meta name="viewport" content="width=device-width, initial-scale=1">
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
          ],
          
          link: [
            // <link rel="stylesheet" href="https://myawesome-lib.css">
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap' }
          ],
    
        }
      },
})
