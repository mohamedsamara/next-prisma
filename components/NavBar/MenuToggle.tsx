import React from 'react';

import { Box } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { ChevronDownIcon, CloseIcon } from '@chakra-ui/icons';

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? (
        <IconButton
          aria-label='Close menu'
          bg='transparent'
          _hover={{ bg: 'transparent' }}
          _active={{
            bg: 'transparent'
          }}
          icon={<CloseIcon />}
        />
      ) : (
        <IconButton
          aria-label='Open menu'
          bg='transparent'
          _hover={{ bg: 'transparent' }}
          _active={{
            bg: 'transparent'
          }}
          icon={<ChevronDownIcon w={6} h={6} />}
        />
      )}
    </Box>
  );
};

export default MenuToggle;
