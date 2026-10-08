import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global.styles';
import theme from '../styles/theme';
import Chat from '../components/Chat/Chat';
import { toLocale } from '../content/i18n';

export default function App({ Component, pageProps, router }) {

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle theme={theme}/>
            <Component {...pageProps} />
            <Chat locale={toLocale(router.locale)} />
        </ThemeProvider>
    )
}
