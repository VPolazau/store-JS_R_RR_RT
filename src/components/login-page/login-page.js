import React, { useRef, useState } from 'react'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'

import './login-page.css'

const LoginPage = () => {
  const inputNameRef = useRef()
  const [input, setInput] = useState('')

  return (
    <div className='LoginPage'>
      <TextField
        id='outlined-basic'
        placeholder='enter name'
        size='small'
        variant='outlined'
        className='input-name'
        inputRef={inputNameRef}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
          variant='contained'
          className='user-enter-btn'
          disabled={input === '' ? true : false}
          onClick={()=>console.log(`Save User, ${input}`)}
        >
          Enter
        </Button>
    </div>
  )
}

export default LoginPage
