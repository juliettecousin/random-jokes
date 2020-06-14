import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Signup extends Component {
    state = {
        email: "",
        password: "",
        verifyPassword: "",
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("WELCOME HOME JOKER");

        console.log("email : ", this.state.email);
        console.log("password : ", this.state.password);
        console.log("verifypassword : ", this.state.verifyPassword);
    };

    handleChange = () => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Control
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                        placeholder="entrez votre email"
                    />
                    <Form.Control
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        placeholder="entrez votre mot de passe"
                    />
                    <Form.Control
                        type="verifypassword"
                        name="verifypassword"
                        onChange={this.handleChange}
                        value={this.state.verifypassword}
                        placeholder="vérifiez votre mot de passe"
                    />
                    <Button variant="primary" type="submit">Connexion</Button>
                </Form>
            </Container>
        ) ;
    };
};

export default Signup;