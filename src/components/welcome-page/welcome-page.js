import React from 'react'

import { Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

import './welcome-page.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const WelcomePage = () => {
  let navigate = useNavigate()
  const user = useSelector(store => store.storeData.user)

  const onStartShopping = () => {
    user.isEntered
      ? navigate(`user/products/all/page-1`)
      : navigate('guest/products/all/page-1')
  }

  return (
    <div className='WelcomePage'>
      <h1 className='h1'>Welcome to online store</h1>
      <Button variant='contained' endIcon={<SendIcon />} onClick={onStartShopping}>
        Start Shopping
      </Button>
    </div>
  )
}

export default WelcomePage
