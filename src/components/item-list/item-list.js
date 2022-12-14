import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

import { getAllProducts } from '../../service/shop-service'
import Item from '../item/item'

import './item-list.css'

const ItemList = () => {
  const products = useSelector(store => store.storeData.products)
  const user = useSelector(store => store.storeData.user)
  const dispatch = useDispatch()
  let navigate = useNavigate()
  const params = useParams()
  let page = params.page

  useEffect(() => {
    if (!page) return
    else getAllProducts(page * 50 - 50, dispatch)
  }, [page, dispatch])

  const handleChangePage = (event, value) => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    user.isEntered
      ? navigate(`/user-${user.name}/products/all/page-${value}`, { replace: true })
      : navigate(`/user-guest/products/all/page-${value}`, { replace: true })
    // navigate(`all/page-${value}`)
  }

  return (
    <div className='ItemList'>
      <div className='list'>
        {products.map(item => (
          <Item key={item.id} id={item.id} info={item.body} />
        ))}
      </div>
      {page ? (
        <Stack spacing={2} sx={{ marginLeft: 'auto', marginRight: '5%' }}>
          <Pagination count={2} onChange={handleChangePage} page={+page} />
        </Stack>
      ) : null}
    </div>
  )
}

export default ItemList
