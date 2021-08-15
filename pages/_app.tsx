// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Box, createTheme, CssBaseline, GlobalStyles, PaletteOptions, ThemeProvider } from '@material-ui/core';
import { AnimateSharedLayout } from 'framer-motion';

const palette = {
  background: {
    paper: '#002555',
  },
  text: {
    primary: '#ffffff',
    secondary: '#002555',
  },
  primary: {
    main: '#002555',
  },
};

const theme = createTheme({
  typography: {
    fontFamily: [
      '"Bona Nova"',
    ].join(','),
  },
  palette,
  shape: {
    borderRadius: 0,
  },
  shadows: [
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          border: '2px solid',
          background: 'white',
          borderColor: palette.primary.main,
          color: palette.primary.main,
          ":hover": {
            background: palette.background.paper,
            color: 'white',
          }
        }
      }
    }
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'fixed',
          top: '-50vh',
          left: '-50vw',
          width: '200vw',
          height: '200vh',
          zIndex: -1,
          backgroundImage: 'url(/transparent-snail.png)',
          backgroundSize: '100px',
          transform: 'rotate(45deg)',
        }}
      />
      <CssBaseline />
      <AnimateSharedLayout type="crossfade">
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </ThemeProvider>
  );
}

export default MyApp;
