import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

import { getAllProducts } from '../../service/shop-service'
import Item from '../item/item'

import './item-list.css'

const ItemList = () => {
  const storeData = useSelector(store => store.storeData)
  const { products, user, cart } = storeData
  const dispatch = useDispatch()
  let navigate = useNavigate()
  const params = useParams()
  let page = params.page

  const allAndCart = []
  products.forEach(p => {
    if(cart.some(item => item.id === p.id)){
      allAndCart.push({...p, isInCart: true})
    }
    else allAndCart.push(p)
  })

  useEffect(() => {
    if (!page) return
    else getAllProducts(page * 50 - 50, dispatch)
  }, [page, dispatch])

  const handleChangePage = (event, value) => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    user.isEntered
      ? navigate(`/user/products/all/page-${value}`, { replace: true })
      : navigate(`/guest/products/all/page-${value}`, { replace: true })
  }

  return (
    <div className='ItemList'>
      <div className='list'>
        {allAndCart.map(item => (
          <Item key={item.id} id={item.id} info={item.body} isInCart={item.isInCart} />
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
