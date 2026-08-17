import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { TemaProvedor } from './context/temaContexto.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < TemaProvedor>
     <App />
    </TemaProvedor>   
  </StrictMode>,
)
