Package.describe({
    name: 'universe:carousel',
    version: '1.0.1',
    // Brief, one-line summary of the package.
    summary: 'Carousel component built with React',
    git: 'https://github.com/vazco/meteor-universe-react-carousel.git',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.3');
    api.use([
        'universe:modules@0.4.1'
    ]);

    api.addFiles([
        'index.js',
        'index.import.js',

        'lib/classnames.import.jsx',
        'lib/enquire.import.jsx',
        'lib/execution-environment.import.jsx',
        'lib/json2mq.import.jsx',
        'lib/object-assign.import.jsx',
        'lib/react-clonewithprops.import.jsx',
        'lib/react-transition-events.import.jsx',
        'lib/string-convert.import.jsx',

        'components/arrows.import.jsx',
        'components/default-props.import.jsx',
        'components/dots.import.jsx',
        'components/initial-state.import.jsx',
        'components/inner-slider.import.jsx',
        'components/slider.import.jsx',
        'components/track.import.jsx',

        'mixins/event-handlers.import.jsx',
        'mixins/helpers.import.jsx',
        'mixins/react-responsive.import.jsx',
        'mixins/trackHelper.import.jsx',

        'example/demos.import.jsx'

    ]);

    api.addFiles('style/carousel.css', 'client');
});
