import React from 'react'

import Button from '@mui/material/Button'
import { IconButton } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined'

import './header-view.css'

const HeaderView = ({ onClickSignIn, onClickCart, name, isEntered, amountItemsInCart, onLogOut }) => {

  const guestView = (
    <div className='HeaderView'>
      <span className='logo'>Online Store</span>
      <Button variant='outlined' className='signin ml' onClick={onClickSignIn}>
        Sign In
      </Button>
    </div>
  )

  const userView = (
    <div className='HeaderView'>
      <span className='logo'>Online Store</span>
      <span className='hello ml'>Hello, {name}</span>
      {amountItemsInCart ? (
        <IconButton
          className='cart-btn with-count'
          count={amountItemsInCart}
          onClick={onClickCart}
        >
          <ShoppingCartOutlinedIcon color='secondary' fontSize='large' />
        </IconButton>
      ) : (
        <IconButton className='cart-btn' onClick={onClickCart}>
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

export default HeaderView
