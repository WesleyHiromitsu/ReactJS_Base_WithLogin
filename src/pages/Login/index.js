import React, { Component } from 'react';
import './styles.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

export default class Login extends Component {
  constructor(props) {
    super(props)
    console.log(this.props);
    this.state = {
      message: this.props.location.state?this.props.location.state.message: '',
    }
  }

  signIn = () => {
    const data = {email: this.email, password: this.password};
    const requestInfo = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type' : 'application/json'
      }),
    }
    
    //colocar a api dentro do fetch
    fetch('', requestInfo)
      .then(response => {
        if(response.ok) {
          return response.json()
        }
        throw new Error("Login inválido");
      })
      .then(token => {
        localStorage.setItem('token', token);
        this.props.history.push("/home")
        return;

      })
      .catch(e => {
        this.setState({ message: e.message })
      });
  }

  render(){
    return (
      <div className="centralize">
        <Container>
        {
          this.state.message !== ''? (
            <Alert variant="danger">{this.state.message}</Alert>
          ) : ''
        }
          <Form onSubmit={this.signIn}>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" onChange={e => this.email = e.target.value} placeholder="Digite seu emai" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" onChange={e => this.password = e.target.value} placeholder="Digite sua senha" />
            </Form.Group>

            <Button variant="primary" block onClick={this.signIn}>
              Entrar
            </Button>

          </Form>
        </Container>
      </div>
    );
  }

}
