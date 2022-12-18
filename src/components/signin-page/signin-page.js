import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { addItemCart, addUser } from '../../store/reducers/storeDataSlice'
import SigninPageView from '../signin-page-view/signin-page-view'

const SigninPage = () => {
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const handlerAddUser = (inputLoginRef, inputPasswordRef) => {
    if (localStorage.getItem(inputLoginRef.current.value)) {
      const userInfo = JSON.parse(localStorage.getItem(inputLoginRef.current.value))
      if (userInfo.password === inputPasswordRef.current.value) {
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
        navigate('/', { replace: true })
      } else setError(true)
    } else setError(true)
  }

  const onGoBack = () => {
    navigate(-1)
  }

  const onChangeInput = () => {
    setError(false)
  }

  return (
    <SigninPageView
      onGoBack={onGoBack}
      error={error}
      handlerAddUser={handlerAddUser}
      onChangeInput={onChangeInput}
    />
  )
}

export default SigninPage
