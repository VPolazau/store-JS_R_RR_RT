import React, { useState, useEffect } from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

import { getCategories } from '../../service/shop-service'

import './categories.css'
import { btnEvent } from '../events/event'

const Categories = () => {
  const [categories, setCategories] = useState([])
  const [alignment, setAlignment] = useState('all')

  useEffect(() => {
    getCategories().then(res => setCategories(res))
  }, [])

  const handleChange = (event, newAlignment) => {
    btnEvent.emit('onChangeCategory', event.target.value) // category onClick
    setAlignment(newAlignment)
  }

  return (
    <div className='Categories'>
      <span className='span-Categories'>Categories</span>
      <ToggleButtonGroup
        className='toggle-btn-Categories'
        size='small'
        color='info'
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label='Platform'
        orientation='vertical'
      >
        {categories.map(category => (
          <ToggleButton key={category} value={category}>
            {category}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  )
}

export default Categories
