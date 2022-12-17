import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { removeItemCart, removeUser } from '../../store/reducers/storeDataSlice'
import HeaderView from '../header-view'

const Header = () => {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(store => store.storeData.user)
  const cart = useSelector(store => store.storeData.cart)
  const { isEntered, name } = user
  const [amountItemsInCart, setAmountItemsInCart] = useState(0)

  useEffect(() => {
    if (cart.length === 0) setAmountItemsInCart(0)
    else setAmountItemsInCart(cart.reduce((acc, item) => acc + item.count, 0))
  }, [cart])

  const onLogOut = () => {
    const userInfo = JSON.parse(localStorage.getItem(user.email))
    userInfo.isEntered = false
    userInfo.cart = cart
    localStorage.removeItem(user.email)
    localStorage.setItem(user.email, JSON.stringify(userInfo))

    dispatch(removeUser())
    cart.forEach(el => {
      dispatch(removeItemCart(el.id))
    })
    navigate('/')
  }

  const onClickCart = () => {
    navigate(`user/cart`)
  }

  const onClickSignIn = () => {
    navigate('/signin')
  }

  return (
    <HeaderView
      onClickSignIn={onClickSignIn}
      onClickCart={onClickCart}
      name={name}
      amountItemsInCart={amountItemsInCart}
      isEntered={isEntered}
      onLogOut={onLogOut}
    />
  )
}

export default Header
