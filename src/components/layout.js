import Head from 'next/head';
import {
    WrapperCss,
} from './layout.styles';
export const siteTitle = 'Personal website'

export default function Layout({ children }) {

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Pablo Grillo Personal Website"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    // eslint-disable-next-line max-len
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <link href="https://fonts.cdnfonts.com/css/avenir" rel="stylesheet" />
            </Head>
            <WrapperCss>
                {children}
            </WrapperCss>
        </>
    )
}
