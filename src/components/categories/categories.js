import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

import { getCategories, getProductsByCategory } from '../../service/shop-service'

import './categories.css'
import { useDispatch } from 'react-redux'

const Categories = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate()
  const params = useParams()
  const [categories, setCategories] = useState([])
  const [alignment, setAlignment] = useState(params.category)

  useEffect(() => {
    getCategories().then(res => setCategories(res))
  }, [])

  const handleChange = (event, newAlignment) => {
    getProductsByCategory(newAlignment, dispatch)
    setAlignment(newAlignment)
    if(newAlignment === 'all'){
      navigate(`all/page-1`)
    }
    else navigate(newAlignment)
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
