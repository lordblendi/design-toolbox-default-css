---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
title: Design Toolbox Default CSS
---

# Design Toolbox Default CSS

Contains default CSS and font for the TenForce Design Toolbox.

## CSS
This collection of CSS files contains:
- link to [Source Sans Pro font](https://fonts.google.com/specimen/Source+Sans+Pro)
- link to [Tailwind v0.6.4](https://tailwindcss.com).
- custom tailwind extensions
- title configurations
- toolbox-overlay design
- toolbox-note design
- color palette variables
- one CSS file that includes all others (`default.css`)

## Font
The font was made by Konstantin Kharlov, located in the `assets/fonts/tenforce.ttf` file.

Because of CORS this file cannot be linked from a locally served version. To use it, use the [GitHub pages](https://tenforce.github.io/design-toolbox-default-css/assets/fonts/tenforce.ttf) link to the file. It is included in the `app.scss` file.

## Usage
### Jekyll
  Add [this file for css](https://github.com/tenforce/design-toolbox-default-css/blob/master/import/default-css.html) and  [this file for js](https://github.com/tenforce/design-toolbox-default-css/blob/master/import/default-js.html)  to the other Jekyll project to include files from this project.

### Other technologies

First add a link to Source Sans Pro, then to Tailwind.

```
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,600,600i,700,700i&amp;subset=latin-ext" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/0.6.4/tailwind.min.css" />
```

And last use the [built default.css](https://tenforce.github.io/design-toolbox-default-css/sass/default.css) file.

The order matters, because we depend on the Tailwind reset file.

## Dependencies
- Tailwind
