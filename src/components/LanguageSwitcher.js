import Link from 'next/link';
import { LanguageNavCss } from './layout.styles';
import { getStrings, languageNames, locales } from '../content/i18n';

/**
 * Enlaces a la portada en cada idioma. Son enlaces y no un `<select>` a
 * propósito: los rastreadores los siguen, funcionan sin JavaScript y cada
 * uno se anuncia en su propio idioma (`lang`) para los lectores de pantalla.
 * El idioma activo no enlaza a ninguna parte: se marca con `aria-current`.
 */
export default function LanguageSwitcher({ locale }) {
    return (
        <LanguageNavCss aria-label={getStrings(locale).languageNav}>
            <ul>
                {locales.map((option) => (
                    <li key={option}>
                        {option === locale ? (
                            <span lang={option} title={languageNames[option]} aria-current="page">
                                {option}
                            </span>
                        ) : (
                            <Link
                                href="/"
                                locale={option}
                                lang={option}
                                hrefLang={option}
                                title={languageNames[option]}
                                aria-label={languageNames[option]}
                            >
                                {option}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </LanguageNavCss>
    );
}
