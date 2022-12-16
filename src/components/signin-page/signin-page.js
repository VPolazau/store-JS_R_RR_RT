import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'

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

import { addItemCart, addUser } from '../../store/reducers/storeDataSlice'

import './signin-page.css'

const SigninPage = () => {
  const inputLoginRef = useRef()
  const inputPassowrdRef = useRef()
  const [input, setInput] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const handlerAddUser = () => {
    if (localStorage.getItem(inputLoginRef.current.value)) {
      const userInfo = JSON.parse(localStorage.getItem(inputLoginRef.current.value))
      if (userInfo.password === inputPassowrdRef.current.value) {
        
        const userUpdate = JSON.parse(localStorage.getItem(inputLoginRef.current.value))
        localStorage.removeItem(inputLoginRef.current.value)
        userUpdate.isEntered = true
        localStorage.setItem(inputLoginRef.current.value, JSON.stringify(userUpdate))

        userInfo.cart.forEach(el => {
          dispatch(addItemCart(el))
        })

        dispatch(
          addUser({
            name: userUpdate.name,
            email: inputLoginRef.current.value,
          })
        )
        navigate('/',{ replace: true })
      } else setError(true)
    } else setError(true)
  }

  const handleClickShowPassword = () => setShowPassword(show => !show)

  return (
    <div className='SigninPage'>
      <div className='btn-back'>
        <Button variant='contained' color='primary' onClick={() => navigate(-1)}>
          <KeyboardBackspaceOutlinedIcon />
        </Button>
      </div>
      <div className='login-form'>
        <div className='hibrid-login-form'>
          <h1>Sign In</h1>
          <TextField
            error={error ? true : false}
            id='outlined-basic'
            placeholder='Email'
            size='small'
            variant='outlined'
            autoComplete='off'
            className='input-login'
            inputRef={inputLoginRef}
            onChange={e => {
              setInput(e.target.value)
              setError(false)
            }}
          />
          <FormControl size='small' variant='outlined' className='password'>
            <OutlinedInput
              error={error ? true : false}
              placeholder='Password'
              id='outlined-adornment-password'
              type={showPassword ? 'text' : 'password'}
              autoComplete='off'
              onChange={e => {
                setPassword(e.target.value)
                setError(false)
              }}
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
            disabled={(input && password) === '' ? true : false}
            onClick={handlerAddUser}
          >
            Enter
          </Button>
          <div className='new'>
            New in Online Store?{'\xa0'}
            <NavLink to='/signup' className='navLink-signup'>
              Sign up now.
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SigninPage
