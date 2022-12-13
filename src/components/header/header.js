import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import Button from '@mui/material/Button'
import { IconButton } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

import './header.css'

const Header = () => {
  const user = useSelector(store => store.storeData.user)
  const cart = useSelector(store => store.storeData.cart)
  const { isEntered, name } = user
  const [amountItemsInCart, setAmountItemsInCart] = useState(0)

  useEffect(() => {
    if (cart.length === 0) setAmountItemsInCart(0)
    else setAmountItemsInCart(cart.reduce((acc, item) => acc + item.count, 0))
  }, [cart])

  const guestView = (
    <div className='Header'>
      <span className='logo'>Online Store</span>
      <Button variant='outlined' className='login ml'>
        Log in
      </Button>
    </div>
  )

  const userView = (
    <div className='Header'>
      <span className='logo'>Online Store</span>
      <span className='hello ml'>Hello, {name}</span>
      {amountItemsInCart ? (
        <IconButton className='cart-btn with-count' count={amountItemsInCart}>
          <ShoppingCartOutlinedIcon color='secondary' fontSize='large' />
        </IconButton>
      ) : (
        <IconButton className='cart-btn'>
          <ShoppingCartOutlinedIcon color='secondary' fontSize='large' />
        </IconButton>
      )}
    </div>
  )

  return isEntered ? userView : guestView
}

export default Header
