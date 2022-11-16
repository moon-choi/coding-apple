import { configureStore, createSlice } from '@reduxjs/toolkit'

//state 생성
let user = createSlice({
  name: 'user',
  initialState: 'kim'
})

let cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ]
})

//state 등록 - 모든 컴포넌트가 자유롭게 사용 가능
export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  }
}) 