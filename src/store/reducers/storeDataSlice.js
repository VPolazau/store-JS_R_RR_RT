import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dataLoadState: 0, // 0 - is loading, 1 - loaded
  products: [],
  singleItem: null,
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
  },
})

export const { updateLoadState, updateProducts, updateSigleItem } = storeDataSlice.actions

export default storeDataSlice.reducer
