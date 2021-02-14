import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx'; //ponemos el .jsx para trabajar html dentro de los archivos js

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
