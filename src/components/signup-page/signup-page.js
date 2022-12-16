import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import TextField from '@mui/material/TextField'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined'

import { addUser } from '../../store/reducers/storeDataSlice'

import './signup-page.css'

const SignupPage = () => {
  const inputLoginRef = useRef()
  const inputPassowrdRef = useRef()
  const inputNameRef = useRef()
  const [input, setInput] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const handlerAddUser = () => {
    const inform = {
      name: inputNameRef.current.value,
      password: inputPassowrdRef.current.value,
      isEntered: true,
      cart: [],
    }
    localStorage.setItem(inputLoginRef.current.value, JSON.stringify(inform))
    dispatch(
      addUser({ name: inputNameRef.current.value, email: inputLoginRef.current.value })
    )
    navigate('/', { replace: true })
  }

  const handleClickShowPassword = () => setShowPassword(show => !show)

  return (
    <div className='SignupPage'>
      <div className='btn-back'>
        <Button variant='contained' color='primary' onClick={() => navigate(-1)}>
          <KeyboardBackspaceOutlinedIcon />
        </Button>
      </div>
      <div className='login-form'>
        <div className='hibrid-login-form'>
          <h1>Sign Up</h1>
          <TextField
            placeholder='Name'
            size='small'
            variant='outlined'
            autoComplete='off'
            className='input-name'
            inputRef={inputNameRef}
            onChange={e => setName(e.target.value)}
          />
          <TextField
            placeholder='Email'
            size='small'
            variant='outlined'
            autoComplete='off'
            className='input-login'
            inputRef={inputLoginRef}
            onChange={e => setInput(e.target.value)}
          />
          <FormControl size='small' variant='outlined' className='password'>
            <OutlinedInput
              placeholder='Password'
              id='outlined-adornment-password'
              type={showPassword ? 'text' : 'password'}
              autoComplete='off'
              onChange={e => setPassword(e.target.value)}
              inputRef={inputPassowrdRef}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    edge='end'
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            variant='contained'
            className='user-enter-btn'
            disabled={(name && input && password) === '' ? true : false}
            onClick={handlerAddUser}
          >
            Enter
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
