import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getProductsByCategory } from '../../service/shop-service'
import { btnEvent } from '../events/event'

import './item-list.css'

const ItemList = () => {
  const products = useSelector(store => store.storeData.products)
  const [items, setItems] = useState(products)
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState('all') // w
  const dispatch = useDispatch()

  useEffect(() => {
    if(category == 'all'){
      getAllProducts(0, 20, dispatch)
    }
    getProductsByCategory(category, dispatch)
  }, [category])

  useEffect(() => {
    getAllProducts(page * 20 - 20, page * 20, dispatch)
  }, [page])

  useEffect(() => {
    btnEvent.addListener('onChangeCategory', c => setCategory(c))
  }, [])

  

  return <div className='ItemList'>ItemList</div>
}

export default ItemList
