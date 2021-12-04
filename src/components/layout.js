import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
    BackLinkCss,
    HeaderCss,
    HomeWrapperCss,
    WrapperCss,
} from './layout.styles';
import TextCss from '../styles/text.styles';
import { Rounded } from '../styles/helpers.styles';

const name = 'pablo grillo';
const title = 'UX ENGINEER / FRONT END';
export const siteTitle = 'Personal website'


export default function Layout({ children, home }) {
    return (
        <WrapperCss>
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
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700;800&display=swap" rel="stylesheet" />
            </Head>
            <HeaderCss>
                {home
                    ? (
                        <HomeWrapperCss>
                            <Rounded>
                                <Image
                                    priority
                                    src="/images/avatar.png"
                                    height={128}
                                    width={128}
                                    alt={name}
                                />
                            </Rounded>
                            <TextCss.H1>{name}</TextCss.H1>
                            <TextCss.H2>{title}</TextCss.H2>
                        </HomeWrapperCss>
                    )
                    : (
                        <>
                            <Link href="/">
                                <a>
                                    <Rounded>
                                        <Image
                                            priority
                                            src="/images/avatar.png"
                                            height={128}
                                            width={128}
                                            alt={name}
                                        />
                                    </Rounded>
                                </a>
                            </Link>
                            <TextCss.H2>
                                <Link href="/">
                                    <a>{name}</a>
                                </Link>
                            </TextCss.H2>
                        </>
                    )}
            </HeaderCss>
            <main>{children}</main>
            {!home && (
                <BackLinkCss>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </BackLinkCss>
            )}
        </WrapperCss>
    )
}
