/**
 * Fuente única de verdad del contenido del CV.
 *
 * Este módulo es datos puros: sin JSX, sin imports de React y sin SVG, para que
 * pueda consumirlo tanto la página (`src/pages/index.js`) como código de
 * servidor (el system prompt del chat). Si cambias algo aquí, cambia en los dos
 * sitios a la vez — que es justamente el objetivo.
 *
 * Convenciones:
 * - `id` de cada sección coincide con el ancla de la página (`#about`, `#work`…).
 * - `columnSplit` es el índice por el que se parten los items en las dos
 *   columnas del layout. Ver `splitAt`.
 * - Los párrafos de About son arrays de segmentos porque llevan `<mark>`
 *   intercalado; un segmento con `mark: true` se resalta.
 */

export const profile = {
    name: 'pablo grillo',
    fullName: 'Pablo Grillo',
    titles: ['Design Engineer', 'UX Designer'],
};

export const about = {
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

export const work = {
    id: 'work',
    label: 'Work',
    columnSplit: 4,
    items: [
        {
            year: 2026,
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
            year: 2003,
            company: 'Moveo Imagen y Sonido',
            role: 'Co-Founder',
            description: 'Audiovisual production and post-production. Motion Graphics.',
        },
    ],
};

export const education = {
    id: 'education',
    label: 'Education',
    columnSplit: 2,
    items: [
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
    ],
};

export const courses = {
    id: 'courses',
    label: 'Courses',
    columnSplit: 4,
    items: [
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
    ],
};

export const contact = {
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
export const sections = [about, work, education, courses, contact];

/** Parte una lista en las dos columnas del layout. */
export const splitAt = (items, index) => [items.slice(0, index), items.slice(index)];
