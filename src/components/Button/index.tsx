import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

// interface convertida em type para somente receber os atributos do butto
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
