import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import CATALOGO from './CATALOGO.jsx'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route>
      <Route path="/" element={<App />}/>
      <Route path="/CATALOGO" element={<CATALOGO />}/>
      
      </Route>
    </Routes>
    </BrowserRouter>
   
  </StrictMode>,
)