import React from 'react'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import DeleteIcon from '@mui/icons-material/Delete'

import './cart-item.css'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'

import { addItemCart, decItemCart, removeItemCart } from '../../store/reducers/storeDataSlice'

const CartItem = ({ info }) => {
  const dispatch = useDispatch()
  const { id, img, count, price, title } = info

  const dec = () => {
    dispatch(decItemCart(id))
  }

  const inc = () => {
    dispatch(addItemCart({ id }))
  }

  const removeItem = () => {
    dispatch(removeItemCart(id))
  }

  return (
    <div className='CartItem'>
      <div className='imageUrl'>
        <img src={`${img}`} alt='cartItemImage' className='image' />
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
          <Button variant='outlined' startIcon={<DeleteIcon />} onClick={removeItem}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
