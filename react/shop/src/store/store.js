import { configureStore } from '@reduxjs/toolkit'
import user from './userSlice'
import cart from './cartSlice'

//state 등록 - 모든 컴포넌트가 자유롭게 사용 가능
export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  }
})

