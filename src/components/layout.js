import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
    HeaderCss,
    MainCss,
    MenuCss,
    WrapperCss,
    ContentColumTitle,
} from './layout.styles';
import TextCss from '../styles/text.styles';

const name = 'pablo grillo';
const title = 'Product Designer | Design Engineer';
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
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Yantramanav:wght@100;300;400&display=swap"
                    rel="stylesheet" />
            </Head>
            <WrapperCss>
                <HeaderCss>
                    <ContentColumTitle>
                        <TextCss.Name>{name}</TextCss.Name>
                        <TextCss.Title>{title}</TextCss.Title>
                    </ContentColumTitle>
                </HeaderCss>
                <MenuCss>
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#education">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </MenuCss>
                <MainCss>
                    {children}
                </MainCss>
            </WrapperCss>
        </>
    )
}
