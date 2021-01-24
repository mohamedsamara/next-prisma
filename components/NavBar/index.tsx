import React, { useState } from 'react';

import NavBarContainer from './NavBarContainer';
import MenuToggle from './MenuToggle';
import MenuLinks from './MenuLinks';
import Logo from './Logo';

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo
        w='200px'
        color={['white', 'white', 'primary.500', 'primary.500']}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

export default NavBar;
