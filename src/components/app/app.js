import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import ErrorBoundry from '../error-boundry'
import Header from '../header'
import PagesRoutes from '../routes/pages-routes'

import './app.css'


const App = () => {
  return (
    <div className='App-container'>
      <ErrorBoundry>
        <Router>
          <Header />
          <PagesRoutes />
        </Router>
      </ErrorBoundry>
    </div>
  )
}

export default App
