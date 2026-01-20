import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react"
import { BrowserRouter } from 'react-router-dom'
import { PrimeReactProvider } from "primereact/api"
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    
<StrictMode>
  <PrimeReactProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </PrimeReactProvider>
  </StrictMode>

)
