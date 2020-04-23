import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import '../../global.css';
import './Navbar.css';
import logonav from '../../assets/logo-nav.png';

class NavBar extends Component {
    render() {
        return (
            <>
            <Navbar>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink className="link" to="/about/">O PROJETO</NavLink></li>
                        <li><NavLink className="link" to="/programacao/">PROGRAMAÇÃO</NavLink></li>
                        <li><NavLink className="link" to="/publicacoes/">PUBLICAÇÕES</NavLink></li>
                        <li><NavLink className="link" to="/noticias/">NOTÍCIAS</NavLink></li>
                        <li><NavLink className="link" to="/multimidia/">MULTIMÍDIA</NavLink></li>
                        <li><NavLink className="link" to="/parcerias/">PARCERIAS</NavLink></li>
                        <li><NavLink className="link" to="/contato/">CONTATO</NavLink></li>
                        <li><NavLink className="link" to="/login/">LOGIN</NavLink></li>             
                    </ul>
                    </Nav>
                </Navbar.Collapse>
                <Link to="/" className="logo">
                <img src={logonav} alt="Logo" className="brand-logo"/>
                </Link>
            </Navbar>
            </>

            
        );
    }
  }
  
  export default NavBar; 