import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dataLoadState: 0, // 0 - is loading, 1 - loaded
  products: [],
  singleItem: {
    id: -1,
    body: {
      title: '',
      price: null,
      rating: null,
      discountPercentage: null,
      images: [],
      brand: '',
      category: '',
      description: '',
      stock: null,
    },
  },
  user: { isEntered: false, name: '' },
  cart: [],
}

export const storeDataSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    updateLoadState: (state, action) => {
      state.dataLoadState = action.payload
    },

    updateProducts: (state, action) => {
      state.products = action.payload
    },

    updateSigleItem: (state, action) => {
      state.singleItem = action.payload
    },

    addUser: (state, action) => {
      state.user = { isEntered: true, name: action.payload }
    },

    addItemCart: (state, action) => {
      if (state.cart.some(item => item.id === action.payload.id)) {
        state.cart.find(item => item.id === action.payload.id).count++
      } else state.cart.push(action.payload)
    },

    decItemCart: (state, action) => {
      if (state.cart.find(item => item.id === action.payload).count == 1) {
        const indx = state.cart.findIndex(item => item.id === action.payload)
        state.cart.splice(indx, 1)
      } else state.cart.find(item => item.id === action.payload).count--
    },

    removeItemCart: (state, action) => {
      const indx = state.cart.findIndex(item => item.id === action.payload)
      state.cart.splice(indx, 1)
    }
  },
})

export const {
  updateLoadState,
  updateProducts,
  updateSigleItem,
  addItemCart,
  decItemCart,
  removeItemCart,
  addUser,
} = storeDataSlice.actions

export default storeDataSlice.reducer
