import React from 'react';

import { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ChakraProvider, CSSReset, Container } from '@chakra-ui/react';

import theme from '../theme';
import NavBar from '../components/NavBar';

const queryClient = new QueryClient();

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ChakraProvider theme={theme}>
            <NavBar />
            <CSSReset />
            <Container mb={12}>
              <Component {...pageProps} />
            </Container>
          </ChakraProvider>
        </Hydrate>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
