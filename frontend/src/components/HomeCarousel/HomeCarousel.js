import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../../global.css';
import './HomeCarousel.css';
import Img from '../../assets/noticia-destaque.jpg';
 
class HomeCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img className="img" src={Img}/>
                    <h5 className="legend">BEM-VINDO AO SITE DO SINOS!
                    <br/>
                    <br/>
                    <br/>
                    <span className="text">O Sinos é um programa com atividades online e presenciais, que capacita professores e músicos em projetos sociais e instituições de ensino, promovendo a formação de novas orquestras e concertos em diversos pontos do país</span>. </h5>
                </div>
            </Carousel>
        );
    }
};
 
export default HomeCarousel; 
