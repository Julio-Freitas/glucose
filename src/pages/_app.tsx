import { AlertProvider } from "context/alert/context";
import { ListProvider } from "context/list/contextList";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/global-style";
import ligth from "../styles/themes/ligth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ligth}>
      <ListProvider>
      <AlertProvider>
        <Component {...pageProps} />
        </AlertProvider>
      </ListProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
