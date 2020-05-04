import React, { Component, useState } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import {Link} from 'react-router-dom';
import api from '../../services/api'
import '../../global.css';
import './Login.css';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    async function handleSubmit(event) {
      event.preventDefault();

      try{
        const response = await api.post('sessions', { email, password })
        console.log(response.status)
        alert("Login efetuado com sucesso!")
        
        } catch(err){
        console.log(err, 401)
        alert('Falha no login')
        }
    }
  
    return (
        <div className="container">
            <h3 className="center-align main">Login</h3>
            <div className="Login">
                <form onSubmit={handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                    <FormLabel>Email</FormLabel>
                    <FormControl
                    autoFocus
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <FormLabel>Senha</FormLabel>
                    <FormControl
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    />
                </FormGroup>
                <Button block bsSize="large" disabled={!validateForm()} type="submit">
                    Login
                </Button>
                </form>
                <div className="cadastro">
                    <h6>Ainda não é cadastrado? <Link className="link" to="/cadastro">Clique aqui</Link>.</h6>     
                </div>
            </div>
        </div>
    );
  }