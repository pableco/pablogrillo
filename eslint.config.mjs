import next from 'eslint-config-next/core-web-vitals';

/**
 * Flat config (ESLint 9). Sustituye a .eslintrc.json, que ESLint 9 ya no lee,
 * y a `next lint`, eliminado en Next 16.
 */
const config = [
    {
        ignores: [
            '.next/**',
            'node_modules/**',
            'public/**',
        ],
    },
    ...next,
];

export default config;
