import 'styled-components';
import type { Theme } from '../styles/theme';

/**
 * Gives `${({ theme }) => theme.xxx}` real types and autocomplete in any
 * styled-components usage inside a .ts/.tsx file. Plain .js style files
 * (layout.styles.js, text.styles.js, ...) are unaffected — they aren't
 * type-checked (allowJs without checkJs).
 */
declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
