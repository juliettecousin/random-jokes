import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Form      from 'react-bootstrap/Form';
import Button    from 'react-bootstrap/Button';

class Signup extends Component {
    state = {
        email: "",
        password: "",
        verifyPassword: "",
    }

    handleSubmit = (event) => {
        event.preventDefault();

        console.log("email : ",          this.state.email);
        console.log("password : ",       this.state.password);
        console.log("verifyPassword : ", this.state.verifyPassword);
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit} >
                    <Form.Control
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                        placeholder="Ton adresse"
                    />
                    <Form.Control
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        placeholder="Ton mot de passe"
                    />
                    <Form.Control
                        type="password"
                        name="verifyPassword"
                        onChange={this.handleChange}
                        value={this.state.verifyPassword}
                        placeholder="Retape ton mot de passe"
                    />
                    <Button variant="primary" type="submit">Inscription</Button>
                </Form>
            </Container>
        )
    }
}

export default Signup;