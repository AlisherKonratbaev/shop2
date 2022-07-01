import { configureStore } from '@reduxjs/toolkit'

import productSlice from './productSlice';
import categorySlice from './categorySlice';
import paginationSlice from './paginationSlice';
import detailSlice from './detailSlice';
import {composeWithDevTools} from "redux-devtools-extension"
export const store = configureStore({
  reducer: {
      product: productSlice,
      category: categorySlice,
      pagination: paginationSlice,
      detail: detailSlice,
  },
})