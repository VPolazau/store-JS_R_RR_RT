import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import ErrorBoundry from '../error-boundry'
import Header from '../header'
import LoginPage from '../login-page'
import ItemListPage from '../item-list-page/item-list-page'

import './app.css'


const App = () => {
  // const storeData = useSelector(store => store.storeData)
  

  return (
    <div className='App-container'>
      <ErrorBoundry>
        <Header />
        {/* <LoginPage /> */}
        <ItemListPage />
      </ErrorBoundry>
    </div>
  )
}

export default App
