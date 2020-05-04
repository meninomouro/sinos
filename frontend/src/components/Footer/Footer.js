import React, { Component } from 'react';
import '../../global.css';
import './Footer.css';
import Funarte from '../../assets/funarte.svg';
import UFRJ from '../../assets/ufrj.png';

class Footer extends Component {
    render() {
        return (
            <div className="footer container">
                <div className="bloco">
                    <h5 className="copyright center">© 2020 Copyright Sinos - Todos os Direitos Reservados.</h5>
                    <div className="apoio">
                        <h2 className="center">Apoio</h2>
                        <a className="funarte" href="https://www.funarte.gov.br/" target="_blank">
                            <img src={Funarte} alt="Logo" className="brand-logo funarte-logo"/>
                        </a>
                        <a className="ufrj" href="https://ufrj.br/" target="_blank">
                            <img src={UFRJ} alt="Logo" className="brand-logo ufrj-logo"/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
  }
  
  export default Footer; 