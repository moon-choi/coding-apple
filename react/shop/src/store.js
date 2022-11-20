import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice'

let cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 1, name: "Red Knit", count: 0 },
    { id: 2, name: 'Grey Yordan', count: 1 },


  ],
  reducers: {
    addItem(state) {
      const item3 = { id: 3, name: 'Red and Blue', count: 1 }
      return state + item3
    },
  addCount(state, action) {
    // state[action.payload].count++ //초보레벨

    let i = state.findIndex( x =>  x.id === action.payload)
    state[i].count++  //상급레벨
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

export let { addItem, addCount } = cart.actions