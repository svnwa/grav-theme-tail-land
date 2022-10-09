let mix = require('laravel-mix');

mix
  .js('src/js/app.js', 'js')
  .js('src/js/app-defer.js', 'js')
  .postCss('src/css/tailwind.css', 'css/app.css', [
    require("tailwindcss"),
  ])
  .postCss('src/css/fonts.css','css/fonts.css')
  .options({
    processCssUrls: false
  })
  .extract()
  .setPublicPath('');
