import React, { Component } from 'react';
import Calendar from 'react-calendar';
import {Link} from 'react-router-dom';
import '../../global.css';
import './HomeCalendar.css';

export default class HomeCalendar extends Component {

  render() {

    return (
      <div className="calendar">
        <header>
          <h1>NOSSA PROGRAMAÇÃO</h1>
        </header>
        <div className="calendar-container">
          <main className="calendar-content">
            <Calendar/>
            <Link to="/programacao" className="proglink">programação completa</Link>
          </main>
        </div>
        <div className="bloco-legenda">
          <div className="legenda">
            <h4>CURSO DE CAP. PEDAGÓGICA</h4>
            <h4>PROJETO ESPIRAL</h4>
            <h4>PROJETO ORQUESTRA</h4>
            <h4>ORQUESTRA CONVENIADA</h4>
            <h4>FESTIVAIS</h4>
          </div>
          <div className="graphic">
            <div class="foo green"></div>
            <div class="foo blue"></div>
            <div class="foo gold"></div>
            <div class="foo purple"></div>
            <div class="foo red"></div>
          </div>
        </div>
      </div>
    );
  }
}