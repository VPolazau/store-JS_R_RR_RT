import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button'
import { IconButton } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined'

import './header.css'
import { removeUser } from '../../store/reducers/storeDataSlice'

const Header = () => {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(store => store.storeData.user)
  const cart = useSelector(store => store.storeData.cart)
  const { isEntered, name } = user
  const [amountItemsInCart, setAmountItemsInCart] = useState(0)

  useEffect(() => {
    if (cart.length === 0) setAmountItemsInCart(0)
    else setAmountItemsInCart(cart.reduce((acc, item) => acc + item.count, 0))
  }, [cart])

  const onLogOut = () => {

    const userInfo = JSON.parse(localStorage.getItem(user.email))
    localStorage.removeItem(user.email)
    userInfo.isEntered = false
    localStorage.setItem(user.email, JSON.stringify(userInfo))

    dispatch(removeUser())
  }

  const guestView = (
    <div className='Header'>
      <span className='logo'>Online Store</span>
      <Button
        variant='outlined'
        className='signin ml'
        onClick={() => navigate('/signin')}
      >
        Sign In
      </Button>
    </div>
  )

  const userView = (
    <div className='Header'>
      <span className='logo'>Online Store</span>
      <span className='hello ml'>Hello, {name}</span>
      {amountItemsInCart ? (
        <IconButton
          className='cart-btn with-count'
          count={amountItemsInCart}
          onClick={() => navigate(`user/cart`)}
        >
          <ShoppingCartOutlinedIcon color='secondary' fontSize='large' />
        </IconButton>
      ) : (
        <IconButton className='cart-btn' onClick={() => navigate(`user/cart`)}>
          <ShoppingCartOutlinedIcon color='secondary' fontSize='large' />
        </IconButton>
      )}
      <IconButton className='log-out-btn' onClick={onLogOut}>
        <LoginOutlinedIcon color='primary' fontSize='large' />
      </IconButton>
    </div>
  )

  return isEntered ? userView : guestView
}

export default Header
