import { Fragment, useState, useRef, useEffect } from "react"
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
    Tag,
    TagList,
} from '../styles/list.styles';
import * as Icons from '../icons';
import {
    about,
    contact,
    courses,
    education,
    profile,
    sections,
    skills,
    splitAt,
    work,
} from '../content/cv';

const contactIcons = {
    email: Icons.Email,
    phone: Icons.Phone,
    github: Icons.Github,
    linkedin: Icons.Linkedin,
    behance: Icons.Behance,
};

const Paragraph = ({ segments }) => (
    <Typo.P>
        {segments.map((segment, index) => (
            segment.mark
                ? <mark key={index}>{segment.text}</mark>
                : <Fragment key={index}>{segment.text}</Fragment>
        ))}
    </Typo.P>
);

// El <div> agrupa año y contenido en una sola caja — válido dentro de un
// <dl> — para que el ancla de la entrada tenga algo que señalar y el chat
// pueda resaltarla entera de una pieza. Ver src/lib/highlight.ts.
const DefinitionColumn = ({ items, renderItem }) => (
    <dl>
        {items.map((item) => (
            <div key={item.id} id={item.id}>
                <Typo.YearCss>{item.year}</Typo.YearCss>
                <dd>{renderItem(item)}</dd>
            </div>
        ))}
    </dl>
);

const SkillGroup = ({ group }) => (
    <>
        <Typo.H4>{group.title}</Typo.H4>
        <TagList role="list">
            {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
            ))}
        </TagList>
    </>
);

const renderWork = (item) => (
    <>
        <Typo.H4>{`${item.company} — ${item.role}`}</Typo.H4>
        <Typo.P>{item.description}</Typo.P>
    </>
);

const renderEducation = (item) => (
    <>
        <Typo.H4>{item.title}</Typo.H4>
        <Typo.P>
            {item.note ? `${item.school} ` : item.school}
            {item.note ? <em>{`(${item.note})`}</em> : null}
        </Typo.P>
    </>
);

const renderCourse = (item) => (
    <>
        <Typo.H4>{item.title}</Typo.H4>
        <Typo.P>
            {item.url ? <a href={item.url}>{item.org}</a> : item.org}
        </Typo.P>
    </>
);

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

    const [aboutLeft, aboutRight] = splitAt(about.paragraphs, about.columnSplit);
    const [skillsLeft, skillsRight] = splitAt(skills.groups, skills.columnSplit);
    const [workLeft, workRight] = splitAt(work.items, work.columnSplit);
    const [educationLeft, educationRight] = splitAt(education.items, education.columnSplit);
    const [coursesLeft, coursesRight] = splitAt(courses.items, courses.columnSplit);
    const [contactLeft, contactRight] = splitAt(contact.items, contact.columnSplit);

    const renderContactList = (items) => (
        <List>
            {items.map((item) => {
                const Icon = contactIcons[item.icon];
                return (
                    <IconItem key={item.href}>
                        <Icon /><Typo.A href={item.href}>{item.label}</Typo.A>
                    </IconItem>
                );
            })}
        </List>
    );

    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <HeaderCss>
                <ContentTitle ref={nameEl}>
                    <Typo.Name>{profile.name}</Typo.Name>
                    <Typo.Title><span>{profile.titles[0]}</span> and <span>{profile.titles[1]}</span></Typo.Title>
                    <Icons.WrapperDown ref={arrowEl} visible={showArrowHeight}>
                    </Icons.WrapperDown>
                </ContentTitle>
            </HeaderCss>
            <MenuCss>
                {sections.map((section) => (
                    <li key={section.id}><a href={`#${section.id}`}>{section.label}</a></li>
                ))}
            </MenuCss>
            <MainCss>
                <SectionWrapperCss id={about.id}>
                    <SectionTitleCss nameHeight={nameHeight}>
                        <Typo.AboutTitle>{about.label}</Typo.AboutTitle>
                    </SectionTitleCss>
                    <SectionContentCss>
                        <Column>
                            {aboutLeft.map((segments, index) => (
                                <Paragraph key={index} segments={segments} />
                            ))}
                        </Column>
                        <Column>
                            {aboutRight.map((segments, index) => (
                                <Paragraph key={index} segments={segments} />
                            ))}
                        </Column>
                    </SectionContentCss>
                </SectionWrapperCss>
                <SectionWrapperCss id={work.id}>
                    <SectionTitleCss nameHeight={nameHeight}>
                        <Typo.WorkTitle>{work.label}</Typo.WorkTitle>
                    </SectionTitleCss>
                    <SectionContentCss>
                        <DefinitionColumn items={workLeft} renderItem={renderWork} />
                        <DefinitionColumn items={workRight} renderItem={renderWork} />
                    </SectionContentCss>
                </SectionWrapperCss>
                <SectionWrapperCss id={education.id}>
                    <SectionTitleCss nameHeight={nameHeight}>
                        <Typo.EducationTitle>{education.label}</Typo.EducationTitle>
                    </SectionTitleCss>
                    <SectionContentCss>
                        <DefinitionColumn items={educationLeft} renderItem={renderEducation} />
                        <DefinitionColumn items={educationRight} renderItem={renderEducation} />
                    </SectionContentCss>
                </SectionWrapperCss>
                <SectionWrapperCss id={courses.id}>
                    <SectionTitleCss nameHeight={nameHeight}>
                        <Typo.CoursesTitle>{courses.label}</Typo.CoursesTitle>
                    </SectionTitleCss>
                    <SectionContentCss>
                        <DefinitionColumn items={coursesLeft} renderItem={renderCourse} />
                        <DefinitionColumn items={coursesRight} renderItem={renderCourse} />
                    </SectionContentCss>
                </SectionWrapperCss>
                <SectionWrapperCss id={skills.id}>
                    <SectionTitleCss nameHeight={nameHeight}>
                        <Typo.SkillsTitle>{skills.label}</Typo.SkillsTitle>
                    </SectionTitleCss>
                    <SectionContentCss>
                        <Column>
                            {skillsLeft.map((group) => (
                                <SkillGroup key={group.title} group={group} />
                            ))}
                        </Column>
                        <Column>
                            {skillsRight.map((group) => (
                                <SkillGroup key={group.title} group={group} />
                            ))}
                        </Column>
                    </SectionContentCss>
                </SectionWrapperCss>
                <SectionWrapperCss id={contact.id}>
                    <SectionTitleCss nameHeight={nameHeight}>
                        <Typo.ContactTitle>{contact.label}</Typo.ContactTitle>
                    </SectionTitleCss>
                    <SectionFooterCss>
                        {renderContactList(contactLeft)}
                        {renderContactList(contactRight)}
                    </SectionFooterCss>
                </SectionWrapperCss>
            </MainCss>
        </Layout>
    )
}
