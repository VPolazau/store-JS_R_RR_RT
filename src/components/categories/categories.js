import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { getCategories, getProductsByCategory } from '../../service/shop-service'

import CategoriesView from '../categories-view'

const Categories = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate()
  const params = useParams()
  const [categories, setCategories] = useState([])
  const [alignment, setAlignment] = useState(params.category || 'all')

  useEffect(() => {
    getCategories().then(res => setCategories(res))
  }, [])

  const handleChange = (event, newAlignment) => {
    getProductsByCategory(newAlignment, dispatch)
    setAlignment(newAlignment)
    if (newAlignment === 'all') {
      navigate(`all/page-1`)
    } else navigate(newAlignment)
  }

  return (
    <CategoriesView
      handleChange={handleChange}
      alignment={alignment}
      categories={categories}
    />
  )
}

export default Categories
