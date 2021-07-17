// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { AnimateSharedLayout } from 'framer-motion';

const theme = createTheme({
  typography: {
    fontFamily: [
      '"Bona Nova"',
    ].join(','),
  },
  palette: {
    background: {
      paper: '#002555',
    },
    text: {
      primary: 'white',
      secondary: '#002555',
    },
    primary: {
      main: '#002555',
    }
  },
  shape: {
    borderRadius: 0,
  },
  //@ts-ignore
  shadows: []
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </ThemeProvider>
  );
}

export default MyApp;
