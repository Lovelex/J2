import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router.jsx'

import easy_q3 from '@/colors/easy/q3.js'

import { createTheme, ThemeProvider } from '@mui/material/styles'

import './main.scss'

const theme = createTheme({
  spacing: factor => `${factor * 4}px`,
  palette: {
    easy: {
      easy_q3
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </React.StrictMode>,
)
