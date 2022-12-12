import React from 'react'
import { Rating } from '@mui/material';

import './item.css'

const Item = ({id, info}) => {
  const { imageUrl, title, rating, price, discountPercentage } = info
    
    return <div className='Item'>
      <div className='imageUrl'>
          <img src={`${imageUrl}`} alt='image item' className='image' />
      </div>
        <div className='title'>{title}</div>
        <div className='rating'>
        {rating}{'\xa0'}{'\xa0'}
        <Rating name="half-rating-read" defaultValue={rating} precision={0.1} readOnly size='small'/>
        </div>
        <div className='price'>
          <span className='with-discount'>{price}$</span>
          <span className='without-discount'>
            {(price * discountPercentage).toFixed(0)}$
          </span>
        </div>
    </div>
}

export default Item