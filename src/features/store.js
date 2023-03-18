import { configureStore } from '@reduxjs/toolkit'
//rename this acc to your slice name
import counterSlice from './counterSlice'
// remove below 1 line if you don't have API slice
import { recipeApi } from './APISlice'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    // remove below 1 line if you don't have API slice
    [recipeApi.reducerPath]: recipeApi.reducer,
  },
  // remove below 2 lines if you don't have API slice
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipeApi.middleware),
})

setupListeners(store.dispatch)
