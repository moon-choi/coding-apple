import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice'

let cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ],
  reducers: {
    addItem(state) {
      const item3 = { id: 3, name: 'Red and Blue', count: 1 }
      return state + item3
    }
  }
})


//=============================================================

//state 등록 - 모든 컴포넌트가 자유롭게 사용 가능
export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  }
}) 

export let { addItem } = cart.actions