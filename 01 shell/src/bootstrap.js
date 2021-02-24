import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './styles.css'
import { SessionProvider } from 'login/session'

import Index from './app/index.js'

ReactDOM.render(
  <React.StrictMode>
    <SessionProvider>
      <Router>
        <Index />
      </Router>
    </SessionProvider>
  </React.StrictMode>,
  document.getElementById('app')
)
