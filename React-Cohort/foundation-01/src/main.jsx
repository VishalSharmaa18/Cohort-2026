import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Vishal from './Vishal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Vishal />
  </StrictMode>,
)
