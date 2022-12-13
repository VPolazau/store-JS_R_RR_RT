import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { getAllProducts, getProductsByCategory } from '../../service/shop-service'
import { btnEvent } from '../events/event'
import Item from '../item/item'

import './item-list.css'

const ItemList = () => {
  const products = useSelector(store => store.storeData.products)
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState('all') // w
  const dispatch = useDispatch()

  useEffect(() => {
    if (category == 'all') {
      getAllProducts(0, dispatch)
      setPage(1)
    }
    getProductsByCategory(category, dispatch)
  }, [category])

  useEffect(() => {
    getAllProducts(page * 20 - 20, dispatch)
  }, [page])

  useEffect(() => {
    btnEvent.addListener('onChangeCategory', c => setCategory(c))
  }, [])

  const handleChange = (event, value) => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    setPage(value)
  }

  return (
    <div className='ItemList'>
      <div className='list'>

        {products.map(item => (
          <Item key={item.id} id={item.id} info={item.body} />
        ))}
      </div>
      {category === 'all' ? (
        <Stack spacing={2} sx={{ marginLeft: 'auto', marginRight: '5%' }}>
          <Pagination count={5} onChange={handleChange} page={page} />
        </Stack>
      ) : null}
    </div>
  )
}

export default ItemList
