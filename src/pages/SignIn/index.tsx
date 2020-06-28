import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img alt="GoBarber" src={logo} />

      <form>
        <h1>Faça seu logon</h1>

        <input placeholder="E-mail" type="text" />

        <input placeholder="Senha" type="password" />

        <button type="submit">Entrar</button>

        <a href="/forgot">Esqueci minha senha</a>
      </form>

      <a href="/login">
        <FiLogIn />
        Criar Conta
      </a>
    </Content>

    <Background />
  </Container>
);

export default SignIn;
