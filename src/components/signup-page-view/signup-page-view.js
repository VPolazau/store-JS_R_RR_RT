import React, { useRef, useState } from 'react'

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

import './signup-page-view.css'

const SignupPageView = ({ handlerAddUser, onGoBack }) => {
  const inputLoginRef = useRef()
  const inputPasswordRef = useRef()
  const inputNameRef = useRef()

  const [input, setInput] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword(show => !show)

  return (
    <div className='SignupPageView'>
      <div className='btn-back'>
        <Button variant='contained' color='primary' onClick={onGoBack}>
          <KeyboardBackspaceOutlinedIcon />
        </Button>
      </div>
      <div className='login-form'>
        <div className='hibrid-login-form'>
          <h1>Sign Up</h1>
          <TextField
            data-testid='name'
            placeholder='Name'
            size='small'
            variant='outlined'
            autoComplete='off'
            className='input-name'
            inputRef={inputNameRef}
            onChange={e => setName(e.target.value)}
          />
          <TextField
          data-testid='email'
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
              data-testid='password'
              placeholder='Password'
              id='outlined-adornment-password'
              type={showPassword ? 'text' : 'password'}
              autoComplete='off'
              onChange={e => setPassword(e.target.value)}
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
            disabled={(name && input && password) === '' ? true : false}
            onClick={() => handlerAddUser(inputLoginRef, inputPasswordRef, inputNameRef)}
          >
            Enter
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SignupPageView
