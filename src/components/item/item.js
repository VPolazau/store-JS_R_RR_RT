import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { addItemCart } from '../../store/reducers/storeDataSlice'

import ItemView from '../item-view/item-view'

const Item = ({ id, info, isInCart }) => {
  const dispatch = useDispatch()
  const { dataLoadState, user } = useSelector(store => store.storeData)
  let navigate = useNavigate()
  const { imageUrl, title, rating, price, discountPercentage } = info

  const onItemClicked = () => {
    user.isEntered ? navigate(`/user/product/${id}`) : navigate(`/guest/product/${id}`)
  }

  const addToCart = event => {
    event.stopPropagation()
    dispatch(addItemCart({ id, img: imageUrl, title, count: 1, price }))

    const userInfo = JSON.parse(localStorage.getItem(user.email))
    userInfo.cart.push({ id, img: imageUrl, title, count: 1, price })
    localStorage.removeItem(user.email)
    localStorage.setItem(user.email, JSON.stringify(userInfo))
  }

  return (
    <ItemView
      dataLoadState={dataLoadState}
      info={info}
      onItemClicked={onItemClicked}
      addToCart={addToCart}
      user={user}
      isInCart={isInCart}
    />
  )
}

export default Item
