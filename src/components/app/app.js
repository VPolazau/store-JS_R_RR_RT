import React from 'react'

import ErrorBoundry from '../error-boundry'
import Header from '../header'
import LoginPage from '../login-page'
import ItemListPage from '../item-list-page'
import ItemInfo from '../item-info'
import CartItemList from '../cart-item-list'

import './app.css'

const App = () => {
  // const storeData = useSelector(store => store.storeData)
  

  return (
    <div className='App-container'>
      <ErrorBoundry>
        <Header />
        {/* <LoginPage /> */}
        {/* <ItemListPage /> */}
        {/* <ItemInfo /> */}
        <CartItemList />
      </ErrorBoundry>
    </div>
  )
}

export default App
