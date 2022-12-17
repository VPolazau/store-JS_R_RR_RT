import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  addItemCart,
  decItemCart,
  removeItemCart,
} from '../../store/reducers/storeDataSlice'
import CartItemView from '../cart-Item-view'

const CartItem = ({ info }) => {
  const user = useSelector(store => store.storeData.user)
  const dispatch = useDispatch()
  const { id } = info
  const [isDeleted, setIsDeleted] = useState(false)

  useEffect(() => {
    if (!isDeleted) return
    const timer = setTimeout(() => dispatch(removeItemCart(id)), 2000)

    const userInfo = JSON.parse(localStorage.getItem(user.email))
    const indxDelItem = userInfo.cart.findIndex(el => el.id === id)
    userInfo.cart.splice(indxDelItem, 1)
    localStorage.removeItem(user.email)
    localStorage.setItem(user.email, JSON.stringify(userInfo))

    return () => {
      clearTimeout(timer)
    }
  }, [isDeleted])

  const dec = () => {
    const userInfo = JSON.parse(localStorage.getItem(user.email))
    const indx = userInfo.cart.findIndex(el => el.id === id)
    userInfo.cart[indx].count--
    localStorage.removeItem(user.email)
    localStorage.setItem(user.email, JSON.stringify(userInfo))

    dispatch(decItemCart(id))
  }

  const inc = () => {
    const userInfo = JSON.parse(localStorage.getItem(user.email))
    const indx = userInfo.cart.findIndex(el => el.id === id)
    userInfo.cart[indx].count++
    localStorage.removeItem(user.email)
    localStorage.setItem(user.email, JSON.stringify(userInfo))

    dispatch(addItemCart({ id }))
  }

  const removeItem = () => {
    setIsDeleted(true)
  }

  return (
    <CartItemView
      inc={inc}
      dec={dec}
      removeItem={removeItem}
      info={info}
      isDeleted={isDeleted}
    />
  )
}

export default CartItem
