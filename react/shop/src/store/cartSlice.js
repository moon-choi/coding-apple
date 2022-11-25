import { createSlice } from "@reduxjs/toolkit"

let cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ],
  reducers: {
    addItem(state, action) {
      // const item3 = { id: 3, name: 'Red and Blue', count: 1 }
      state.push(action.payload)
    },
    addCount(state, action) {
      // state[action.payload].count++ //초보레벨

      let i = state.findIndex(x => x.id === action.payload)
      state[i].count++  //상급레벨
    },
    subtractCount(state, action) {
      let i = state.findIndex(x => x.id === action.payload)
      state[i].count--
    },
  }
})

export let { addItem, addCount, subtractCount } = cart.actions
export default cart