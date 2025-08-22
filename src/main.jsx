import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FormularioComponent } from './Components/FormularioComponent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormularioComponent/>
  </StrictMode>,
)
