import React, { Component } from 'react';
import './styles.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
//grid
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
      <Container>
        <Row>
          <Col>
            
            <div>
              {
                this.state.message !== ''? (
                  <Alert variant="danger">{this.state.message}</Alert>
                ) : ''
              }
                <Form className="form-layout" onSubmit={this.signIn}>

                  <div className="form-header">
                    <h1>Bem Vindo</h1>
                    <p>Coloque a logo no local do bem vindo!</p>
                  </div>

                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" onChange={e => this.email = e.target.value} placeholder="Digite seu emai" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" onChange={e => this.password = e.target.value} placeholder="Digite sua senha" />
                  </Form.Group>

                  <Button className="botao" variant="primary" block onClick={this.signIn}>
                    Entrar
                  </Button>

                  <div className="form-footer">
                    <h1>Esqueceu a senha?</h1><a href="#"> Clique aqui</a>
                  </div>
                </Form>
            </div>
          
          </Col>
        </Row>
      </Container>
    );
  }

}