import { extendTheme, theme as themeBase } from '@chakra-ui/react';

const theme = extendTheme({
  ...themeBase,
  colors: {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac'
    },
    brandSecondary: {
      900: '#fffafa',
      800: '#f5fffb',
      700: '#f8f8ff'
    }
  }
});

export default theme;
