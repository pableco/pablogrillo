import { useState, useRef, useEffect } from "react"
import Head from 'next/head';

import Layout, { siteTitle } from '../components/layout';
import {
    Column,
    ContentTitle,
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
const designTitle = 'Design Engineer';
const devTitle = 'UX Designer';

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
            <HeaderCss>
                <ContentTitle ref={nameEl}>
                    <Typo.Name>{name}</Typo.Name>
                    <Typo.Title><span>{designTitle}</span> and <span>{devTitle}</span></Typo.Title>
                    <Icons.WrapperDown ref={arrowEl} visible={showArrowHeight}>
                    </Icons.WrapperDown>
                </ContentTitle>
            </HeaderCss>
            <MenuCss>
                <li><a href="#about">About</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#courses">Courses</a></li>
                <li><a href="#contact">Contact</a></li>
            </MenuCss>
            <MainCss>
                <SectionWrapperCss id='about'>
                    <SectionTitleCss nameHeight={nameHeight}>
                        <Typo.AboutTitle>About</Typo.AboutTitle>
                    </SectionTitleCss>
                    <SectionContentCss>
                        <Column>
                            <Typo.P>
                                I am a Design Engineer, half designer, and half developer.
                                My university <mark>education in computer science and design</mark> allowed me
                                to get jobs as an external contractor on worldwide consulting
                                agencies or as CIO and founder of a startup.
                                I have been through consolidated companies and design studies working
                                for brands like Coke, Adidas, Carte d&apos;Or, Bacardi, Telefónica, Endesa, Carrefour, etc.
                            </Typo.P>
                            <Typo.P>
                                Currently at Roiback as <mark>Senior Design Engineer / Senior UX</mark>, redesigning backoffice tools,
                                leading a team of developers and coordinating the company&apos;s designers.
                                I built the mobile web app for hotel booking flows from scratch and led the design
                                system &ldquo;TALAIOTS&rdquo; applying design tokens across the product.
                            </Typo.P>
                        </Column>
                        <Column>
                            <Typo.P>
                                I lead a community of 14 Front End developers across 5 separate teams of designers and developers
                                across different time zones, with an emphasis on best practices, scalability, and asynchronous working.
                            </Typo.P>
                            <Typo.P>
                                I believe in the transforming value of design methodologies
                                in the social and business environment. For that reason,
                                I am <mark>part of the founding board of Fundament.es a non-profit
                                association that uses a design thinking mindset and UX research</mark> to solve social problems.
                            </Typo.P>
                        </Column>
                    </SectionContentCss>
                </SectionWrapperCss>
                <SectionWrapperCss id='work'>
                    <SectionTitleCss nameHeight={nameHeight}>
                        <Typo.WorkTitle>Work</Typo.WorkTitle>
                    </SectionTitleCss>
                    <SectionContentCss>
                        <dl>
                            <Typo.YearCss>2026</Typo.YearCss>
                            <dd>
                                <Typo.H4>Roiback — Team Lead</Typo.H4>
                                <Typo.P>Leading the redesign of the company&apos;s backoffice tools while managing a team of developers and coordinating designers across the organization.</Typo.P>
                            </dd>
                            <Typo.YearCss>2022</Typo.YearCss>
                            <dd>
                                <Typo.H4>W2M World2Meet — Digital Experience Manager</Typo.H4>
                                <Typo.P>User behavior tracking across the group&apos;s brand sites. Implementation of Treasure Data and User Insider scripts. Planning and management of CMP and DIDOMI preference center.</Typo.P>
                            </dd>
                            <Typo.YearCss>2016</Typo.YearCss>
                            <dd>
                                <Typo.H4>Roiback — Design Engineer &amp; UX</Typo.H4>
                                <Typo.P>From UX/Front End Lead to Senior Design Engineer. Built from scratch the mobile web app for hotel booking flows and led the Design System &ldquo;TALAIOTS&rdquo;.</Typo.P>
                            </dd>
                            <Typo.YearCss>2014</Typo.YearCss>
                            <dd>
                                <Typo.H4>yourttoo.com — CTO &amp; Co-Founder</Typo.H4>
                                <Typo.P>Co-Founder and CIO. Technical vision and business development, system architecture, building and managing the tech team, product design and user experience.</Typo.P>
                            </dd>
                        </dl>
                        <dl>
                            <Typo.YearCss>2013</Typo.YearCss>
                            <dd>
                                <Typo.H4>Accenture España — External IT Consultant</Typo.H4>
                                <Typo.P>Front-end supervisor and trainer. Website performance and conversion funnel optimization for high traffic ecommerce sites. UI designer.</Typo.P>
                            </dd>
                            <Typo.YearCss>2011</Typo.YearCss>
                            <dd>
                                <Typo.H4>Orizonia — UX/UI Designer, B2B sites and webapps</Typo.H4>
                                <Typo.P>User Experience, User-Centered Design, Usability, UI Design, Design Engineer, Front End Development, Marketing Online.</Typo.P>
                            </dd>
                            <Typo.YearCss>2003</Typo.YearCss>
                            <dd>
                                <Typo.H4>Moveo Imagen y Sonido — Co-Founder</Typo.H4>
                                <Typo.P>Audiovisual production and post-production. Motion Graphics.</Typo.P>
                            </dd>
                        </dl>
                    </SectionContentCss>
                </SectionWrapperCss>
                <SectionWrapperCss id='education'>
                    <SectionTitleCss nameHeight={nameHeight}>
                        <Typo.EducationTitle>Education</Typo.EducationTitle>
                    </SectionTitleCss>
                    <SectionContentCss>
                        <dl>
                            <Typo.YearCss>2012</Typo.YearCss>
                            <dd>
                                <Typo.H4>User Experience Design | Human Computer Interaction </Typo.H4>
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
                <SectionWrapperCss id='courses'>
                    <SectionTitleCss nameHeight={nameHeight}>
                        <Typo.CoursesTitle>Courses</Typo.CoursesTitle>
                    </SectionTitleCss>
                    <SectionContentCss>
                        <dl>
                            <Typo.YearCss>2024</Typo.YearCss>
                            <dd>
                                <Typo.H4>Google Data Analytics Professional Certificate</Typo.H4>
                                <Typo.P><a href='https://www.coursera.org/professional-certificates/google-data-analytics'>Google / Coursera</a></Typo.P>
                            </dd>
                            <Typo.YearCss>2020</Typo.YearCss>
                            <dd>
                                <Typo.H4>AI for everyone</Typo.H4>
                                <Typo.P><a href='https://www.deeplearning.ai/'>DeepLearning.AI</a></Typo.P>
                            </dd>
                            <Typo.YearCss>2020</Typo.YearCss>
                            <dd>
                                <Typo.H4>Google Analytics Individual Qualification</Typo.H4>
                                <Typo.P>Google</Typo.P>
                            </dd>
                            <Typo.YearCss>2017</Typo.YearCss>
                            <dd>
                                <Typo.H4>Design Thinking & Innovation</Typo.H4>
                                <Typo.P><a href='https://www.apd.es/'>apd.es</a></Typo.P>
                            </dd>
                        </dl>
                        <dl>
                            <Typo.YearCss>2013</Typo.YearCss>
                            <dd>
                                <Typo.H4>Technology Based Entrepreneurship</Typo.H4>
                                <Typo.P><a href='https://www.fundaciobit.org/'>FundacioBit</a></Typo.P>
                            </dd>
                            <Typo.YearCss>2010</Typo.YearCss>
                            <dd>
                                <Typo.H4>Project Management</Typo.H4>
                                <Typo.P><a href='https://www.caeb.es/'>CAEB</a></Typo.P>
                            </dd>
                            <Typo.YearCss>2008</Typo.YearCss>
                            <dd>
                                <Typo.H4>Information Architecture</Typo.H4>
                                <Typo.P><a href='https://www.uba.ar/'>UBA</a></Typo.P>
                            </dd>
                        </dl>
                    </SectionContentCss>
                </SectionWrapperCss>
                <SectionWrapperCss id='contact'>
                    <SectionTitleCss nameHeight={nameHeight}>
                        <Typo.ContactTitle>Contact</Typo.ContactTitle>
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
