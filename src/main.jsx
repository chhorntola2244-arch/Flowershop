import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Cartprovider } from './context/Cartcontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cartprovider>
      <BrowserRouter>
    <App />
    </BrowserRouter>
    </Cartprovider>
    
    
  </StrictMode>,
)
