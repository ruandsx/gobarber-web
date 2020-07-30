import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

// interface convertida em type para somente receber os atributos do butto
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? 'Carregando...' : children}
  </Container>
);

export default Button;
