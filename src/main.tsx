import React from 'react'
import ReactDOM from 'react-dom/client'
import { Todos } from './assets/views/index'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Todos />
  </React.StrictMode>,
)