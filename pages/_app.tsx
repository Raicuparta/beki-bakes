// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';

const theme = createTheme({
  palette: {
    background: {
      default: '#e4fffe',
      paper: '#ffffff',
    },
    text: {
      secondary: '#276777',
    }
  },
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
