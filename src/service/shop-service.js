import {
  updateLoadState,
  updateProducts,
  updateSigleItem,
} from '../store/reducers/storeDataSlice'

const _apiBase = 'https://dummyjson.com'

const getResourse = async url => {
  const res = await fetch(`${_apiBase}${url}`)

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, received ${res.status}`)
  }

  return await res.json()
}

const getAllProducts = async (skip, limit, dispatch) => {
  dispatch(updateLoadState(1))
  const res = await getResourse(`/products?skip=${skip}&limit=${limit}`)
  dispatch(updateLoadState(2))
  dispatch(updateProducts(res.products.map(_transformProducts)))
}

const getSingleItem = async (id, dispatch) => {
  dispatch(updateLoadState(1))
  const item = await getResourse(`/products/${id}`)
  dispatch(updateLoadState(2))
  dispatch(updateSigleItem(_transformSingleItem(item)))
}

const getProductsByCategory = async (category, dispatch) => {
  dispatch(updateLoadState(1))
  const res = await getResourse(`/products/category/${category}`)
  dispatch(updateLoadState(2))
  dispatch(updateProducts(res.products.map(_transformProducts)))
}

const getCategories = async () => {
  const res = await getResourse('/products/categories')
  return res
}

const _transformSingleItem = product => {
  return {
    id: product.id,
    body: {
      title: product.title,
      price: product.price,
      rating: product.rating,
      discountPercentage: 1 + product.discountPercentage / 100,
      images: product.images,
      brand: product.brand,
      category: product.category,
      description: product.description,
      stock: product.stock,
    },
  }
}

const _transformProducts = product => {
  return {
    id: product.id,
    body: {
      title: product.title,
      price: product.price,
      rating: product.rating,
      discountPercentage: 1 + product.discountPercentage / 100,
      imageUrl: product.images[0],
    },
  }
}

export { getAllProducts, getSingleItem, getProductsByCategory, getCategories }
