import React, { Component } from 'react';
import '../../global.css';
import './Publicacoes.css';

class Publicacoes extends Component {
    render() {
        return (
            <div className="pub-container">
                <div className="row">
                    <h3>Publicações</h3>
                    <div className="container"> 
                        <h5 className="texto">Em breve, você encontrará aqui, em formato PDF, todo o material didático, as partituras e demais publicações do Sinos para download gratuito.</h5>
                    </div>
                </div>
            </div>
        );
    }
  }
  
  export default Publicacoes; 