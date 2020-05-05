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
      </div>
    );
  }
}