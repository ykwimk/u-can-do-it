import { createGlobalStyle } from 'styled-components';

interface AppProps {
  Component: React.ComponentType;
  pageProps: any;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body: overflow: hidden;
`;
