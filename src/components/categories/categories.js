import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'

import { getCategories, getProductsByCategory } from '../../service/shop-service'

import './categories.css'
import { useDispatch } from 'react-redux'

const Categories = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate()
  const params = useParams()
  const [categories, setCategories] = useState([])
  const [alignment, setAlignment] = useState(params.category || 'all')
  const [toggleView, setToggleView] = useState({ left: false })

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

  const toggleDrawer = open => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    )
      return

    setToggleView({ ...toggleView, left: open })
  }

  return (
    <>
      <React.Fragment key='left'>
        <div className='Categories'>
          <span className='span-Category'>Categories</span>
          <IconButton size='large' onClick={toggleDrawer(true)} open={true}>
            <MenuIcon />
          </IconButton>
        </div>
        <SwipeableDrawer
          anchor={'left'}
          open={toggleView.left}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <Box
            sx={{ width: 250 }}
            role='presentation'
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            className='Category-content-box'
          >
            <ToggleButtonGroup
              className='toggle-btn-Categories'
              color='info'
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label='Platform'
              orientation='vertical'
            >
              {categories.map(category => (
                <ToggleButton
                  key={category}
                  value={category}
                  className='toggle-btn-Category'
                >
                  {category}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>
        </SwipeableDrawer>
      </React.Fragment>
    </>
  )
}

export default Categories
