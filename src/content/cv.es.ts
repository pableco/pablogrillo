/**
 * Traducción al español del CV.
 *
 * No es una copia de `cv.ts`: solo lleva el texto que cambia de idioma, y
 * `i18n.ts` lo superpone sobre la versión inglesa. Así los años, las
 * empresas, los enlaces y sobre todo las anclas salen siempre de `cv.ts`, y
 * `/es#work-roiback-2023` señala la misma entrada que `/#work-roiback-2023`
 * — el chat cita esas anclas y no puede depender del idioma de la página.
 *
 * Convenciones:
 * - Las entradas se indexan por su ancla (`work-roiback-2023`). Si cambias en
 *   `cv.ts` lo que la genera (empresa, título o año), cambia aquí la clave:
 *   `i18n.ts` falla al arrancar si una clave no corresponde a ninguna entrada.
 * - Lo que no aparece se queda en inglés. Es lo que se quiere para nombres
 *   propios (cursos oficiales, empresas, tecnologías), y para todo lo demás
 *   lo vigila `tests/i18n.spec.ts`.
 * - Los títulos de puesto en inglés (Team Lead, Design Engineer…) se
 *   mantienen: así se usan en el sector en España.
 */

import type { AboutSegment } from './cv';

export interface CVTranslation {
    /** Nombre de cada sección, por su `id`. */
    labels: Record<string, string>;
    /** Mismo número de párrafos que en `cv.ts`: lo exige `columnSplit`. */
    about: AboutSegment[][];
    /** Grupos de habilidades, por su título en inglés. */
    skillGroups: Record<string, string>;
    /** Habilidades sueltas, por su nombre en inglés. */
    skillItems: Record<string, string>;
    work: Record<string, { role?: string; description: string; details?: string[] }>;
    education: Record<string, { title: string; note?: string; details?: string[] }>;
    courses: Record<string, { title?: string; org?: string }>;
}

export const es: CVTranslation = {
    labels: {
        about: 'Sobre mí',
        work: 'Experiencia',
        education: 'Formación',
        courses: 'Cursos',
        skills: 'Habilidades',
        contact: 'Contacto',
    },

    about: [
        [
            { text: 'Soy Design Engineer: mitad diseñador, mitad desarrollador. Mi ' },
            { text: 'formación universitaria en informática y diseño', mark: true },
            { text: ' me permitió trabajar como consultor externo para consultoras internacionales y como CIO y fundador de una startup. He pasado por empresas consolidadas y estudios de diseño, trabajando para marcas como Coca-Cola, Adidas, Carte d\'Or, Bacardi, Telefónica, Endesa, Carrefour, etc.' },
        ],
        [
            { text: 'La mayor parte de mi carrera la he hecho en el ' },
            { text: 'sector del ocio, los viajes y el turismo', mark: true },
            { text: ': turoperadores, una startup de viajes y tecnología de reservas hoteleras.' },
        ],
        [
            { text: 'Actualmente estoy en Roiback como ' },
            { text: 'Senior Design Engineer / Senior UX', mark: true },
            { text: ', rediseñando las herramientas de backoffice, liderando un equipo de desarrolladores y coordinando a los diseñadores de la empresa. Construí desde cero la web app móvil para los flujos de reserva hotelera y lideré el design system “TALAIOTS”, aplicando design tokens en todo el producto.' },
        ],
        [
            { text: 'En mi primera etapa en Roiback lideré una comunidad de 14 desarrolladores Front End repartidos en 5 equipos de diseñadores y desarrolladores en distintas zonas horarias, con foco en las buenas prácticas, la escalabilidad y el trabajo asíncrono.' },
        ],
        [
            { text: 'Creo en el valor transformador de las metodologías de diseño en el entorno social y empresarial. Por eso ' },
            { text: 'formo parte de la junta fundadora de Fundament.es, una asociación sin ánimo de lucro que aplica el design thinking y la investigación UX', mark: true },
            { text: ' para resolver problemas sociales.' },
        ],
    ],

    skillGroups: {
        'Frontend & Design Systems': 'Frontend y design systems',
        'AI & Agents': 'IA y agentes',
        'Tools': 'Herramientas',
    },

    skillItems: {
        'Responsive Design': 'Diseño responsive',
        'AI Agents & Skills': 'Agentes y skills de IA',
        'MCP Servers': 'Servidores MCP',
        'Agentic Workflows': 'Flujos de trabajo agénticos',
        'Unit Testing': 'Tests unitarios',
        'Functional Testing': 'Tests funcionales',
        'Visual Regression': 'Regresión visual',
    },

    work: {
        'work-roiback-2023': {
            description: 'Lidero el rediseño de las herramientas de backoffice de la empresa, gestionando un equipo de desarrolladores y coordinando a los diseñadores de toda la organización.',
        },
        'work-w2m-world2meet-2022': {
            description: 'Medición del comportamiento de los usuarios en los sites de las marcas del grupo. Implantación de los scripts de Treasure Data y User Insider. Planificación y gestión de la CMP y del centro de preferencias de DIDOMI.',
        },
        'work-roiback-2016': {
            description: 'De UX/Front End Lead a Senior Design Engineer. Construí desde cero la web app móvil para los flujos de reserva hotelera y lideré el design system “TALAIOTS”.',
            details: [
                'Entré como Mobile UX Designer y Front-end Supervisor, centrado en optimizar la conversión y en mantener el código front-end escalable y legible.',
                'Diseñé los flujos de tarjeta de fidelización y regalo y de packs regalo para Mobilis, entregados como prototipos interactivos.',
            ],
        },
        'work-yourttoo-com-2014': {
            role: 'CIO / CTO y cofundador',
            description: 'Cofundador, CIO / CTO. Visión técnica y desarrollo de negocio, arquitectura de sistemas, creación y gestión del equipo técnico, diseño de producto y experiencia de usuario.',
            details: [
                'Trabajé en yourttoo.com y OpenMarket.travel. Además de crear y gestionar el equipo técnico, coordiné a los proveedores externos.',
            ],
        },
        'work-accenture-espana-2013': {
            role: 'Consultor IT externo',
            description: 'Supervisor y formador front-end. Optimización del rendimiento web y del embudo de conversión en ecommerce de alto tráfico. Diseñador UI.',
            details: [
                'Contratado a través de Accenture Interactive | Fjord como proveedor de servicios externo.',
            ],
        },
        'work-orizonia-2011': {
            role: 'Diseñador UX/UI, sites B2B y webapps',
            description: 'Experiencia de usuario, diseño centrado en el usuario, usabilidad, diseño UI, design engineering, desarrollo front end, marketing online.',
            details: [
                'Reportaba directamente al responsable de Marketing y Producto, combinando UX, UI, analítica y gestión de proyectos.',
                'Autor de “Orizonia Travel Store” (2012), una propuesta de estrategia UX para las herramientas web de turoperación del grupo, dirigida tanto a agentes de viajes como a viajeros. Elaborada con diseño centrado en el usuario y design thinking: benchmarking de la competencia, cuatro personas con mapas de empatía, un customer journey map, puntos de contacto por canal y un análisis DAFO.',
                'Proponía un comparador de oferta multimarca, fichas de viaje más completas, diseño responsive y contacto con los viajeros antes, durante y después del viaje, junto con una estrategia de contenidos y los primeros diseños de interfaz.',
            ],
        },
        'work-ingamana-2006': {
            role: 'Diseñador web y desarrollador ActionScript',
            description: 'Estudio premiado de diseño y desarrollo interactivo en Buenos Aires. Diseño y desarrollo de aplicaciones web en Flash, HTML, CSS y JavaScript para estudios y marcas internacionales como Bacardi, Adidas, Carte d\'Or, Bic.',
        },
        'work-moveo-imagen-y-sonido-2003': {
            role: 'Cofundador',
            description: 'Producción y postproducción audiovisual. Motion graphics.',
        },
    },

    education: {
        'education-user-experience-design-human-2012': {
            title: 'Diseño de experiencia de usuario | Interacción persona-ordenador',
        },
        'education-image-sound-design-2009': {
            title: 'Diseño de Imagen y Sonido',
            details: [
                'Docente de Medios de Difusión y Marketing en la carrera de Diseño de Imagen y Sonido de la Universidad de Buenos Aires (2009).',
            ],
        },
        'education-graphic-design-2006': {
            title: 'Diseño Gráfico',
            note: 'dos años cursados',
        },
        'education-computer-science-2004': {
            title: 'Ciencias de la Computación',
            note: 'dos años cursados',
        },
    },

    courses: {
        'courses-design-thinking-innovation-2017': { title: 'Design Thinking e Innovación' },
        'courses-technology-based-entrepreneurship-2013': { title: 'Emprendimiento de base tecnológica' },
        'courses-project-management-2010': { title: 'Gestión de proyectos' },
        'courses-information-architecture-2008': { title: 'Arquitectura de la información' },
        'courses-tourism-2-0-and-2011': { title: 'Turismo 2.0 y reputación online' },
        'courses-designing-a-marketing-plan-2011': { title: 'Diseño de un plan de marketing para e-turismo' },
        'courses-analytics-and-measurement-in-2010': { title: 'Analítica y medición en marketing online' },
    },
};
