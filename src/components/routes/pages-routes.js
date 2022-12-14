import React from 'react'
import { Route, Routes } from 'react-router-dom'

import LoginPage from '../login-page'
import ItemListPage from '../item-list-page'
import ItemInfo from '../item-info'
import CartItemList from '../cart-item-list'
import WelcomePage from '../welcome-page'

const PagesRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<WelcomePage />} />
      <Route path='/products/' element={<ItemListPage />} />
      <Route path='/product/:itemId' element={<ItemInfo />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/cart' element={<CartItemList />} />
    </Routes>
  )
}

export default PagesRoutes
