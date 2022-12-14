import React from 'react'

import { Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

import './welcome-page.css'
import { useNavigate } from 'react-router-dom'

const WelcomePage = () => {
  let navigate = useNavigate()

  return (
    <div className='WelcomePage'>
      <h1 className='h1'>Welcome to online store</h1>
      <Button variant='contained' endIcon={<SendIcon />} onClick={() => navigate('/products')}>
        Start Shopping
      </Button>
    </div>
  )
}

export default WelcomePage
