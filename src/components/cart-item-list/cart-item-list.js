import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import CartItem from '../cart-item'
import { Button } from '@mui/material'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined'

import './cart-item-list.css'


const CartItemList = () => {
  const cartItems = useSelector(store => store.storeData.cart)
  let navigate = useNavigate()

  const sum = cartItems.reduce((acc, item) => acc + item.price*item.count, 0)

  return (
    <div className='CartItemList'>
      <div className='CartItemList-btn-back'>
        <Button variant='contained' color='primary' onClick={() => navigate(-1)}>
          <KeyboardBackspaceOutlinedIcon />
        </Button>
      </div>
      <div className='header'>
        <div className='title'>Cart</div>
        <div className='sum'>Final price: {sum}$</div>
      </div>
      {cartItems.map(item => <CartItem key={item.id} info={item}/>)}
    </div>
  )
}

export default CartItemList
