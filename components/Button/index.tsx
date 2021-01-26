import React, { MouseEvent } from 'react';

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
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ children, size, type, onClick, ...props }: ButtonProps) => {
  return (
    <ChakraButton size={size} type={type} onClick={onClick} {...props}>
      {children}
    </ChakraButton>
  );
};

Button.defaultProps = {
  size: 'sm',
  type: 'submit' || 'button' || 'reset'
};

export default Button;
