import React, { useState } from 'react'

import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'

import './categories-view.css'

const CategoriesView = ({ handleChange, alignment, categories }) => {
  const [toggleView, setToggleView] = useState({ left: false })

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
        <div className='CategoriesView'>
          <span className='span-Category'>Categories</span>
          <IconButton size='large' data-testid={'menu-btn'} onClick={toggleDrawer(true)} open={true}>
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
              className='toggle-btn-CategoriesView'
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

export default CategoriesView
