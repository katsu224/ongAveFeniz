// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom' 
// BORRA LA LÍNEA DE HELMETPROVIDER

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* ELIMINA EL HELMETPROVIDER, DEJA SOLO APP */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)