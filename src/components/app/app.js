import React from 'react'
import ErrorBoundry from '../error-boundry'
import Header from '../header'
import LoginPage from '../login-page'

import './app.css'

const App = () => {
  return (
    <div className='App-container'>
      <ErrorBoundry>
        <Header />
        {/* <LoginPage /> */}
      </ErrorBoundry>
    </div>
  )
}

export default App
