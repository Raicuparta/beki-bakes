// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';

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
  },
  //@ts-ignore
  shadows: []
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
