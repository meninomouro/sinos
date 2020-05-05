import React, { useState } from 'react';
import '../../global.css';
import './Home.css';
import api from '../../services/api'
import {Link} from 'react-router-dom';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';
import HomeCalendar from '../../components/HomeCalendar/HomeCalendar';

function Home() {
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
    <div className="home-container">
      <div className="row">
        <HomeCarousel/>
        <div className="red">
            <div className="text">
              <h5 className="login">FAÇA LOGIN</h5>
              <p className="acesso">Tenha acesso às aulas virtuais
              <br/>
              e painel do estudante</p>
              <form onSubmit={handleSubmit}>
                <FormGroup className="field" controlId="email" bsSize="large">
                    <FormControl
                    autoFocus
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                </FormGroup>
                <FormGroup className="field" controlId="password" bsSize="large">
                    <FormControl
                    placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    />
                </FormGroup>
                <Button block bsSize="large" disabled={!validateForm()} type="submit">
                <svg class="bi bi-arrow-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"/>
                  <path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"/>
                </svg>
                </Button>
              </form>
              <div>
                  <h6 className="cadastro">Ainda não é cadastrado? <Link className="link link-cadastro" to="/cadastro">Clique aqui</Link>.</h6>     
              </div>
            </div>
        </div>
      </div>
      <div className="row">
        <HomeCalendar />
        <div className="eventlist">

        </div>
      </div>
    </div>
  );
}

export default Home;
