# Tail Land Theme

![tail land screenshot](/screenshot.jpg)

## Description

A TailwindCSS 3 based landing page theme using Webpack to process CSS and JS.

Since I am mainly a [Laravel](https://laravel.com/) developer I used the well known [Laravel Mix](https://laravel-mix.com/) Webpack Wrapper to compile TailwindCSS, CSS and JS of the theme.

Fortunately Laravel Mix is a **standalone** tool which can be used in **any** webpack project.

## Demo

View the theme on [the demo site](https://grav-skeleton-tail-land.sven-walbroel.de).

## Installation

From the root of your Grav installation, run `bin/gpm install tail-land`

or

download this theme to your `user/themes/` folder and add to the `user/config/system.yaml`:
```yaml
   pages:
    theme: tail-land
```

## Using [Laravel Mix](https://laravel-mix.com/docs/6.0/installation)

Even tough the name might suggest otherwise Laravel Mix can be used in any project that needs or wants to use it as a Webpack Wrapper.
The usage is pretty easy and the API straight forward. Just use `mix.js(sourceFile,destinationPath)` to process JavaScript and `mix.postCss()` or `mix.css()` to process CSS:

```javascript
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
```

The default source path of this theme is located in the `src`-folder inside theme folder and the processed files are saved in `js`, `css` or `fonts`.

## Theme variables

The Theme uses some theme variables by default to display e.g. the company name, logo, email, phone number or social media links which can be edited in the grav admin center.

![theme variables](/theme_variables_admin_plugin.png)

## Landing Page

The main content of this theme is a single page landing page composed of modular components inside grav.
These components include
```
hero.html.twig
features.html.twig
about.html.twig
gallery.html.twig
contact.html.twig
```
as well as a navbar and a footer.

## Features section

The theme and especially features section includes the popular open source [Feather icons](https://feathericons.com/) which can be used by the filepicker. Unfortunately there is no support to preview the .svg icons from the theme/icons folder.
```yaml
.icon:
    type: filepicker
    label: Feather Icon
    folder: 'theme://icons'
    preview_images: true
```

## Gallery

The gallery uses the popular [PhotoSwipe Library](https://photoswipe.com/) which gets by initialized by default in the `app-defer.js` JavaScript file which is process by Webpack and imported in the `templates/partials/base.html.twig` file.
```javascript
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--getting-started',
  children: 'a',
  pswpModule: () => import('photoswipe')
});

lightbox.init();
```
Gallery images can be easily uploaded to the Page Media and are automatically imported.
