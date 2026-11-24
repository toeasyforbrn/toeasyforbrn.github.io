import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/bootstrap.scss'
import './styles/global.css'
import App from './App.jsx'
import { IdiomaProvider } from './i18n/IdiomaContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IdiomaProvider>
      <App />
    </IdiomaProvider>
  </StrictMode>,
)
