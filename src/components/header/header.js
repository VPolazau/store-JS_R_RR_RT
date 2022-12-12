import React from 'react'

import Button from '@mui/material/Button'
import { IconButton } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

import './header.css'

const Header = () => {
  const isEntered = true
  const name = 'Victor'
  const number = 1

  const guest = (
    <div className='Header'>
      <span className='logo'>Online Store</span>
      <Button variant='outlined' className='login ml'>
        Log in
      </Button>
    </div>
  )

  const user = (
    <div className='Header'>
      <span className='logo'>Online Store</span>
      <span className='hello ml'>Hello, {name}</span>
      {number ? (
        <IconButton className='cart-btn with-count' count={number}>
          <ShoppingCartOutlinedIcon color='secondary' fontSize='large' />
        </IconButton>
      ) : (
        <IconButton className='cart-btn'>
          <ShoppingCartOutlinedIcon color='secondary' fontSize='large' />
        </IconButton>
      )}
    </div>
  )

  return isEntered ? user : guest
}

export default Header
