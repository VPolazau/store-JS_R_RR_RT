import React from 'react'
import { Route, Routes } from 'react-router-dom'

import LoginPage from '../login-page'
import ItemListPage from '../item-list-page'
import ItemInfo from '../item-info'
import CartItemList from '../cart-item-list'
import WelcomePage from '../welcome-page'
import { useSelector } from 'react-redux'
import ItemList from '../item-list/item-list'

const PagesRoutes = () => {
  const user = useSelector(store => store.storeData.user)
  return (
    <Routes>
      <Route path='/' element={<WelcomePage />} />
      <Route path='/login' element={<LoginPage />} />
      {user.isEntered ? (
        <>
          <Route path={`user-${user.name}/products/*`} element={<ItemListPage />}>
            <Route path='all/page-:page' element={<ItemList />} />
            <Route path=':category' element={<ItemList />} />
          </Route>
          <Route path={`user-${user.name}/product/:itemId`} element={<ItemInfo />} />
          <Route path={`user-${user.name}/cart`} element={<CartItemList />} />
        </>
      ) : (
        <>
          <Route path='user-guest/products/*' element={<ItemListPage />}>
            <Route path='all/page-:page' element={<ItemList />} />
            <Route path=':category' element={<ItemList />} />
          </Route>
          <Route path='user-guest/product/:itemId'element={<ItemInfo />} />
        </>
      )}
    </Routes>
  )
}

export default PagesRoutes
