import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1 >Bienvenido a la cracion de tu nuevo forulario</h1>
    <div className='form-container'>
    <App />
    </div>
  </React.StrictMode>
);


