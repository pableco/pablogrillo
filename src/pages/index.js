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
            <section>
                <TextCss.H3>work</TextCss.H3>
                <dl>
                    <dt><TextCss.H4>2016</TextCss.H4></dt>
                    <dd>
                        <TextCss.H4>ROIBACK </TextCss.H4>
                        <p>UX Engineer and Front-end, working with emphasis in scalability & readability. Conversión Rate Optimization </p>
                    </dd>
                    <dt><TextCss.H4>2014</TextCss.H4></dt>
                    <dd>
                        <TextCss.H4>YOURTTOO.COM | OPENMARKET.TRAVEL </TextCss.H4>
                        <p>Co-Founder and CTO, providing technical vision for the Business Development of the company. Building and leading the tech team, product design and user experience.</p>
                    </dd>
                    <dt><TextCss.H4>2013</TextCss.H4></dt>
                    <dd>
                        <TextCss.H4>ACCENTURE INTERACTIVE | FJORD </TextCss.H4>
                        <p>External Services Provider | Web Designer Front-End Trainer | High Traffic Ecommerce Sites
Conversion Rate Optimization</p>
                    </dd>
                    <dt><TextCss.H4>2009</TextCss.H4></dt>
                    <dd>
                        <TextCss.H4>ORIZONIA </TextCss.H4>
                        <p>Reporting directly to the head of Marketing and Product. UX / UI / Analytics / Project Manager</p>
                    </dd>
                </dl>
            </section>
        </Layout>
    )
}
