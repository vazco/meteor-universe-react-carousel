Package.describe({
    name: 'universe:carousel',
    version: '1.1.0',
    // Brief, one-line summary of the package.
    summary: 'Carousel component built with React',
    git: 'https://github.com/vazco/meteor-universe-react-carousel.git',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.3');
    api.use(['ecmascript']);

    api.addFiles([
        'index.js',
    ]);

    api.addFiles('style/carousel.css', 'client');
    api.mainModule('index.js');
});
