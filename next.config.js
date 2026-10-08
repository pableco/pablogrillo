module.exports = {
    // Enrutado por idioma del pages router: `/` en inglés y `/es` en
    // español, cada una prerenderizada por separado. Sin detección
    // automática: un visitante con el navegador en español que entra por un
    // enlace a `/` debe ver lo que le compartieron, y el selector del header
    // le deja cambiar. El contenido traducido vive en src/content/.
    i18n: {
        locales: ['en', 'es'],
        defaultLocale: 'en',
        localeDetection: false,
    },
    compiler: {
        styledComponents: { ssr: true },
    },
    turbopack: {
        rules: {
            '*.svg': {
                loaders: ['@svgr/webpack'],
                as: '*.js',
            },
        },
    },
    // Keep webpack config as fallback for non-Turbopack builds
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });
        return config;
    }
};
