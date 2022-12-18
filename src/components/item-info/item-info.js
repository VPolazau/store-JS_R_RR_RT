import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getSingleItem } from '../../service/shop-service'
import { addItemCart } from '../../store/reducers/storeDataSlice'

import { useNavigate, useParams } from 'react-router-dom'
import ItemInfoView from '../item-info-view/item-info-view'

const ItemInfo = () => {
  const dispatch = useDispatch()
  const storeData = useSelector(store => store.storeData)
  const { singleItem, user } = storeData
  const [img, setImg] = useState()
  const params = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    getSingleItem(params.itemId, dispatch)
  }, [params.itemId, dispatch])

  const { id, body } = singleItem
  const { images, title, price } = body

  useEffect(() => {
    if (images.length === 0) return
    setImg(images[0])
    const timer = setInterval(
      () => setImg(images[Math.floor(Math.random() * images.length)]),
      5000
    )
    return () => {
      clearTimeout(timer)
    }
  }, [images])

  const addItemToCart = () => {
    dispatch(addItemCart({ id, img: images[0], title, count: 1, price }))
    const userInfo = JSON.parse(localStorage.getItem(user.email))
    userInfo.cart.push({ id, img: images[0], title, count: 1, price })
    localStorage.removeItem(user.email)
    localStorage.setItem(user.email, JSON.stringify(userInfo))
  }

  const onGoBack = () => {
    navigate(-1)
  }

  if (id === -1) return
  return (
    <ItemInfoView
      itemBody={body}
      img={img}
      addItemToCart={addItemToCart}
      onGoBack={onGoBack}
      isEntered={user.isEntered}
    />
  )
}

export default ItemInfo
