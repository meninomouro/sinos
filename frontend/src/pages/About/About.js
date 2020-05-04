import React from 'react';
import '../../global.css';
import './About.css';
import {Link} from 'react-router-dom';


function About() {
    return (
      <div className="about container">
        <div className="row">
          <div className="container"> 
            <h3 className="title">O Projeto</h3>
            <h5>Ao longo de um ano, uma rede composta por mais de 250 profissionais de música vai atuar em oficinas, aulas e na preparação de concertos. As atividades se iniciam exclusivamente online, mas em uma segunda etapa, serão levadas presencialmente a diversos pontos do Brasil. O objetivo é capacitar regentes, instrumentistas, compositores e educadores musicais, dando apoio a orquestras jovens ligadas a projetos sociais e instituições de ensino e, também, contribuir para a implantação de orquestras escola em todo o país. O programa Sinos – Sistema Nacional de Orquestras Sociais é uma parceria entre a <a className="link" href="https://www.funarte.gov.br/" target="_blank">Fundação Nacional de Artes – Funarte</a> e a <a className="link" href="https://ufrj.br/" target="_blank">Universidade Federal do Rio de Janeiro - UFRJ</a>.
            <br/>
            <br/>
            <Link className="link" to="/programacao">Confira aqui a programação do Sinos</Link>.</h5>
          </div>
        </div>
        <div className="row">
          <div className="container">
            <h4 className="title">Tudo começa online</h4>
            <h5>Num primeiro momento, o projeto terá como base ações online, com um curso de capacitação para o ensino de instrumento de cordas e oficinas oferecidas de modo virtual. Mais tarde, serão estabelecidos polos em instituições parceiras, mas o Sinos não limitará sua atuação a esses locais, alcançando outros pontos das regiões.</h5>
          </div>
        </div>
        <div className="row">
          <div className="container">
            <h3 className="title">Módulos</h3>
            <h5>As atividades do Sinos são oferecidas cinco módulos: Curso de Capacitação Pedagógica, Projeto Espiral, Projeto Orquestra, Orquestra Conveniada e Festivais.</h5>
            <h4 className="title modulos">Curso de Capacitação Pedagógica</h4>
            <h5 className="modulos">Envolve três equipes de oito professores cada uma. Funciona como um curso de extensão universitária e confere certificado. Tem como público-alvo profissionais que já atuam no ensino de crianças e jovens. Os cursos online e presenciais do módulo Pedagogia no ensino de cordas têm 64 horas de duração. Para mais informações e inscrições, <Link className="link" to="/cadastro">clique aqui</Link>.</h5>
            <h4 className="title modulos">Projeto Espiral</h4>
            <h5 className="modulos">Cursos de capacitação pontual, destinados aos alunos dos projetos sociais de música de orquestra, dos mais variados instrumentos e de todo o Brasil. Grupos de três a seis professores ministram as aulas online e, em um segundo momento, poderão permanecer durante três dias atuando nos diferentes locais. Há opção de oficinas específicas, para determinados instrumentos, mas também é possível gerar um concerto final, aberto ao público. Os interessados devem se <Link className="link" to="/cadastro">cadastrar aqui</Link> e informar as oficinas para que tipos de instrumentos que desejam solicitar.</h5>
            <h4 className="title modulos">Projeto Orquestra</h4>
            <h5 className="modulos">Em formato de “orquestra de festival”, será realizado em cinco cidades e oferece capacitações com a preparação de um concerto. As <Link className="link" to="/cadastro">inscrições estão abertas</Link> para estudantes mais avançados de música e que, depois de aprovados por uma comissão de seleção, terão aulas e farão um trabalho intensivo de uma semana, formando uma nova orquestra e preparando um repertório. Haverá ensaios específicos para naipes de instrumentos e com músicos profissionais convidados e, também, ensaios com toda a orquestra, conduzidos por um regente igualmente convidado. O grande concerto final será aberto ao público.</h5>
            <h4 className="title modulos">Orquestra Conveniada</h4>
            <h5 className="modulos">Durante um ano, serão oferecidos professores, cursos e material didático para demandas específicas – online e, depois, presencialmente. O objetivo é apoiar esses conjuntos para que possam avançar, tanto tecnicamente, quanto em termos de sustentabilidade – com apoio para capacitação na produção de espetáculos, por exemplo. A seleção das orquestras que participarão do projeto será feita levando em conta as justificativas apresentadas por seus responsáveis e, também pela avaliação do impacto que a ação terá na região em que a orquestra atua e em seu potencial para desdobrar suas ações a partir da parceria. <Link className="link" to="/cadastro">Clique aqui para inscrever a sua orquestra</Link>.</h5>
            <h4 className="title modulos">Festivais</h4>
            <h5 className="modulos">Apoio à realização de festivais de música já existentes e desenvolvimento, em parceria, de novos festivais, com foco na atividade orquestral. A UFRJ e parceiros fornecem professores para oficinas, aulas, palestras e recitais (online e presenciais) e, também material didático. Para inscrever o seu festival, <Link className="link" to="/cadastro">clique aqui</Link>.</h5>
          </div>
        </div>
        <div className="row">
          <div className="container">
            <h4 className="title">Parceria Estratégica</h4>
            <h5>Principal fomentadora, promotora e incentivadora governamental de atividades artísticas no país, a <a className="link" href="https://www.funarte.gov.br/" target="_blank">Funarte</a> obtém, com a parceria com a <a className="link" href="https://ufrj.br/" target="_blank">UFRJ</a>, o conhecimento e a capacidade técnica para a execução do projeto Sinos. Uma das principais e mais respeitadas instituições de ensino superior do país, a Universidade – com sua <a className="link" href="http://musica.ufrj.br/" target="_blank">Escola de Música</a> – tem em seu quadro de docentes profissionais especializados não somente em métodos e didática específicos para lidar com alunos, como também para capacitar professores e regentes, estimulando o desenvolvimento pedagógico e artístico das formações orquestrais, por meio de oficinas, palestras e preparação de material didático. 
A intenção é de que, no futuro, o Sinos possa ganhar vida própria e ter continuidade. Por isso é também muito importante que instituições e secretarias de cultura dos vários estados do país participem. 
Se você é gestor de uma dessas instituições ou órgãos públicos e deseja participar do Sinos, <Link className="link" to="/contato">clique aqui</Link>.
</h5>
<br/>
<br/>
<br/>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;
  