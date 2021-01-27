import { ReactNode, MouseEvent } from 'react';

import { Button as ChakraButton } from '@chakra-ui/react';

enum ButtonTypes {
  'button',
  'submit',
  'reset'
}

type ButtonProps = {
  size?: string;
  type: 'button' | 'submit' | 'reset';
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  ml?: string;
  variant?: string;
  bg?: string;
  p?: string;
  _hover?: any;
  _active?: any;
  fontWeight?: string;
  fontSize?: string;
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
  type: 'button'
};

export default Button;
