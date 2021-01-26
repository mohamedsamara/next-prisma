import React from 'react';

import { Box, Stack } from '@chakra-ui/react';
import { signIn, signOut, useSession } from 'next-auth/client';

import Button from '../Button';

import MenuItem from './MenuItem';
const MenuLinks = ({ isOpen }) => {
  const [session, loading] = useSession();

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
        <MenuItem to='/posts'>Blog</MenuItem>
        {
          session ? (
            <Button
              onClick={() => signOut()}
              variant='ghost'
              fontWeight='normal'
              fontSize='md'
              bg='transparent'
              p='0'
              _hover={{ bg: 'transparent' }}
              _active={{
                bg: 'transparent'
              }}
            >
              Sign out
            </Button>
          ) : (
            <Button
              onClick={() => signIn()}
              variant='ghost'
              fontWeight='normal'
              fontSize='md'
              bg='transparent'
              p='0'
              _hover={{ bg: 'transparent' }}
              _active={{
                bg: 'transparent'
              }}
            >
              Sign In
            </Button>
          )

          // <MenuItem to='/api/auth/signin'>Sign In</MenuItem>
        }
      </Stack>
    </Box>
  );
};

export default MenuLinks;
