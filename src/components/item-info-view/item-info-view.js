import React from 'react'

import { Button, Rating } from '@mui/material'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

import './item-info-view.css'

const ItemInfoView = ({ itemBody, img, addItemToCart, onGoBack, isEntered }) => {
  const {
    title,
    brand,
    category,
    discountPercentage,
    price,
    rating,
    stock,
    description,
  } = itemBody

  return (
    <div className='ItemInfoView'>
      <div className='ItemInfoView-btn-back'>
        <Button variant='contained' color='primary' onClick={onGoBack}>
          <KeyboardBackspaceOutlinedIcon />
        </Button>
      </div>
      <div className='info'>
        <div className='info-left'>
          <div className='imageUrl'>
            <img src={`${img}`} alt='itemInfoImage' className='image' />
          </div>
          {isEntered ? (
            <Button
              variant='contained'
              className='ItemInfoView__btn-add-to-cart'
              onClick={addItemToCart}
            >
              <AddShoppingCartIcon />
            </Button>
          ) : (
            <>
              <Button
                variant='contained'
                className='ItemInfoView__btn-add-to-cart'
                disabled
              >
                <AddShoppingCartIcon />
              </Button>
              <p>You must be logged in to add this product to your cart</p>
            </>
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

export default ItemInfoView
