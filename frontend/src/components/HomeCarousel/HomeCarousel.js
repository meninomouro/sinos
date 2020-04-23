import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../../global.css';
import './HomeCarousel.css';
 
class HomeCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={Img1} />
                    <h5 className="legend">Bem-vindo ao site do Sinos!
                    <br/>
                    O Sinos é um programa com atividades online e presenciais, que capacita professores e músicos em projetos sociais e instituições de ensino, promovendo a formação de novas orquestras e concertos em diversos pontos do país. </h5>
                </div>
                <div>
                    <img src={Img2} />
                    <h5 className="legend">Bem-vindo ao site do Sinos!
                    <br/>
                    O Sinos é um programa com atividades online e presenciais, que capacita professores e músicos em projetos sociais e instituições de ensino, promovendo a formação de novas orquestras e concertos em diversos pontos do país. </h5>
                </div>
                <div>
                    <img src={Img3} />
                    <h5 className="legend">Bem-vindo ao site do Sinos!
                    <br/>
                    O Sinos é um programa com atividades online e presenciais, que capacita professores e músicos em projetos sociais e instituições de ensino, promovendo a formação de novas orquestras e concertos em diversos pontos do país. </h5>
                </div>
            </Carousel>
        );
    }
};
 
export default HomeCarousel; 
