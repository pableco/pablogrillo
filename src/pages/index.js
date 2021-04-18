import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { SectionWrapperCss, YearCss } from '../components/layout.styles';
import TextCss from '../styles/text.styles';

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <SectionWrapperCss>
                <TextCss.H3>about</TextCss.H3>
                <p>Pablo is a user experience engineer with a demonstrated history of working in the leisure, travel & tourism industry. Leads a community of 14 Front End developers, working with an emphasis in scalability and readability.</p>
                <p>Skilled in UI, HTML5, LESS, SASS, JavaScript, FLUX, React, Styled Components, Webpack, Jest, Enzyme, Cypress, Selenium, Google Analytics and Google Tag Manager.</p>
                <p>He has had jobs as external contractor on worldwide consulting agencies, consolidated companies and design studies working for brands like Coke, Adidas, Carte d'or, Bacardi, etc.</p>
            </SectionWrapperCss>
            <SectionWrapperCss>
                <TextCss.H3>work</TextCss.H3>
                <dl>
                    <dt><YearCss>2016</YearCss></dt>
                    <dd>
                        <TextCss.H4>ROIBACK </TextCss.H4>
                        <p>UX Engineer and Front-end, working with emphasis in scalability & readability. Conversión Rate Optimization </p>
                    </dd>
                    <dt><YearCss>2014</YearCss></dt>
                    <dd>
                        <TextCss.H4>YOURTTOO.COM | OPENMARKET.TRAVEL </TextCss.H4>
                        <p>Co-Founder and CTO, providing technical vision for the Business Development of the company. Building and leading the tech team, product design and user experience.</p>
                    </dd>
                    <dt><YearCss>2013</YearCss></dt>
                    <dd>
                        <TextCss.H4>ACCENTURE INTERACTIVE </TextCss.H4>
                        <p>External Services Provider | Web Designer Front-End Trainer | High Traffic Ecommerce Sites
Conversion Rate Optimization</p>
                    </dd>
                    <dt><YearCss>2009</YearCss></dt>
                    <dd>
                        <TextCss.H4>ORIZONIA </TextCss.H4>
                        <p>Reporting directly to the head of Marketing and Product. UX / UI / Analytics / Project Manager</p>
                    </dd>
                </dl>
            </SectionWrapperCss>
            <SectionWrapperCss>
                <TextCss.H3>education</TextCss.H3>
                <dl>
                    <dt><YearCss>2012</YearCss></dt>
                    <dd>
                        <TextCss.H4>USER EXPERIENCE DESIGN <br />HUMAN COMPUTER INTERACTION </TextCss.H4>
                        <p>Universitat Oberta de Catalunya</p>
                    </dd>
                    <dt><YearCss>2009</YearCss></dt>
                    <dd>
                        <TextCss.H4>IMAGE & SOUND DESIGNER</TextCss.H4>
                        <p>Universidad de Buenos Aires</p>
                    </dd>
                    <dt><YearCss>2006</YearCss></dt>
                    <dd>
                        <TextCss.H4>GRAPHIC DESIGNER</TextCss.H4>
                        <p>Universidad de Buenos Aires <em>(two years completed)</em></p>
                    </dd>
                    <dt><YearCss>2004</YearCss></dt>
                    <dd>
                        <TextCss.H4>COMPUTER SCIENCE </TextCss.H4>
                        <p>Universidad de Buenos Aires <em>(two years completed)</em></p>
                    </dd>
                </dl>
            </SectionWrapperCss>
        </Layout>
    )
}
