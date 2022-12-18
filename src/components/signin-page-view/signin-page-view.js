import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

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

import './signin-page-view.css'

const SigninPageView = ({ onGoBack, error, handlerAddUser, onChangeInput }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [input, setInput] = useState('')
  const [password, setPassword] = useState('')
  const inputLoginRef = useRef()
  const inputPasswordRef = useRef()

  const handleClickShowPassword = () => setShowPassword(show => !show)

  return (
    <div className='SigninPageView'>
      <div className='btn-back'>
        <Button variant='contained' color='primary' onClick={onGoBack}>
          <KeyboardBackspaceOutlinedIcon />
        </Button>
      </div>
      <div className='login-form'>
        <div className='hibrid-login-form'>
          <h1>Sign In</h1>
          <TextField
            data-testid='email'
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
              onChangeInput()
            }}
          />
          <FormControl size='small' variant='outlined' className='password'>
            <OutlinedInput
              data-testid='password'
              error={error ? true : false}
              placeholder='Password'
              id='outlined-adornment-password'
              type={showPassword ? 'text' : 'password'}
              autoComplete='off'
              onChange={e => {
                setPassword(e.target.value)
                onChangeInput()
              }}
              inputRef={inputPasswordRef}
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
            onClick={() => handlerAddUser(inputLoginRef, inputPasswordRef)}
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

export default SigninPageView
