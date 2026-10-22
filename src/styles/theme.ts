export const font = {
    sourceFamilies: ['Avenir:100,300,400,700'],
    setBase: 'Avenir',
    sizeBase: '62.5%', // default 10px
    styleBase: 'normal',

    small: '1rem',
    cap: '1.2rem',
    b2: '1.4rem',
    b1: '1.6rem',
    h6: '2rem',
    h5: '2.4rem',
    h4: '3.4rem',
    h3: '4.8rem',
    h2: '6rem',
    h1: '9.6rem',

    bold: '400',
    regular: '300',
    light: '100',

    lhXS: '1', // default titles
    lhS: '1.3',
    lhB: '1.5', // default font body
    lhM: '1.75',
    lhL: '2',

    letterh1: '-.015rem',
    letterh2: '-.005rem',
    letter: '0',
    letterh4: '.025rem',
    letterh6: '.015rem',
    letters2: '.01rem',
    letterb1: '.05em',
    letterb: '.075em',
    letterBtn: '.125em',
};
// Colors
export const colors = {
    // Grises: negro morado muy desaturado. La saturación sube hacia los
    // oscuros, que es donde el ojo percibe el matiz.
    neutral000: 'hsla(285, 20%, 100%, 1)', // #FFFFFF
    neutral050: 'hsla(285, 10%, 97.5%, 1)', // #F9F8F9
    neutral100: 'hsla(285, 8%, 92%, 1)', // #EBE9EC
    neutral200: 'hsla(285, 7%, 82%, 1)', // #D3CED4
    neutral300: 'hsla(285, 6%, 70%, 1)', // #B5AEB7
    neutral400: 'hsla(285, 6%, 58%, 1)', // #978D9A
    neutral500: 'hsla(285, 7%, 46%, 1)', // #796D7E
    neutral600: 'hsla(285, 8%, 36%, 1)', // #5F5463
    neutral700: 'hsla(285, 10%, 26%, 1)', // #463C49
    neutral800: 'hsla(285, 12%, 17%, 1)', // #2E2631
    neutral900: 'hsla(285, 15%, 10%, 1)', // #1B161D
    neutral999: 'hsla(285, 22%, 5%, 1)', // #0E0A10

    transparent000: 'hsla(0, 0%, 100%, 0)',
    transparent999: 'hsla(285, 22%, 5%, 0)',

    neutralOpacity000: 'hsla(0, 0%, 100%, .5)',
    neutralOpacity900: 'hsla(285, 15%, 10%, .5)',
    neutralOpacity999: 'hsla(285, 22%, 5%, .5)',

    // Naranja: acción. main500 es el más claro que aguanta texto claro
    // encima; para texto naranja sobre fondo claro, main700.
    main: '#B44C1B',
    main025: '#FEF8F4',
    main050: '#FDF1E9',
    main100: '#FBDCC8',
    main300: '#F2A06E',
    main500: '#B44C1B',
    main700: '#9A3F15',
    main900: '#4A1F0B',

    ocre050: '#FBF4E6',
    ocre100: '#F4E2BB',
    ocre300: '#E3B86A',
    ocre500: '#8C6418',
    ocre700: '#7A5414',
    ocre900: '#3A2A0E',

    rojo050: '#FCEDEB',
    rojo100: '#F7D2CC',
    rojo300: '#E3806F',
    rojo500: '#B8352A',
    rojo700: '#8E2620',
    rojo900: '#4A1513',

    lila050: '#F4F0F6',
    lila100: '#E4DCE8',

    success: '#5E7330',
    success100: 'hsla(80, 40%, 90%, 1)',
    success300: 'hsla(80, 40%, 70%, 1)',
    success500: '#5E7330',
    success700: 'hsla(80, 40%, 25%, 1)',
    success900: 'hsla(80, 40%, 10%, 1)',

    // Rojo de error separado del rojo de marca, hacia el rosa.
    danger: '#C21F4D',
    danger100: 'hsla(343, 72%, 92%, 1)',
    danger300: 'hsla(343, 72%, 70%, 1)',
    danger500: '#C21F4D',
    danger700: 'hsla(343, 72%, 30%, 1)',
    danger900: 'hsla(343, 72%, 10%, 1)',

    warning: '#E3B86A',
    warning100: '#F4E2BB',
    warning300: '#E3B86A',
    warning500: '#8C6418',
    warning700: '#7A5414',
    warning900: '#3A2A0E',
};

/*
 * Cada sección del CV lleva un papel tintado, un rail algo más intenso y una
 * tinta para sus enlaces, como una impresión risográfica. Las secciones
 * recorren la lista en orden y vuelven a empezar cuando se acaba. Todas las
 * tintas pasan AA como texto sobre su papel.
 */
export const sectionTones = [
    { paper: colors.main050, rail: colors.main100, ink: colors.main700 },
    { paper: colors.rojo050, rail: colors.rojo100, ink: colors.rojo700 },
    { paper: colors.ocre050, rail: colors.ocre100, ink: colors.ocre700 },
    { paper: colors.lila050, rail: colors.lila100, ink: colors.neutral800 },
];

export const layers = {
    zBottom: '-1',
    zBase: '0',
    zBaseTop: '1',
    zBaseup: '100',
    zMediumdown: '499',
    zMedium: '500',
    zMediumup: '501',
    zSuperior: '1000',
    zTop: '1200',
    zModal: '9999',
};

export const opacity = {
    opacity000: '0',
    opacity001: '.01',
    opacity012: '.12',
    opacity016: '.16',
    opacity020: '.2',
    opacity025: '.25',
    opacity030: '.3',
    opacity050: '.5',
    opacity075: '.75',
    opacity100: '1',
};

export const boxShadowRhythm = {
    boxShadow010: '.1rem',
    boxShadow020: '.2rem',
    boxShadow030: '.3rem',
    boxShadow060: '.6rem',
    boxShadow100: '1rem',
    boxShadow120: '1.2rem',
    boxShadow140: '1.4rem',
    boxShadow150: '1.5rem',
    boxShadow190: '1.9rem',
    boxShadow200: '2rem',
    boxShadow280: '2.8rem',
    boxShadow380: '3.8rem',
    boxShadowBaseColor: 'hsl(0, 0%, 0%)',
};

export const boxShadowOpacity = {
    boxShadowopacity000: `hsla(0, 0%, 0%, ${opacity.opacity000})`,
    boxShadowopacity012: `hsla(0, 0%, 0%, ${opacity.opacity012})`,
    boxShadowopacity016: `hsla(0, 0%, 0%, ${opacity.opacity016})`,
    boxShadowopacity020: `hsla(0, 0%, 0%, ${opacity.opacity020})`,
    boxShadowopacity025: `hsla(0, 0%, 0%, ${opacity.opacity025})`,
    boxShadowopacity030: `hsla(0, 0%, 0%, ${opacity.opacity030})`,
    boxShadowopacity075: `hsla(0, 0%, 0%, ${opacity.opacity075})`,
};

export const boxShadow = {
    boxShadow: `0 ${boxShadowRhythm.boxShadow030} ${boxShadowRhythm.boxShadow030}
    ${boxShadowOpacity.boxShadowopacity012}`,

    boxShadow1: `0 0 ${boxShadowRhythm.boxShadow150} 0 ${boxShadowOpacity.boxShadowopacity020}`,

    boxShadowBottom1: `0 ${boxShadowRhythm.boxShadow010} ${boxShadowRhythm.boxShadow030}
    ${boxShadowOpacity.boxShadowopacity012}, 0 ${boxShadowRhythm.boxShadow010}
    ${boxShadowRhythm.boxShadow020} ${boxShadowOpacity.boxShadowopacity025}`,

    boxShadowBottom2: `0 ${boxShadowRhythm.boxShadow030} ${boxShadowRhythm.boxShadow060}
    ${boxShadowOpacity.boxShadowopacity016}, 0 ${boxShadowRhythm.boxShadow030}
    ${boxShadowRhythm.boxShadow060} ${boxShadowOpacity.boxShadowopacity025}`,

    boxShadowBottom3: `0 ${boxShadowRhythm.boxShadow100} ${boxShadowRhythm.boxShadow200}
    ${boxShadowOpacity.boxShadowopacity020}, 0 ${boxShadowRhythm.boxShadow060}
    ${boxShadowRhythm.boxShadow060} ${boxShadowOpacity.boxShadowopacity025}`,

    boxShadowBottom4: `0 ${boxShadowRhythm.boxShadow140} ${boxShadowRhythm.boxShadow280}
    ${boxShadowOpacity.boxShadowopacity025}, 0 ${boxShadowRhythm.boxShadow100}
    ${boxShadowRhythm.boxShadow100} ${boxShadowOpacity.boxShadowopacity020}`,

    boxShadowBottom5: `0 ${boxShadowRhythm.boxShadow190} ${boxShadowRhythm.boxShadow380}
    ${boxShadowOpacity.boxShadowopacity030}, 0 ${boxShadowRhythm.boxShadow150}
    ${boxShadowRhythm.boxShadow120} ${boxShadowOpacity.boxShadowopacity020}`,

    boxShadowTop0: `0 -${boxShadowRhythm.boxShadow030} ${boxShadowRhythm.boxShadow030}
    ${boxShadowOpacity.boxShadowopacity012}`,

    boxShadowTop1: `0 -${boxShadowRhythm.boxShadow010} ${boxShadowRhythm.boxShadow030}
    ${boxShadowOpacity.boxShadowopacity012}, 0 -${boxShadowRhythm.boxShadow010}
    ${boxShadowRhythm.boxShadow020} ${boxShadowOpacity.boxShadowopacity025}`,

    boxShadowTop2: `0 -${boxShadowRhythm.boxShadow030} ${boxShadowRhythm.boxShadow060}
    ${boxShadowOpacity.boxShadowopacity016}, 0 -${boxShadowRhythm.boxShadow030}
    ${boxShadowRhythm.boxShadow060} ${boxShadowOpacity.boxShadowopacity025}`,

    boxShadowTop3: `0 -${boxShadowRhythm.boxShadow100} ${boxShadowRhythm.boxShadow200}
    ${boxShadowOpacity.boxShadowopacity020}, 0 -${boxShadowRhythm.boxShadow060}
    ${boxShadowRhythm.boxShadow060} ${boxShadowOpacity.boxShadowopacity025}`,

    boxShadowTop4: `0 -${boxShadowRhythm.boxShadow140} ${boxShadowRhythm.boxShadow280}
    ${boxShadowOpacity.boxShadowopacity025}, 0 -${boxShadowRhythm.boxShadow100}
    ${boxShadowRhythm.boxShadow100} ${boxShadowOpacity.boxShadowopacity020}`,

    boxShadowTop5: `0 -${boxShadowRhythm.boxShadow190} ${boxShadowRhythm.boxShadow380}
    ${boxShadowOpacity.boxShadowopacity030}, 0 -${boxShadowRhythm.boxShadow150}
    ${boxShadowRhythm.boxShadow120} ${boxShadowOpacity.boxShadowopacity020}`,
};

export const rhythm = {
    r010: '.1rem',
    r025: '.25rem',
    r050: '.5rem',
    r075: '.75rem',
    r100: '1rem',
    r150: '1.5rem',
    r200: '2rem',
    r300: '3rem',
    r400: '4rem',
    r600: '6rem',
    r800: '8rem',
    r1000: '10rem',
    r1200: '12rem',
    r1600: '16rem',
    r2000: '20rem',
    r2500: '25rem',
};

export const animationTime = {
    animationTimeS: '300ms',
    animationTimeM: '500ms',
    animationTimeL: '700ms',
};

export const borders = {
    borderS: '.1rem',
    borderM: '.2rem',
    borderL: '.4rem',
};

export const formColors = {
    formFieldBackgorund: colors.neutral000,
    formLabelColor: colors.neutral500,
    formFieldColor: colors.neutral800,
    formFieldColorFocus: colors.neutral800,
};

export const formSettings = {
    formFieldBorderRadius: '0',
    formFieldBorder: `${borders.borderS} solid ${formColors.formFieldColor}`,
    formFieldBorderFocus: `${borders.borderM} solid ${formColors.formFieldColorFocus}`,
    formFieldRound: rhythm.r050,
};

export const form = {
    ...formColors,
    ...formSettings,
};

export const icons = {
    iconDefaultSize: '4.4rem',
    iconsSizeXXS: '1rem',
    iconsSizeXS: '1.4rem',
    iconsSizeS: '1.6rem',
    iconsSizeB: '1.8rem',
    iconsSizeM: '2rem',
    iconsSizeMM: '2.4rem',
    iconsSizeML: '2.8rem',
    iconsSizeL: '3.6rem',
};

export const images = {
    imageCardSize: '8rem',
    imageThumbSize: '14rem',
    imageBackgroundSize: '24rem',
    imageBGOverlay: `${colors.neutralOpacity999}`,
    imageBGradientTop: `linear-gradient(to top, ${colors.transparent999}, ${colors.neutralOpacity900})`,
    imageBGradientBottom: `linear-gradient(to bottom, ${colors.transparent999}, ${colors.neutralOpacity900})`,
};

export const base = {
    round: '2.5rem',
    roundedCard: '0',
    /* Icon in button defaut size */
    /* text shadow default fallback for tex over images */
    textShadow: `0 .1rem .3rem ${boxShadowOpacity.boxShadowopacity025}`,


    /* DON'T DELETE  optional variables [start] */
    /* Typos */
    // fontSetTitle: 'Playfair Display, serif;',
    /* Colors */
    colorBg: colors.neutral050,
    colorText: colors.neutral700,
    // neutral500 no llega a 4,5:1 sobre los papeles tintados de las secciones.
    colorTextSecondary: colors.neutral600,
    colorLink: colors.main700,
    colorOver: colors.rojo700,
    colorVisited: colors.main700,
    /* buttons */
    // buttonPrimaryTextColor: colors.neutral000,
    // buttonSecondaryTextColor: colors.colorMid,
    // buttonPrimaryBgColor: colors.colorMain,
    // buttonSecondaryBgColor: colors.neutral000,
    // buttonPrimaryBorder: 0,
    // buttonSecondaryBorder: `1px solid ${colors.colorAlmostLight}`
    // buttonTextTransform: `1px solid ${colors.colorAlmostLight}`
    // outline: `1px solid ${colors.neutral500}`,
    // outlineDark: `1px solid ${colors.neutral200}`,
    // outlineLight: `1px solid ${colors.neutral200}`,
    /* DON'T DELETE  optional variables [end] */
    outline: 'none',
    lhField: icons.iconDefaultSize,
};

const themeDefault = {
    ...font,
    ...colors,
    ...layers,
    ...opacity,
    ...animationTime,
    ...boxShadow,
    ...rhythm,
    ...borders,
    ...form,
    ...icons,
    ...images,
    ...base,
    sectionTones,
};

export type Theme = typeof themeDefault;

export default themeDefault;
