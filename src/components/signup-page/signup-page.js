import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { addUser } from '../../store/reducers/storeDataSlice'
import SignupPageView from '../signup-page-view/signup-page-view'

const SignupPage = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const handlerAddUser = (inputLoginRef, inputPasswordRef, inputNameRef) => {
    const inform = {
      name: inputNameRef.current.value,
      password: inputPasswordRef.current.value,
      isEntered: true,
      cart: [],
    }
    localStorage.setItem(inputLoginRef.current.value, JSON.stringify(inform))
    dispatch(
      addUser({ name: inputNameRef.current.value, email: inputLoginRef.current.value })
    )
    navigate('/', { replace: true })
  }

  const onGoBack = () => {
    navigate(-1)
  }

  return <SignupPageView handlerAddUser={handlerAddUser} onGoBack={onGoBack} />
}

export default SignupPage
