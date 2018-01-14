# [studio90srls](http://studio90srls.it/)
studio90srls
via Silvestro Gherardi 26, Roma

# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## Unreleased

### Add
 - workbox tools to create a service worker
 - modularized the gulp-task process
 - creation of local dist directory
 - now broswersync will serve contents from ./dist
 - fs-extra lib
 - factory-bundle plugin to create different bundles
 - broswerify and typescript dependencies
 - Cards title placeholder
 - Theming mdl block element (studio90srls-theme)
 - Gulpfile to build the project
 - Material-design-lite css framwork
 - Browser-sync for sass files

### Changed
 - On prod sass generates compressed css
 - Using BEM syntax
 - Change project structure:
 ```
     src/
        assets/
              css/
              images/
              script/
              scss/
        index.html
```

### Removed
 - Removed grunt dependencies