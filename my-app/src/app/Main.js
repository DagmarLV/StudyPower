import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <div className="main-content">
      <header>
        <h1>Bienvenido a StudyPower</h1>
        <div className="search-bar">
            <svg class="h-8 w-8 text-stone-900"  width="15" height="15" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>
          <input type="text" placeholder="Search with LLM" />
          <button className="search-button"></button>
        </div>
      </header>
      <div className="content">
        <div className="left-column">
          <div className="calendar-chart">
            <div className="calendar-header">
              <span>Calendario</span>
              <div className="calendar-settings"></div>
            </div>
            <div className="calendar-body">
              {/* Calendar content here */}
            </div>
          </div>
          <div className="quote">
            <p>"El éxito no es definitivo, el fracaso no es fatal: lo que cuenta es el coraje para continuar." - Winston Churchill</p>
          </div>
          <div className="tip">
            <p>Tips:</p>
            <p>Distribuye tu tiempo de estudio en sesiones más cortas y separadas.</p>
          </div>
        </div>
        <div className="right-column">
          <div className="tasks-chart">
            <h2>Próximas tareas:</h2>
            <ul>
              <li>
                <input type="checkbox" /> Task 1
                <span>Hoy</span>
                <button className="edit-button"></button>
              </li>
              <li>
                <input type="checkbox" /> Task 2
                <span>Hoy</span>
                <button className="edit-button"></button>
              </li>
              <li>
                <input type="checkbox" /> Task 3
                <span>Mañana</span>
                <button className="edit-button"></button>
              </li>
            </ul>
            <button className="add-button">ADD</button>
          </div>
          <div className="notes-chart">
            <button>Apuntes</button>
          </div>
          <div className="summaries-chart">
            <button>Resúmenes Potenciados con LLM</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;