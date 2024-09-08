import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router.jsx'

import ThemeContext from '@/contexts/ThemeContext.jsx'

import './main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContext>
      <Router />
    </ThemeContext>
  </React.StrictMode>,
)
