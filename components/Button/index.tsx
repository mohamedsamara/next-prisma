import React from 'react';

import { Button as ChakraButton } from '@chakra-ui/react';

enum ButtonTypes {
  'button',
  'submit',
  'reset'
}

type ButtonProps = {
  size?: string;
  type: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
};

const Button = ({ children, size, type, ...props }: ButtonProps) => {
  return (
    <ChakraButton size={size} type={type} {...props}>
      {children}
    </ChakraButton>
  );
};

Button.defaultProps = {
  size: 'sm',
  type: 'submit' || 'button' || 'reset'
};

export default Button;
