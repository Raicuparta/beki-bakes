// import '../styles/globals.css'
import type { AppProps } from "next/app";
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
  // shadows: [
  //   "none",
  //   "none",
  //   "none",
  //   "none",
  //   "none",
  //   "none",
  //   "none",
  //   "none",
  //   "none",
  //   "none",
  //   "none",
  //   "none",
  //   "none",
  //   "none",
  //   "none",
  //   "none",
  //   "none",
  //   "none",
  //   "none",
  //   "none",
  //   "none",
  //   "none",
  //   "none",
  //   "none",
  //   "none",
  // ],
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {},
        root: {
          ":disabled": {},
        },
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
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
          backgroundSize: "100px",
          bgcolor: "#ecf4ff",
          // TODO: rotate background in source image.
          // transformOrigin: "center",
          // transform: "rotate(45deg)",
        }}
      />
      <CssBaseline />
      <PageHeader />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
