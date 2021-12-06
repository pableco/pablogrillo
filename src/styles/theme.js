export const font = {
    sourceFamilies: ['Yantramanav:100,300,400,700'],
    setBase: 'Yantramanav',
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
    neutral000: 'hsla(0, 0%, 100%, 1)', // #fff
    neutral050: 'hsla(0, 0%, 97.4%, 1)', // #f8f8f8
    neutral100: 'hsla(0, 0%, 90%, 1)', // #e6e6e6
    neutral200: 'hsla(0, 0%, 80%, 1)', // #cccccc
    neutral300: 'hsla(0, 0%, 70%, 1)', // #b3b3b3
    neutral400: 'hsla(0, 0%, 60%, 1)', // #999999
    neutral500: 'hsla(0, 0%, 50%, 1)', // #808080
    neutral600: 'hsla(0, 0%, 40%, 1)', // #666666
    neutral700: 'hsla(0, 0%, 30%, 1)', // #4d4d4d
    neutral800: 'hsla(0, 0%, 20%, 1)', // #333333
    neutral900: 'hsla(0, 0%, 10%, 1)', // #1a1a1a
    neutral999: 'hsla(0, 0%, 0%, 1)', // #000

    transparent000: 'hsla(0, 0%, 100%, 0)',
    transparent999: 'hsla(0, 0%, 0%, 0)',

    neutralOpacity000: 'hsla(0, 0%, 100%, .5)',
    neutralOpacity900: 'hsla(0, 0%, 10%, .5)',
    neutralOpacity999: 'hsla(0, 0%, 0%, .5)',

    main: 'hsla(230, 95%, 54%, 1)',
    main025: 'hsla(230, 95%, 98%, 1)',
    main050: 'hsla(230, 95%, 95%, 1)',
    main100: 'hsla(230, 95%, 90%, 1)',
    main300: 'hsla(230, 95%, 70%, 1)',
    main500: 'hsla(230, 95%, 50%, 1)',
    main700: 'hsla(230, 95%, 30%, 1)',
    main900: 'hsla(230, 95%, 10%, 1)',

    success: 'hsla(84, 50%, 45%, 1)',
    success100: 'hsla(84, 50%, 90%, 1)',
    success300: 'hsla(84, 50%, 70%, 1)',
    success500: 'hsla(84, 50%, 50%, 1)',
    success700: 'hsla(84, 50%, 30%, 1)',
    success900: 'hsla(84, 50%, 10%, 1)',

    danger: 'hsla(4, 60%, 50%, 1)',
    danger100: 'hsla(4, 60%, 90%, 1)',
    danger300: 'hsla(4, 60%, 70%, 1)',
    danger500: 'hsla(4, 60%, 50%, 1)',
    danger700: 'hsla(4, 60%, 30%, 1)',
    danger900: 'hsla(4, 60%, 10%, 1)',

    warning: 'hsla(54, 100%, 67%, 1)',
    warning100: 'hsla(54, 100%, 90%, 1)',
    warning300: 'hsla(54, 100%, 70%, 1)',
    warning500: 'hsla(54, 100%, 50%, 1)',
    warning700: 'hsla(54, 100%, 30%, 1)',
    warning900: 'hsla(54, 100%, 10%, 1)',
};

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
    formFieldBorder: `${borders.borderWidthS} solid ${formColors.formFieldColor}`,
    formFieldBorderFocus: `${borders.borderWidthM} solid ${formColors.formFieldColorFocus}`,
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
    imageBGradientTop: `linear-gradient(to top, ${colors.neutralTransparent999}, ${colors.neutralOpacity900})`,
    imageBGradientBottom: `linear-gradient(to bottom, ${colors.neutralTransparent999}, ${colors.neutralOpacity900})`,
};

export const base = {
    round: '2.5rem',
    roundedCard: '0',
    /* Icon in button defaut size */
    /* text shadow default fallback for tex over images */
    textShadow: `0 .1rem .3rem ${boxShadowOpacity.boxShadowOpacity025}`,


    /* DON'T DELETE  optional variables [start] */
    /* Typos */
    // fontSetTitle: 'Playfair Display, serif;',
    /* Colors */
    colorBg: colors.neutral050,
    colorText: colors.neutral900,
    colorLink: colors.neutral900,
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
};

export default themeDefault;
