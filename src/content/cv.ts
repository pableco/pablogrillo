/**
 * Fuente única de verdad del contenido del CV.
 *
 * Este módulo es datos puros: sin JSX, sin imports de React y sin SVG, para que
 * pueda consumirlo tanto la página (`src/pages/index.js`) como código de
 * servidor (el system prompt del chat, ver `src/lib/systemPrompt.ts`). Si
 * cambias algo aquí, cambia en los dos sitios a la vez — que es justamente
 * el objetivo.
 *
 * Convenciones:
 * - `id` de cada sección coincide con el ancla de la página (`#about`, `#work`…).
 * - `columnSplit` es el índice por el que se parten los items en las dos
 *   columnas del layout. Ver `splitAt`.
 * - Los párrafos de About son arrays de segmentos porque llevan `<mark>`
 *   intercalado; un segmento con `mark: true` se resalta.
 */

export interface Profile {
    name: string;
    fullName: string;
    titles: [string, string];
}

export interface AboutSegment {
    text: string;
    mark?: boolean;
}

export interface AboutSection {
    id: string;
    label: string;
    columnSplit: number;
    paragraphs: AboutSegment[][];
}

export interface SkillGroup {
    title: string;
    items: string[];
}

export interface SkillsSection {
    id: string;
    label: string;
    columnSplit: number;
    groups: SkillGroup[];
}

export interface WorkItem {
    /** Ancla de la entrada, derivada — ver `withAnchors`. */
    id: string;
    year: number;
    company: string;
    role: string;
    description: string;
}

export interface WorkSection {
    id: string;
    label: string;
    columnSplit: number;
    items: WorkItem[];
}

export interface EducationItem {
    /** Ancla de la entrada, derivada — ver `withAnchors`. */
    id: string;
    year: number;
    title: string;
    school: string;
    note?: string;
}

export interface EducationSection {
    id: string;
    label: string;
    columnSplit: number;
    items: EducationItem[];
}

export interface CourseItem {
    /** Ancla de la entrada, derivada — ver `withAnchors`. */
    id: string;
    year: number;
    title: string;
    org: string;
    url?: string;
}

export interface CoursesSection {
    id: string;
    label: string;
    columnSplit: number;
    items: CourseItem[];
}

export type ContactIcon = 'email' | 'phone' | 'github' | 'linkedin' | 'behance';

export interface ContactItem {
    icon: ContactIcon;
    label: string;
    href: string;
}

export interface ContactSection {
    id: string;
    label: string;
    columnSplit: number;
    email: string;
    phone: string;
    items: ContactItem[];
}

export type Section = AboutSection | SkillsSection | WorkSection | EducationSection | CoursesSection | ContactSection;

/**
 * Convierte un texto en un fragmento de ancla: sin acentos, en minúsculas
 * y separado por guiones. Se corta a cuatro palabras porque estas anclas
 * las escribe el modelo del chat en sus respuestas, y una cadena corta es
 * más difícil de equivocar (y más barata en tokens) que un título entero.
 */
const slug = (value: string): string => value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .split('-')
    .slice(0, 4)
    .join('-');

/**
 * Deriva el `id` de cada entrada a partir de su propio contenido, en vez de
 * escribirlo a mano, para que no pueda desincronizarse de lo que se ve en
 * pantalla. El año va al final porque desempata las entradas que comparten
 * empresa o título (Roiback aparece dos veces). Estos ids son a la vez el
 * ancla del HTML y la que el chat cita en sus respuestas, así que
 * cambiarlos rompe enlaces ya compartidos: trátalos como parte del
 * contenido, no como un detalle interno.
 */
const withAnchors = <T extends { year: number }>(
    prefix: string,
    key: (item: T) => string,
    items: T[],
): (T & { id: string })[] => {
    const ids = items.map((item) => `${prefix}-${slug(key(item))}-${item.year}`);
    const duplicate = ids.find((id, index) => ids.indexOf(id) !== index);

    if (duplicate) {
        throw new Error(`cv.ts: dos entradas de "${prefix}" comparten el ancla "${duplicate}".`);
    }

    return items.map((item, index) => ({ ...item, id: ids[index] }));
};

export const profile: Profile = {
    name: 'pablo grillo',
    fullName: 'Pablo Grillo',
    titles: ['Design Engineer', 'UX Designer'],
};

export const about: AboutSection = {
    id: 'about',
    label: 'About',
    columnSplit: 2,
    paragraphs: [
        [
            { text: 'I am a Design Engineer, half designer, and half developer. My university ' },
            { text: 'education in computer science and design', mark: true },
            { text: ' allowed me to get jobs as an external contractor on worldwide consulting agencies or as CIO and founder of a startup. I have been through consolidated companies and design studies working for brands like Coke, Adidas, Carte d\'Or, Bacardi, Telefónica, Endesa, Carrefour, etc.' },
        ],
        [
            { text: 'Currently at Roiback as ' },
            { text: 'Senior Design Engineer / Senior UX', mark: true },
            { text: ', redesigning backoffice tools, leading a team of developers and coordinating the company\'s designers. I built the mobile web app for hotel booking flows from scratch and led the design system “TALAIOTS” applying design tokens across the product.' },
        ],
        [
            { text: 'I lead a community of 14 Front End developers across 5 separate teams of designers and developers across different time zones, with an emphasis on best practices, scalability, and asynchronous working.' },
        ],
        [
            { text: 'I believe in the transforming value of design methodologies in the social and business environment. For that reason, I am ' },
            { text: 'part of the founding board of Fundament.es a non-profit association that uses a design thinking mindset and UX research', mark: true },
            { text: ' to solve social problems.' },
        ],
    ],
};

export const skills: SkillsSection = {
    id: 'skills',
    label: 'Skills',
    columnSplit: 2,
    groups: [
        {
            title: 'Frontend & Design Systems',
            items: [
                'TypeScript',
                'JavaScript (ES6+)',
                'React',
                'HTML5',
                'CSS3',
                'Styled-components',
                'MUI (Material UI)',
                'Design Systems',
                'Atomic Design',
                'Storybook',
                'Figma',
                'Responsive Design',
            ],
        },
        {
            title: 'AI & Agents',
            items: [
                'Claude Code',
                'Codex',
                'AI Agents & Skills',
                'MCP Servers',
                'Agentic Workflows',
                'Prompt Engineering',
            ],
        },
        {
            title: 'Testing',
            items: [
                'Vitest',
                'Testing Library',
                'Cypress',
                'Selenium',
                'Unit Testing',
                'Functional Testing',
                'Visual Regression',
                'TDD',
            ],
        },
        {
            title: 'Tools',
            items: [
                'Git / GitHub / GitLab',
                'Vite / Webpack',
                'npm / pnpm',
                'CI/CD',
                'Docker',
                'Jira',
                'SonarQube',
            ],
        },
    ],
};

export const work: WorkSection = {
    id: 'work',
    label: 'Work',
    columnSplit: 4,
    items: withAnchors('work', (item) => item.company, [
        {
            year: 2023,
            company: 'Roiback',
            role: 'Team Lead',
            description: 'Leading the redesign of the company\'s backoffice tools while managing a team of developers and coordinating designers across the organization.',
        },
        {
            year: 2022,
            company: 'W2M World2Meet',
            role: 'Digital Experience Manager',
            description: 'User behavior tracking across the group\'s brand sites. Implementation of Treasure Data and User Insider scripts. Planning and management of CMP and DIDOMI preference center.',
        },
        {
            year: 2016,
            company: 'Roiback',
            role: 'Design Engineer & UX',
            description: 'From UX/Front End Lead to Senior Design Engineer. Built from scratch the mobile web app for hotel booking flows and led the Design System “TALAIOTS”.',
        },
        {
            year: 2014,
            company: 'yourttoo.com',
            role: 'CTO & Co-Founder',
            description: 'Co-Founder and CIO. Technical vision and business development, system architecture, building and managing the tech team, product design and user experience.',
        },
        {
            year: 2013,
            company: 'Accenture España',
            role: 'External IT Consultant',
            description: 'Front-end supervisor and trainer. Website performance and conversion funnel optimization for high traffic ecommerce sites. UI designer.',
        },
        {
            year: 2011,
            company: 'Orizonia',
            role: 'UX/UI Designer, B2B sites and webapps',
            description: 'User Experience, User-Centered Design, Usability, UI Design, Design Engineer, Front End Development, Marketing Online.',
        },
        {
            year: 2006,
            company: 'Ingamana',
            role: 'Web Designer & ActionScript Developer',
            description: 'Award-winning interactive design and development studio in Buenos Aires. Design and development of web applications in Flash, HTML, CSS and JavaScript for international studios and brands like Bacardi, Adidas, Carte d\'Or, Bic.',
        },
        {
            year: 2003,
            company: 'Moveo Imagen y Sonido',
            role: 'Co-Founder',
            description: 'Audiovisual production and post-production. Motion Graphics.',
        },
    ]),
};

export const education: EducationSection = {
    id: 'education',
    label: 'Education',
    columnSplit: 2,
    items: withAnchors('education', (item) => item.title, [
        {
            year: 2012,
            title: 'User Experience Design | Human Computer Interaction',
            school: 'Universitat Oberta de Catalunya',
        },
        {
            year: 2009,
            title: 'Image & Sound Design',
            school: 'Universidad de Buenos Aires',
        },
        {
            year: 2006,
            title: 'Graphic Design',
            school: 'Universidad de Buenos Aires',
            note: 'two years completed',
        },
        {
            year: 2004,
            title: 'Computer Science',
            school: 'Universidad de Buenos Aires',
            note: 'two years completed',
        },
    ]),
};

export const courses: CoursesSection = {
    id: 'courses',
    label: 'Courses',
    columnSplit: 4,
    items: withAnchors('courses', (item) => item.title, [
        {
            year: 2024,
            title: 'Google Data Analytics Professional Certificate',
            org: 'Google / Coursera',
            url: 'https://www.coursera.org/professional-certificates/google-data-analytics',
        },
        {
            year: 2020,
            title: 'AI for everyone',
            org: 'DeepLearning.AI',
            url: 'https://www.deeplearning.ai/',
        },
        {
            year: 2020,
            title: 'Google Analytics Individual Qualification',
            org: 'Google',
        },
        {
            year: 2017,
            title: 'Design Thinking & Innovation',
            org: 'apd.es',
            url: 'https://www.apd.es/',
        },
        {
            year: 2013,
            title: 'Technology Based Entrepreneurship',
            org: 'FundacioBit',
            url: 'https://www.fundaciobit.org/',
        },
        {
            year: 2010,
            title: 'Project Management',
            org: 'CAEB',
            url: 'https://www.caeb.es/',
        },
        {
            year: 2008,
            title: 'Information Architecture',
            org: 'UBA',
            url: 'https://www.uba.ar/',
        },
    ]),
};

export const contact: ContactSection = {
    id: 'contact',
    label: 'Contact',
    columnSplit: 2,
    email: 'pgrillo@gmail.com',
    phone: '+34 696 299 023',
    items: [
        { icon: 'email', label: 'pgrillo@gmail.com', href: 'mailto:pgrillo@gmail.com' },
        { icon: 'phone', label: '+34 696 299 023', href: 'tel:+34 696 299 023' },
        { icon: 'github', label: 'github.com/pableco', href: 'https://www.github.com/pableco' },
        { icon: 'linkedin', label: 'es.linkedin.com/in/grillopablo', href: 'https://es.linkedin.com/in/grillopablo' },
        { icon: 'behance', label: 'behance.net/pableco', href: 'https://behance.net/pableco' },
    ],
};

/** Orden de las secciones, usado para el menú de navegación. */
export const sections: Section[] = [about, work, education, courses, skills, contact];

/** Parte una lista en las dos columnas del layout. */
export const splitAt = <T,>(items: T[], index: number): [T[], T[]] => [items.slice(0, index), items.slice(index)];
