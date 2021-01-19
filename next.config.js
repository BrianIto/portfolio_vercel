module.exports = {
    exportPathMap: () => ({
            '/': {
                page: '/'
            },
        }),
        basePath: '/portfolio',
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                test: /\.(js|ts)x?$/,
            },
            use: ['@svgr/webpack'],
        });

        return config;
    },
};