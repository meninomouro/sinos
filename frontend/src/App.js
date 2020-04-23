import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './global.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Programacao from './pages/Programacao/Programacao';
import Publicacoes from './pages/Publicacoes/Publicacoes';
import Noticias from './pages/Noticias/Noticias';
import Multimidia from './pages/Multimidia/Multimidia';
import Parcerias from './pages/Parcerias/Parcerias';
import Contato from './pages/Contato/Contato';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';

  class App extends Component {
    render() {
        return (
          <BrowserRouter>
          <div className="App">
            <Navbar/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/programacao" component={Programacao}/>
              <Route path="/publicacoes" component={Publicacoes}/>
              <Route path="/noticias" component={Noticias}/>
              <Route path="/multimidia" component={Multimidia}/>
              <Route path="/parcerias" component={Parcerias}/>
              <Route path="/contato" component={Contato}/>
              <Route path="/login" component={Login}/>
              <Route path="/cadastro" component={Cadastro}/>
            </Switch>
          </div>
          </BrowserRouter>
        );
      }
  }

  export default App;