import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const basicTheme = createTheme({
    palette: {
        primary: {
            main: '#00bcd4',
        },
        secondary: {
            main: '#f50057',
        },
        error: {
            main: '#f50057',
        },
        mode: 'light',
    },
    typography: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
    },
    
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={basicTheme}>
          <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
