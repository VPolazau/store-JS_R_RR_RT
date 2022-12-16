import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { addUser } from '../../store/reducers/storeDataSlice'

import ErrorBoundry from '../error-boundry'
import Header from '../header'
import PagesRoutes from '../routes/pages-routes'

import './app.css'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const storage = []
    for (const key in localStorage) {
      if (Object.hasOwnProperty.call(localStorage, key)) {
        storage.push({ email: key, ...JSON.parse(localStorage[key]) })
      }
    }
    if (storage.some(user => user.isEntered === true)) {
      const { name, email } = storage.find(user => user.isEntered === true)
      dispatch(addUser({ name, email }))
    }
  })

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
