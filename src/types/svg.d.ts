/**
 * `next.config.js` loads .svg imports through @svgr/webpack, turning each
 * one into a React component instead of a URL string. Without this, any
 * .ts/.tsx file importing an .svg (see src/icons/index.js) fails to typecheck.
 */
declare module '*.svg' {
    import type { FC, SVGProps } from 'react';

    const Component: FC<SVGProps<SVGSVGElement>>;
    export default Component;
}
