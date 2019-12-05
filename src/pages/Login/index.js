import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Icon, Input, Button, Alert } from 'antd';

import { Container } from './styles';

const Login = () => (
  <>
  <Container>
    <img draggable={false} src={require('../../assets/img/Logo.svg')} alt=""/>
    <h1>Seja bem vindo!</h1>
    <p>Faça login para acessar a sua conta</p>
    <Form >
      <Form.Item label="e-mail" htmlFor="email">
        <Input
          prefix={<Icon type="user" />}
          placeholder="Digite seu email"
          name="email"
          id="email"
        />
      </Form.Item>
      <Form.Item label="senha" htmlFor="password">
        <Input
          prefix={<Icon type="lock" />}
          type="password"
          placeholder="Digite sua senha"
          name="password"
          id="password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Entrar
        </Button>
        <Link to="#">
          Esqueci a senha
        </Link>
      </Form.Item>
    </Form>
    <div>
      <small>&copy; ano projeto &middot; Todos os direitos reservados.</small>
    </div>
  </Container>
</>
);

export default Login;
