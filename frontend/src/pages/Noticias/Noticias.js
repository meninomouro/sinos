import React, { Component } from 'react';
import '../../global.css';
import './Noticias.css';

class Noticias extends Component {
    render() {
        return (
            <div className="not-container">
                <div className="row">
                    <h3>Notícias</h3>
                    <div className="container"> 
                        <h5 className="texto">Fique por dentro de tudo o que acontece no Sinos e saiba também das novidades que vêm por aí. Em breve.</h5>
                    </div>
                </div>
            </div>
        );
    }
  }
  
  export default Noticias; 