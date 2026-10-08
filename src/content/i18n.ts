/**
 * Idiomas de la web: el CV de cada idioma y los textos de la interfaz.
 *
 * Los idiomas los enruta Next (`i18n` en next.config.js): `/` es inglés y
 * `/es` español. Quien pinta algo pide aquí lo de su idioma con `getCV` y
 * `getStrings`, en vez de importar `cv.ts` directamente.
 */

import * as en from './cv';
import { es, type CVTranslation } from './cv.es';
import type {
    AboutSection,
    ContactSection,
    CoursesSection,
    EducationSection,
    Profile,
    Section,
    SkillsSection,
    WorkSection,
} from './cv';

/** Mismo orden y valores que `i18n.locales` en next.config.js. */
export const locales = ['en', 'es'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'en';

export const isLocale = (value: unknown): value is Locale => (
    typeof value === 'string' && (locales as readonly string[]).includes(value)
);

/** Para valores que llegan de fuera (el router, el cuerpo de una petición). */
export const toLocale = (value: unknown): Locale => (isLocale(value) ? value : defaultLocale);

export interface CV {
    profile: Profile;
    about: AboutSection;
    skills: SkillsSection;
    work: WorkSection;
    education: EducationSection;
    courses: CoursesSection;
    contact: ContactSection;
    /** Orden del menú, igual que `sections` en cv.ts. */
    sections: Section[];
}

/**
 * Comprueba que cada clave de una traducción corresponde a algo que existe.
 * Una clave huérfana es casi siempre un ancla que cambió en cv.ts: sin esta
 * comprobación esa entrada se quedaría en inglés sin que nadie lo notara.
 */
const assertKnownKeys = (scope: string, keys: string[], known: string[]): void => {
    const unknown = keys.filter((key) => !known.includes(key));
    if (unknown.length > 0) {
        throw new Error(`cv.es.ts: "${scope}" traduce claves que no existen en cv.ts: ${unknown.join(', ')}.`);
    }
};

const translate = (t: CVTranslation): CV => {
    assertKnownKeys('labels', Object.keys(t.labels), en.sections.map((section) => section.id));
    assertKnownKeys('skillGroups', Object.keys(t.skillGroups), en.skills.groups.map((group) => group.title));
    assertKnownKeys('skillItems', Object.keys(t.skillItems), en.skills.groups.flatMap((group) => group.items));
    assertKnownKeys('work', Object.keys(t.work), en.work.items.map((item) => item.id));
    assertKnownKeys('education', Object.keys(t.education), en.education.items.map((item) => item.id));
    assertKnownKeys('courses', Object.keys(t.courses), en.courses.items.map((item) => item.id));

    if (t.about.length !== en.about.paragraphs.length) {
        throw new Error('cv.es.ts: "about" tiene que tener tantos párrafos como en cv.ts, o `columnSplit` los repartiría mal.');
    }

    const label = <T extends Section>(section: T): T => ({ ...section, label: t.labels[section.id] ?? section.label });

    const about = { ...label(en.about), paragraphs: t.about };
    const skills = {
        ...label(en.skills),
        groups: en.skills.groups.map((group) => ({
            title: t.skillGroups[group.title] ?? group.title,
            items: group.items.map((item) => t.skillItems[item] ?? item),
        })),
    };
    const work = {
        ...label(en.work),
        items: en.work.items.map((item) => ({ ...item, ...t.work[item.id] })),
    };
    const education = {
        ...label(en.education),
        items: en.education.items.map((item) => ({ ...item, ...t.education[item.id] })),
    };
    const courses = {
        ...label(en.courses),
        items: en.courses.items.map((item) => ({ ...item, ...t.courses[item.id] })),
    };
    const contact = label(en.contact);

    const byId: Record<string, Section> = { about, skills, work, education, courses, contact };

    return {
        profile: en.profile,
        about,
        skills,
        work,
        education,
        courses,
        contact,
        sections: en.sections.map((section) => byId[section.id]),
    };
};

const cvs: Record<Locale, CV> = {
    en: {
        profile: en.profile,
        about: en.about,
        skills: en.skills,
        work: en.work,
        education: en.education,
        courses: en.courses,
        contact: en.contact,
        sections: en.sections,
    },
    es: translate(es),
};

export const getCV = (locale: Locale): CV => cvs[locale];

export interface Strings {
    /** Valor de `og:locale`. */
    ogLocale: string;
    siteTitle: string;
    siteDescription: string;
    /** Une los dos títulos del perfil en la cabecera. */
    titleJoiner: string;
    moreAboutRole: string;
    more: string;
    earlierCourses: string;
    /** Nombre accesible del selector de idioma. */
    languageNav: string;
    chat: {
        region: string;
        open: string;
        close: string;
        intro: string;
        suggestions: string[];
        typing: string;
        error: string;
        retry: string;
        placeholder: string;
        send: string;
    };
}

/** Nombre de cada idioma escrito en ese idioma, para el selector. */
export const languageNames: Record<Locale, string> = {
    en: 'English',
    es: 'Español',
};

const strings: Record<Locale, Strings> = {
    en: {
        ogLocale: 'en_US',
        siteTitle: 'Pablo Grillo — Design Engineer & UX Designer',
        siteDescription: 'Pablo Grillo, Design Engineer and UX Designer. Senior Design Engineer at Roiback, leading design systems, backoffice tools and a community of front end developers.',
        titleJoiner: 'and',
        moreAboutRole: 'More about this role',
        more: 'More',
        earlierCourses: 'Earlier courses',
        languageNav: 'Language',
        chat: {
            region: 'Chat about Pablo Grillo',
            open: 'Ask about Pablo',
            close: 'Close',
            intro: 'Ask me anything about Pablo\'s work, skills or background.',
            suggestions: [
                'Where does Pablo work right now?',
                'What technologies does he use?',
                'How can I get in touch?',
            ],
            typing: 'Pablo\'s assistant is answering',
            error: 'Something went wrong. Please try again.',
            retry: 'Retry',
            placeholder: 'Ask a question…',
            send: 'Send',
        },
    },
    es: {
        ogLocale: 'es_ES',
        siteTitle: 'Pablo Grillo — Design Engineer y UX Designer',
        siteDescription: 'Pablo Grillo, Design Engineer y UX Designer. Senior Design Engineer en Roiback: design systems, herramientas de backoffice y liderazgo de una comunidad de desarrolladores front end.',
        titleJoiner: 'y',
        moreAboutRole: 'Más sobre este puesto',
        more: 'Más',
        earlierCourses: 'Cursos anteriores',
        languageNav: 'Idioma',
        chat: {
            region: 'Chat sobre Pablo Grillo',
            // Corto a propósito: la pastilla cerrada mide 26rem fijos (ver
            // BAR_WIDTH en Chat.styles.ts) y "Pregunta sobre Pablo" partía en
            // dos líneas.
            open: 'Chat sobre Pablo',
            close: 'Cerrar',
            intro: 'Pregúntame lo que quieras sobre la experiencia, las habilidades o la trayectoria de Pablo.',
            suggestions: [
                '¿Dónde trabaja Pablo ahora?',
                '¿Qué tecnologías usa?',
                '¿Cómo puedo contactarle?',
            ],
            typing: 'El asistente de Pablo está respondiendo',
            error: 'Algo ha fallado. Inténtalo de nuevo.',
            retry: 'Reintentar',
            placeholder: 'Haz una pregunta…',
            send: 'Enviar',
        },
    },
};

export const getStrings = (locale: Locale): Strings => strings[locale];

export const siteUrl = 'https://pablogrillo.com';

/** URL pública de la portada en un idioma: el inglés va sin prefijo. */
export const localeUrl = (locale: Locale): string => (
    locale === defaultLocale ? siteUrl : `${siteUrl}/${locale}`
);
