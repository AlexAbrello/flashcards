import { StrictMode } from 'react'

import { App } from '@/App'
import { createRoot } from 'react-dom/client'

import './styles/index.scss'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
