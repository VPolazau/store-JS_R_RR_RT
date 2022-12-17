import React, { memo } from 'react'

import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import DeleteIcon from '@mui/icons-material/Delete'
import { Button } from '@mui/material'

import './cart-item-view.css'

const CartItemView = memo(({ info, inc, dec, removeItem, isDeleted }) => {
  const { img, count, price, title } = info

  let classCartItemView = 'CartItemView'
  if(isDeleted) classCartItemView += ' isDeleted'

  return (
    <div className={classCartItemView}>
      <div className='imageUrl'>
        <img src={`${img}`} alt='cartItemViewImage' className='image' />
      </div>
      <div className='info'>
        <div className='title'>{title}</div>
        <div className='info-btns'>
          <div className='counter'>
            <Button
              variant='text'
              className='counter-btn'
              onClick={dec}
              disabled={count === 1 ? true : false}
            >
              <RemoveOutlinedIcon />
            </Button>
            {count}
            <Button variant='text' className='counter-btn' onClick={inc}>
              <AddOutlinedIcon />
            </Button>
          </div>
          <div className='result-price'>
            Payable price: {'\xa0'}
            {price * count}$
          </div>
          <Button
            variant='outlined'
            startIcon={<DeleteIcon />}
            onClick={removeItem}
            className='btn-del-cart'
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
})

export default CartItemView
