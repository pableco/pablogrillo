import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import {
    Column,
    SectionContentCss,
    SectionWrapperCss,
    SectionTitleCss,
    YearCss,
} from '../components/layout.styles';
import Typo from '../styles/text.styles';
import { List, IconItem } from '../styles/list.styles';
import * as Icons from '../icons';


export default function Home() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <SectionWrapperCss id='about'>
                <SectionTitleCss>
                    <Typo.H3>About</Typo.H3>
                </SectionTitleCss>
                <SectionContentCss>
                    <Column>
                        <Typo.P>
                            I am a Design Engineer, half designer and half developer.
                            My university education in computer science and design allowed me
                            to get jobs as an external contractor on worldwide consulting
                            agencies or as CIO and founder of a startup.
                            I have been through consolidated companies and design studies working
                            for brands like Coke, Adidas, Carte d'Or, Bacardi, Telefonica, Endesa, Carrefour, etc.
                        </Typo.P>
                        <Typo.P>
                            Also I Leads a community of 14 Front End developers,
                            working with an emphasis in scalability and readability.
                        </Typo.P>
                    </Column>
                    <Column>
                        <Typo.P>
                            Skilled in UI, HTML5, LESS, SASS, JavaScript, FLUX, React, Styled Components,
                            Webpack, Jest, Enzyme, Cypress, Selenium, Google Analytics and Google Tag Manager.
                        </Typo.P>
                        <Typo.P>
                            I believe in the transforming value of design methodologies
                            in the social and business environment. For that reason,
                            I am part of the founding board of Fudament.es a non-profit
                            association that use a design thinking mindset to solve social problems.
                        </Typo.P>
                    </Column>
                </SectionContentCss>
            </SectionWrapperCss>
            <SectionWrapperCss id='work'>
                <SectionTitleCss>
                    <Typo.H3>Work</Typo.H3>
                </SectionTitleCss>
                <SectionContentCss>
                    <dl>
                        <dt><YearCss>2016</YearCss></dt>
                        <dd>
                            <Typo.H4>ROIBACK </Typo.H4>
                            <Typo.P>Design Engineer and Front-end,
                                Leads a community of 14 Front End developers,
                                working with emphasis in scalability & readability.
                                Conversión Rate Optimization</Typo.P>
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
                </SectionContentCss>
            </SectionWrapperCss>
            <SectionWrapperCss id='education'>
                <SectionTitleCss>
                    <Typo.H3>Education</Typo.H3>
                </SectionTitleCss>
                <SectionContentCss>
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
                </SectionContentCss>
            </SectionWrapperCss>
            <SectionWrapperCss id='contact'>
                <SectionTitleCss>
                    <Typo.H3>Contact</Typo.H3>
                </SectionTitleCss>
                <SectionContentCss>
                    <List>
                        <IconItem>
                            <Icons.Email /><Typo.A href="mailto:pgrillo@gmail.com">pgrillo@gmail.com</Typo.A>
                        </IconItem>
                        <IconItem>
                            <Icons.Phone /><Typo.A href="tel:+34 696 299 023">+34 696 299 023</Typo.A>
                        </IconItem>
                    </List>
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
                </SectionContentCss>
            </SectionWrapperCss>
        </Layout>
    )
}
