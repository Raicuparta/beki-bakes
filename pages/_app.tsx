// import '../styles/globals.css'
import type { AppProps } from "next/app";
import Script from "next/script";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { PageHeader } from "../components";

const palette = {
  background: {
    paper: "#002555",
    light: "#ffffff",
  },
  text: {
    primary: "#ffffff",
    secondary: "#002555",
  },
  primary: {
    main: "#002555",
  },
  action: {
    disabled: "#002555",
    disabledBackground: "#ffffff",
  },
} as const;

const theme = createTheme({
  typography: {
    fontFamily: ['"Bona Nova"', '"Times New Roman"', "Times", "serif"].join(
      ","
    ),
  },
  palette,
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {},
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-CL1EH1XVGH"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-CL1EH1XVGH');
        `}
      </Script>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: -1,
            backgroundImage: "url(/transparent-snail.png)",
            backgroundSize: "80px",
            overflowY: "scroll",
          }}
        />
        <CssBaseline />
        <PageHeader />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
