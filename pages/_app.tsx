import React from 'react';

import { AppProps } from 'next/app';
import Header from 'next/head';

import { ChakraProvider, CSSReset, Box } from '@chakra-ui/react';

import theme from '../theme';
import NavBar from '../components/NavBar';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <NavBar />
        <CSSReset />
        <Box p={4}>
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </>
  );
};

export default App;
