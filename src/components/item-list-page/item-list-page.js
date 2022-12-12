import React from 'react'

import Categories from '../categories'
import ItemList from '../item-list/item-list'

import './item-list-page.css'

const ItemListPage = () => {
    
    return <div className='ItemListPage'>
      <Categories />
      <ItemList />
    </div>
}

export default ItemListPage