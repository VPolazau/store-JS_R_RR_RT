import React from 'react'

import { Outlet } from 'react-router-dom'
import Categories from '../categories'

import './item-list-page.css'

const ItemListPage = () => {
  return (
    <div className='ItemListPage'>
      <Categories />
      <Outlet />
    </div>
  )
}

export default ItemListPage
