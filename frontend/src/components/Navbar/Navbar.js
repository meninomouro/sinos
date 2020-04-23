import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom';
import '../../global.css';
import './Navbar.css';
import logonav from '../../assets/logo-nav.png';

class Navbar extends Component {
    render() {
        return (
            <nav className="navBar">
                <Link to="/">
                <img src={logonav} alt="Logo" className="brand-logo"/>
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/about/">O Projeto</NavLink></li>
                    <li><NavLink to="/programacao/">Programação</NavLink></li>
                    <li><NavLink to="/publicacoes/">Publicações</NavLink></li>
                    <li><NavLink to="/noticias/">Notícias</NavLink></li>
                    <li><NavLink to="/multimidia/">Multimídia</NavLink></li>
                    <li><NavLink to="/parcerias/">Parcerias</NavLink></li>
                    <li><NavLink to="/contato/">Contato</NavLink></li>
                    <li><NavLink to="/login/">Login</NavLink></li>             
                </ul>
            </nav>
            
        );
    }
  }
  
  export default Navbar; 