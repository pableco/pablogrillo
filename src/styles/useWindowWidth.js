import { useState, useEffect } from 'react';

import { size } from './mediaQueries.styles';

const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    const breakpoints = {
        width,
        isWatch: width < size.mobileS,
        isMobileS: width < size.mobileM,
        isMobileM: width < size.mobileL,
        isMobileL: width < size.tablet,
        isTablet: width < size.laptop,
        isLaptop: width < size.laptopL,
        isLaptopL: width < size.desktop,
        isDesktop: width >= size.desktop,
    };

    return breakpoints;
};

module.exports = {
    useWindowWidth,
};
