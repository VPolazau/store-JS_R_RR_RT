import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../cart-item'

import './cart-item-list.css'

const CartItemList = () => {
  const cartItems = useSelector(store => store.storeData.cart)
  
  return (
    <div className='CartItemList'>
      <span className='content'>Cart</span>
      {cartItems.map(item => <CartItem key={item.id} info={item}/>)}
    </div>
  )
}

export default CartItemList
