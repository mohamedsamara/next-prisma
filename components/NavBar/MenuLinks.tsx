import React from 'react';

import { Box, Stack } from '@chakra-ui/react';

import MenuItem from './MenuItem';

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align='center'
        justify={['center', 'center', 'flex-end', 'flex-end']}
        direction={['column', 'column', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to='/login'>Log In</MenuItem>
        <MenuItem to='/signup'>Sign Up</MenuItem>
        <MenuItem to='/blog'>Blog</MenuItem>
      </Stack>
    </Box>
  );
};

export default MenuLinks;
