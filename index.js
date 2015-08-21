System.config({
    packages: {
        '{universe:carousel}': {
            main: 'index',
            format: 'register',
            map: {
                '.': System.normalizeSync('{universe:carousel}')
            }
        }
    }
});