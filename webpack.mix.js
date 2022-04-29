let mix = require('laravel-mix');

mix.react('app/src/app.js', 'app/dist/')
    .setPublicPath('app/dist')
    .setResourceRoot("/app/dist/")
    .options({
        processCssUrls: false,
        postCss: [
            require('autoprefixer'),
        ],
    });
