import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Main } from './components/Main/Main'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Main></Main>
    </BrowserRouter>
  </StrictMode>,
)
