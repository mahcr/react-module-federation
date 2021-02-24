import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './styles.css'

import Index from './app/index.js'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Index />
    </Router>
  </React.StrictMode>, document.getElementById('app'))