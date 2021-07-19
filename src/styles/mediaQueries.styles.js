export const size = {
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    tablet: 768,
    laptop: 1024,
    laptopL: 1440,
    desktop: 2560,
};

export default {
    phones: 'only screen and (max-width: 479px)',
    phonesLargeW: 'only screen and (min-width: 375px)',
    phonesLargeH: 'only screen and (min-height: 668px)', // one pixel more than iphone6
    tablets: 'only screen and (min-width: 768px) and (max-width: 959px)',
    iphone4: 'all and (device-width: 320px) and (device-height: 480px)',
    iphone5: 'all and (device-width: 320px) and (device-height: 568px)',

    /* iphone 6, 7, 8 */
    iphone678: `only screen and (device-width : 375px)
    and (device-height : 667px)
    and (-webkit-device-pixel-ratio : 2)`,

    /* iphone 6+, 7+, 8+ */
    iphone678p: `only screen and (device-width : 414px)
    and (device-height : 736px)
    and (-webkit-device-pixel-ratio : 3)`,

    /* iphone X */
    iphoneX: `only screen and (device-width : 375px)
    and (device-height : 812px)
    and (-webkit-device-pixel-ratio : 3)`,

    // ipad: `all and (device-width: 768px)
    // and (device-height: 1024px)`,

    // ipadPortrait: `all and (device-width: 768px) and
    // (device-height: 1024px) and (orientation:portrait)`,

    // ipadLandscape: `all and (device-width: 768px) and
    // (device-height: 1024px) and (orientation:landscape)`
    mobileS: `(min-width: ${size.mobileS}px)`,
    mobileM: `(min-width: ${size.mobileM}px)`,
    mobileL: `(min-width: ${size.mobileL}px)`,
    tablet: `(min-width: ${size.tablet}px)`,
    laptop: `(min-width: ${size.laptop}px)`,
    laptopL: `(min-width: ${size.laptopL}px)`,
    desktop: `(min-width: ${size.desktop}px)`,
    desktopL: `(min-width: ${size.desktop}px)`,
};


