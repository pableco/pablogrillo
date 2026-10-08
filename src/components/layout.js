import Head from 'next/head';
import { useRouter } from 'next/router';
import {
    WrapperCss,
} from './layout.styles';
import { skills } from '../content/cv';
import {
    getStrings,
    localeUrl,
    locales,
    siteUrl,
    toLocale,
} from '../content/i18n';

export const siteName = 'Pablo Grillo';
export const siteImage = `${siteUrl}/images/og-image.png`;

const buildPersonSchema = (locale, strings) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteName,
    url: localeUrl(locale),
    image: siteImage,
    jobTitle: 'Design Engineer & UX Designer',
    description: strings.siteDescription,
    email: 'mailto:pgrillo@gmail.com',
    worksFor: {
        '@type': 'Organization',
        name: 'Roiback',
    },
    // Los términos de diseño viven en la prosa del CV; el resto sale de
    // content/cv.js para que el schema no se desincronice de la página.
    // Van en inglés en los dos idiomas: son nombres de tecnologías.
    knowsAbout: [
        'Design Engineering',
        'User Experience Design',
        'Front End Development',
        'Design Thinking',
        ...skills.groups.flatMap((group) => group.items),
    ],
    sameAs: [
        'https://es.linkedin.com/in/grillopablo',
        'https://www.github.com/pableco',
        'https://behance.net/pableco',
    ],
});

export default function Layout({ children }) {
    const locale = toLocale(useRouter().locale);
    const strings = getStrings(locale);
    const url = localeUrl(locale);

    return (
        <>
            <Head>
                <title>{strings.siteTitle}</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href={url} />
                {/* Cada idioma declara a todos, él incluido: sin el par
                    completo los buscadores ignoran la relación. x-default es
                    la versión para quien no encaja en ninguno. Las `key`
                    llevan prefijo porque next/head deduplica por `key`, y
                    sin él chocarían con las de og:locale:alternate. */}
                {locales.map((alternate) => (
                    <link key={`hreflang-${alternate}`} rel="alternate" hrefLang={alternate} href={localeUrl(alternate)} />
                ))}
                <link rel="alternate" hrefLang="x-default" href={siteUrl} />
                {/* Sustituye al viewport por defecto de Next para pedir que el
                    teclado virtual encoja el viewport de maquetación. Donde se
                    soporta (Chrome en Android), el panel del chat se ajusta
                    solo; el resto lo cubre Chat.tsx con VisualViewport. */}
                <meta
                    name="viewport"
                    content="width=device-width, interactive-widget=resizes-content"
                />
                <meta name="description" content={strings.siteDescription} />
                <meta name="author" content={siteName} />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={url} />
                <meta property="og:site_name" content={siteName} />
                <meta property="og:title" content={strings.siteTitle} />
                <meta property="og:description" content={strings.siteDescription} />
                <meta property="og:locale" content={strings.ogLocale} />
                {locales.filter((alternate) => alternate !== locale).map((alternate) => (
                    <meta key={`og-locale-${alternate}`} property="og:locale:alternate" content={getStrings(alternate).ogLocale} />
                ))}
                <meta property="og:image" content={siteImage} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta
                    property="og:image:alt"
                    content="Pablo Grillo — Design Engineer and UX Designer"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={strings.siteTitle} />
                <meta name="twitter:description" content={strings.siteDescription} />
                <meta name="twitter:image" content={siteImage} />

                <link href="https://fonts.cdnfonts.com/css/avenir" rel="stylesheet" />
            </Head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(buildPersonSchema(locale, strings)) }}
            />
            <WrapperCss>
                {children}
            </WrapperCss>
        </>
    )
}
