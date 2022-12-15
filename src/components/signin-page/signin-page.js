import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'

import { addUser } from '../../store/reducers/storeDataSlice'

import './signin-page.css'

const SigninPage = () => {
  const inputNameRef = useRef()
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const handlerAddUser = () => {
    dispatch(addUser(inputNameRef.current.value))
    navigate(`/user/products/all/page-1`)
  }

  return (
    <div className='SigninPage'>
      <TextField
        id='outlined-basic'
        placeholder='enter name'
        size='small'
        variant='outlined'
        className='input-name'
        inputRef={inputNameRef}
        onChange={e => setInput(e.target.value)}
      />
      <Button
        variant='contained'
        className='user-enter-btn'
        disabled={input === '' ? true : false}
        onClick={handlerAddUser}
      >
        Enter
      </Button>
    </div>
  )
}

export default SigninPage
