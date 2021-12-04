import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { SectionWrapperCss, YearCss } from '../components/layout.styles';
import Typo from '../styles/text.styles';
import { List, IconItem } from '../styles/list.styles';
import * as Icons from '../icons';


export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <SectionWrapperCss>
                <Typo.H3>about</Typo.H3>
                <Typo.P>I am a Design Engineer, half designer and half developer. My university education in computer science and design allowed me to get jobs as an external contractor on worldwide consulting agencies or as CIO and founder of a startup. I have been through consolidated companies and design studies working for brands like Coke, Adidas, Carte d'Or, Bacardi, Telefonica, Endesa, Carrefour, etc.</Typo.P>
                <Typo.P>Also I leads a community of 14 Front End developers, working with an emphasis in scalability and readability.</Typo.P>
                <Typo.P>Skilled in UI, HTML5, LESS, SASS, JavaScript, FLUX, React, Styled Components, Webpack, Jest, Enzyme, Cypress, Selenium, Google Analytics and Google Tag Manager.</Typo.P>
                <Typo.P>I believe in the transforming value of design methodologies in the social and business environment. For that reason, I am part of the founding board of Fudament.es a non-profit association that use a design thinking mindset to solve social problems. </Typo.P>
            </SectionWrapperCss>
            <SectionWrapperCss>
                <Typo.H3>work</Typo.H3>
                <dl>
                    <dt><YearCss>2016</YearCss></dt>
                    <dd>
                        <Typo.H4>ROIBACK </Typo.H4>
                        <Typo.P>UX Engineer and Front-end, working with emphasis in scalability & readability. Conversión Rate Optimization</Typo.P>
                    </dd>
                    <dt><YearCss>2014</YearCss></dt>
                    <dd>
                        <Typo.H4>YOURTTOO.COM | OPENMARKET.TRAVEL </Typo.H4>
                        <Typo.P>Co-Founder and CTO, providing technical vision for the Business Development of the company. Building and leading the tech team, product design and user experience. </Typo.P>
                    </dd>
                    <dt><YearCss>2013</YearCss></dt>
                    <dd>
                        <Typo.H4>ACCENTURE INTERACTIVE </Typo.H4>
                        <Typo.P>External Services Provider | Web Designer Front-End Trainer for High Traffic Ecommerce Sites & Conversion Rate Optimization </Typo.P>
                    </dd>
                    <dt><YearCss>2009</YearCss></dt>
                    <dd>
                        <Typo.H4>ORIZONIA </Typo.H4>
                        <Typo.P>Reporting directly to the head of Marketing and Product. UX / UI / Analytics / Project Manager </Typo.P>
                    </dd>
                </dl>
            </SectionWrapperCss>
            <SectionWrapperCss>
                <Typo.H3>education</Typo.H3>
                <dl>
                    <dt><YearCss>2012</YearCss></dt>
                    <dd>
                        <Typo.H4>USER EXPERIENCE DESIGN <br />HUMAN COMPUTER INTERACTION </Typo.H4>
                        <Typo.P>Universitat Oberta de Catalunya </Typo.P>
                    </dd>
                    <dt><YearCss>2009</YearCss></dt>
                    <dd>
                        <Typo.H4>IMAGE & SOUND DESIGNER</Typo.H4>
                        <Typo.P>Universidad de Buenos Aires </Typo.P>
                    </dd>
                    <dt><YearCss>2006</YearCss></dt>
                    <dd>
                        <Typo.H4>GRAPHIC DESIGNER</Typo.H4>
                        <Typo.P>Universidad de Buenos Aires <em>(two years completed)</em> </Typo.P>
                    </dd>
                    <dt><YearCss>2004</YearCss></dt>
                    <dd>
                        <Typo.H4>COMPUTER SCIENCE </Typo.H4>
                        <Typo.P>Universidad de Buenos Aires <em>(two years completed)</em></Typo.P>
                    </dd>
                </dl>
            </SectionWrapperCss>
            <SectionWrapperCss>
                <Typo.H3>contact</Typo.H3>
                <List>
                    <IconItem>
                        <Icons.Email /><Typo.A href="mailto:pgrillo@gmail.com">pgrillo@gmail.com</Typo.A>
                    </IconItem>
                    <IconItem>
                        <Icons.Phone /><Typo.A href="tel:+34 696 299 023">+34 696 299 023</Typo.A>
                    </IconItem>
                </List>
            </SectionWrapperCss>
            <SectionWrapperCss>
                <Typo.H3>social</Typo.H3>
                <List>
                    <IconItem>
                        <Icons.Github /><Typo.A href="https://www.github.com/pableco">github.com/pableco</Typo.A>
                    </IconItem>
                    <IconItem>
                        <Icons.Linkedin /><Typo.A href="https://es.linkedin.com/in/grillopablo">es.linkedin.com/in/grillopablo</Typo.A>
                    </IconItem>
                    <IconItem>
                        <Icons.Behance /><Typo.A href="https://behance.net/pableco">behance.net/pableco</Typo.A>
                    </IconItem>
                </List>
            </SectionWrapperCss>
        </Layout>
    )
}
