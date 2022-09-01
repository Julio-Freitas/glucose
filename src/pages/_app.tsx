import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/global-style";
import ligth from "../styles/themes/ligth";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ligth}>

      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
