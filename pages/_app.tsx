import CssBaseline from '@material-ui/core/CssBaseline';
import { createGlobalStyle } from 'styled-components';

interface AppProps {
  Component: React.ComponentType;
  pageProps: any;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  #__next {
    width: 100%;
    height: 100%;
  }
`;
