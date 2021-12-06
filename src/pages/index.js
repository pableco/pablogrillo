import { useState, useRef, useEffect } from "react"
import Head from 'next/head';
import UseAnimations from 'react-useanimations';
import arrowDown from 'react-useanimations/lib/arrowDown';

import Layout, { siteTitle } from '../components/layout';
import {
    Column,
    ContentColumnTitle,
    EmptyColumn,
    HeaderCss,
    MainCss,
    MenuCss,
    SectionContentCss,
    SectionFooterCss,
    SectionTitleCss,
    SectionWrapperCss,
} from '../components/layout.styles';
import Typo from '../styles/text.styles';
import {
    List,
    IconItem,
} from '../styles/list.styles';
import * as Icons from '../icons';
const name = 'pablo grillo';
const title = 'Product Designer | Design Engineer';

export default function Home() {
    const [nameHeight, setNameHeight] = useState(0);
    const [showArrowHeight, setShowArrowHeight] = useState(true);

    const nameEl = useRef(null);
    const arrowEl = useRef(null);

    const [dimensions, setDimensions] = useState({
        height: 0,
        width: 0,
    })

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
            setNameHeight(nameEl.current.clientHeight);
        }

        const handleScroll = () => {
            const heightAndFallback = nameHeight + 200;
            if (arrowEl?.current?.getBoundingClientRect()?.top <= heightAndFallback ){
                setShowArrowHeight(false);
            } else {
                setShowArrowHeight(true);
            }
        }

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.addEventListener('scroll', handleScroll);
        };
    });


    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <HeaderCss ref={nameEl}>
                <EmptyColumn />
                <ContentColumnTitle>
                    <Typo.Name>{name}</Typo.Name>
                    <Typo.Title>{title}</Typo.Title>
                </ContentColumnTitle>
            </HeaderCss>
            <Icons.WrapperDown ref={arrowEl} visible={showArrowHeight}>
                <UseAnimations
                    size={20}
                    animation={arrowDown}
                    loop={showArrowHeight} />
            </Icons.WrapperDown>
            <MenuCss>
                <li><a href="#about">About</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#education">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </MenuCss>
            <MainCss>
                <SectionWrapperCss id='about'>
                    <SectionTitleCss nameHeight={nameHeight}>
                        <Typo.H3>About</Typo.H3>
                    </SectionTitleCss>
                    <SectionContentCss>
                        <Column>
                            <Typo.P>
                                I am a Design Engineer, half designer and half developer.
                                My university <mark>education in computer science and design</mark> allowed me
                                to get jobs as an external contractor on worldwide consulting
                                agencies or as CIO and founder of a startup.
                                I have been through consolidated companies and design studies working
                                for brands like Coke, Adidas, Carte d&apos;Or, Bacardi, Telefónica, Endesa, Carrefour, etc.
                            </Typo.P>
                            <Typo.P>
                                Skilled in UI, HTML5, JavaScript, React, REDUX, Styled Components,
                                Webpack, Jest, React Testing Library, Google Analytics and Google Tag Manager.
                            </Typo.P>
                        </Column>
                        <Column>
                            <Typo.P>
                                Also I Leads a community of 14 Front End developers,
                                working with an emphasis in scalability and readability.
                            </Typo.P>
                            <Typo.P>
                                I believe in the transforming value of design methodologies
                                in the social and business environment. For that reason,
                                I am <mark>part of the founding board of Fudament.es a non-profit
                                association that use a design thinking mindset and UX research</mark> to solve social problems.
                            </Typo.P>
                        </Column>
                    </SectionContentCss>
                </SectionWrapperCss>
                <SectionWrapperCss id='work'>
                    <SectionTitleCss nameHeight={nameHeight}>
                        <Typo.H3>Work</Typo.H3>
                    </SectionTitleCss>
                    <SectionContentCss>
                        <dl>
                            <Typo.YearCss>2016</Typo.YearCss>
                            <dd>
                                <Typo.H4>Roiback </Typo.H4>
                                <Typo.P>Design Engineer and Front-end. Product Designer of reservation flow and mobile app.
                                Conversion rate optimization.</Typo.P>
                            </dd>
                            <Typo.YearCss>2014</Typo.YearCss>
                            <dd>
                                <Typo.H4>yourttoo.com | openmarket.travel </Typo.H4>
                                <Typo.P>Co-Founder and CTO, providing technical vision for the Business Development of the company. Building and leading the tech team, product design and user experience. </Typo.P>
                            </dd>
                        </dl>
                        <dl>
                            <Typo.YearCss>2013</Typo.YearCss>
                            <dd>
                                <Typo.H4>Accenture Interactive | FJORD </Typo.H4>
                                <Typo.P>External Services Provider | Web Designer Front-End Trainer for High Traffic Ecommerce Sites & Conversion Rate Optimization </Typo.P>
                            </dd>
                            <Typo.YearCss>2009</Typo.YearCss>
                            <dd>
                                <Typo.H4>Orizonia </Typo.H4>
                                <Typo.P>Reporting directly to the head of Marketing and Product. UX / UI / Analytics / Project Manager </Typo.P>
                            </dd>
                        </dl>
                    </SectionContentCss>
                </SectionWrapperCss>
                <SectionWrapperCss id='education'>
                    <SectionTitleCss nameHeight={nameHeight}>
                        <Typo.H3>Education</Typo.H3>
                    </SectionTitleCss>
                    <SectionContentCss>
                        <dl>
                            <Typo.YearCss>2012</Typo.YearCss>
                            <dd>
                                <Typo.H4>User Experience Desing | Human Computer Interaction </Typo.H4>
                                <Typo.P>Universitat Oberta de Catalunya </Typo.P>
                            </dd>
                            <Typo.YearCss>2009</Typo.YearCss>
                            <dd>
                                <Typo.H4>Image & Sound Design</Typo.H4>
                                <Typo.P>Universidad de Buenos Aires </Typo.P>
                            </dd>
                        </dl>
                        <dl>
                            <Typo.YearCss>2006</Typo.YearCss>
                            <dd>
                                <Typo.H4>Graphic Design</Typo.H4>
                                <Typo.P>Universidad de Buenos Aires <em>(two years completed)</em> </Typo.P>
                            </dd>
                            <Typo.YearCss>2004</Typo.YearCss>
                            <dd>
                                <Typo.H4>Computer Science</Typo.H4>
                                <Typo.P>Universidad de Buenos Aires <em>(two years completed)</em></Typo.P>
                            </dd>
                        </dl>
                    </SectionContentCss>
                </SectionWrapperCss>
                <SectionWrapperCss id='contact'>
                    <SectionTitleCss nameHeight={nameHeight}>
                        <Typo.H3>Contact</Typo.H3>
                    </SectionTitleCss>
                    <SectionFooterCss>
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
                    </SectionFooterCss>
                </SectionWrapperCss>
            </MainCss>
        </Layout>
    )
}
