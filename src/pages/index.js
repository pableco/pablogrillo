import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import TextCss from '../styles/text.styles';

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section>
                <TextCss.H3>about</TextCss.H3>
                <p>Pablo is a user experience engineer with a demonstrated history of working in the leisure, travel & tourism industry. Leads a community of 14 Front End developers, working with an emphasis in scalability and readability.</p>
                <p>Skilled in UI, HTML5, LESS, SASS, JavaScript, FLUX, React, Styled Components, Webpack, Jest, Enzyme, Cypress, Selenium, Google Analytics and Google Tag Manager.</p>
                <p>He has had jobs as external contractor on worldwide consulting agencies, consolidated companies and design studies working for brands like Coke, Adidas, Carte d'or, Bacardi, etc.</p>
            </section>
        </Layout>
    )
}
