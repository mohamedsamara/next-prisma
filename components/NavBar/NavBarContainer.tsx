import { Flex } from '@chakra-ui/react';

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      w='100%'
      mb={8}
      p={['4', '4', '8', '8']}
      bg='gray.700'
      color={['white', 'white', 'primary.700', 'primary.700']}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBarContainer;
