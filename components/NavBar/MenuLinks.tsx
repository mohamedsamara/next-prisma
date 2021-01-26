import React from 'react';

import { Box, Stack } from '@chakra-ui/react';
import { signIn, signOut, useSession } from 'next-auth/client';

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
        <MenuItem to='/'>Home</MenuItem>
        <MenuItem to='/api/auth/signin'>Sign In</MenuItem>
        <MenuItem to='/posts'>Blog</MenuItem>
      </Stack>
    </Box>
  );
};

export default MenuLinks;
