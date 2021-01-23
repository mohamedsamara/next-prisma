import React from 'react';

import { AppProps } from 'next/app';
import Header from 'next/head';

import { ThemeProvider, CSSReset, Box } from '@chakra-ui/react';

import theme from '../theme';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Header>Index</Header>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Box p={4}>
          <Component {...pageProps} />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
