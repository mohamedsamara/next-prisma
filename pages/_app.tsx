import React from 'react';

import { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';
import { ChakraProvider, CSSReset, Box } from '@chakra-ui/react';

import theme from '../theme';
import NavBar from '../components/NavBar';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <NavBar />
        <CSSReset />
        <Box p={4}>
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </Provider>
  );
};

export default App;
