// Misalnya, dalam file src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Impor file CSS utama di sini
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
