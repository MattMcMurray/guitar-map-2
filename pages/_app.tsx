import { ThemeProvider } from "@material-ui/core";
import React from "react";
import "styles/globals.css";
import { lightTheme } from "util/Theme";

interface Props {
  Component: any;
  pageProps: any;
}

function MyApp({ Component, pageProps }: Props) {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
