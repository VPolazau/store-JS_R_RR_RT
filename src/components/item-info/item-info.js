import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button, IconButton, Rating } from '@mui/material'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

import { getSingleItem } from '../../service/shop-service'
import { addItemCart } from '../../store/reducers/storeDataSlice'

import './item-info.css'

const ItemInfo = () => {
  const dispatch = useDispatch()
  const storeData = useSelector(store => store.storeData)
  const { singleItem, user, cart } = storeData
  const [img, setImg] = useState()

  useEffect(() => {
    getSingleItem(2, dispatch)
  }, [])

  const { id, body } = singleItem
  const {
    images,
    title,
    brand,
    category,
    discountPercentage,
    price,
    rating,
    stock,
    description,
  } = body

  useEffect(() => {
    if (images.length == 0) return
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
  }

  console.log(cart)
  if (id == -1) return
  return (
    <div className='ItemInfo'>
      <div className='ItemInfo-btn-back'>
        <Button variant='contained' color='primary'>
          <KeyboardBackspaceOutlinedIcon />
        </Button>
      </div>
      <div className='info'>
        <div className='info-left'>
          <div className='imageUrl'>
            <img src={`${img}`} alt='image item' className='image' />
          </div>
          {user.isEntered ? (
            <Button
              variant='contained'
              sx={{ marginRight: '30px' }}
              onClick={addItemToCart}
            >
              <AddShoppingCartIcon />
            </Button>
          ) : (
            <Button variant='contained' sx={{ marginRight: '30px' }} disabled>
              <AddShoppingCartIcon />
            </Button>
          )}
        </div>
        <div className='info-right'>
          <div className='title'>{title}</div>
          <div className='brand'>{brand}</div>
          <div className='category'>Category: {category}</div>
          <div className='price'>
            Price: {'\xa0'}
            <span className='with-discount'>{price}$</span>
            <span className='without-discount'>
              {(price * discountPercentage).toFixed(0)}$
            </span>
          </div>
          <div className='rating'>
            Rating: {'\xa0'}
            {rating}
            {'\xa0'}
            {'\xa0'}
            <Rating
              name='half-rating-read'
              defaultValue={rating}
              precision={0.1}
              readOnly
              size='small'
            />
          </div>
          <div className='stock'>Stock: {stock}</div>
          <div className='description'>
            <p>About this product:</p>
            {description}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemInfo
