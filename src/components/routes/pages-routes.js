import React from 'react'
import { Route, Routes } from 'react-router-dom'

import SigninPage from '../signin-page'
import ItemListPage from '../item-list-page'
import ItemInfo from '../item-info'
import CartItemList from '../cart-item-list'
import WelcomePage from '../welcome-page'
import { useSelector } from 'react-redux'
import ItemList from '../item-list/item-list'
import SignupPage from '../signup-page'

const PagesRoutes = () => {
  const user = useSelector(store => store.storeData.user)

  return (
    <Routes>
      <Route path='/' element={<WelcomePage />} />
      <Route path='/signin' element={<SigninPage />} />
      <Route path='/signup' element={<SignupPage />} />
      {user.isEntered ? (
        <>
          <Route path={`user/products/*`} element={<ItemListPage />}>
            <Route path='all/page-:page' element={<ItemList />} />
            <Route path=':category' element={<ItemList />} />
          </Route>
          <Route path={`user/product/:itemId`} element={<ItemInfo />} />
          <Route path={`user/cart`} element={<CartItemList />} />
        </>
      ) : (
        <>
          <Route path='guest/products/*' element={<ItemListPage />}>
            <Route path='all/page-:page' element={<ItemList />} />
            <Route path=':category' element={<ItemList />} />
          </Route>
          <Route path='guest/product/:itemId'element={<ItemInfo />} />
        </>
      )}
    </Routes>
  )
}

export default PagesRoutes
