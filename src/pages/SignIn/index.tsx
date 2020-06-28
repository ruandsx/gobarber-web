import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img alt="GoBarber" src={logo} />

      <form>
        <h1>Faça seu logon</h1>

        <Input icon={FiMail} name="email" placeholder="E-mail" type="text" />

        <Input
          icon={FiLock}
          name="password"
          placeholder="Senha"
          type="password"
        />

        <Button type="submit">Entrar</Button>

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
