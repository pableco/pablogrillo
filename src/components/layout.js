import Head from 'next/head';
import {
    WrapperCss,
} from './layout.styles';
import { skills } from '../content/cv';

export const siteUrl = 'https://pablogrillo.com';
export const siteName = 'Pablo Grillo';
export const siteTitle = 'Pablo Grillo — Design Engineer & UX Designer';
export const siteDescription = 'Pablo Grillo, Design Engineer and UX Designer. Senior Design Engineer at Roiback, leading design systems, backoffice tools and a community of front end developers.';
export const siteImage = `${siteUrl}/images/og-image.png`;

const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteName,
    url: siteUrl,
    image: siteImage,
    jobTitle: 'Design Engineer & UX Designer',
    description: siteDescription,
    email: 'mailto:pgrillo@gmail.com',
    worksFor: {
        '@type': 'Organization',
        name: 'Roiback',
    },
    // Los términos de diseño viven en la prosa del CV; el resto sale de
    // content/cv.js para que el schema no se desincronice de la página.
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
};

export default function Layout({ children }) {

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href={siteUrl} />
                <meta name="description" content={siteDescription} />
                <meta name="author" content={siteName} />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={siteUrl} />
                <meta property="og:site_name" content={siteName} />
                <meta property="og:title" content={siteTitle} />
                <meta property="og:description" content={siteDescription} />
                <meta property="og:locale" content="en_US" />
                <meta property="og:image" content={siteImage} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta
                    property="og:image:alt"
                    content="Pablo Grillo — Design Engineer and UX Designer"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={siteTitle} />
                <meta name="twitter:description" content={siteDescription} />
                <meta name="twitter:image" content={siteImage} />

                <link href="https://fonts.cdnfonts.com/css/avenir" rel="stylesheet" />
            </Head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <WrapperCss>
                {children}
            </WrapperCss>
        </>
    )
}
