import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global.styles';
import theme from '../styles/theme';
import Chat from '../components/Chat/Chat';

export default function App({ Component, pageProps }) {

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle theme={theme}/>
            <Component {...pageProps} />
            <Chat />
        </ThemeProvider>
    )
}
