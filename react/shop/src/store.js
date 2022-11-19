import { configureStore, createSlice } from '@reduxjs/toolkit'

//state 생성
let user = createSlice({
  name: 'user',
  initialState: { name: 'kim', age: 20 },
  reducers: {
    changeName(state) {
      return 'john ' + state
    },
    increase(state) {
      state.age += 1
    }
  }
})
//slice이름.actions 라고 적으면 state 변경함수가 전부 그 자리에 출력됩니다.
//그걸 변수에 저장했다가 export 하라는 뜻일 뿐임 

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

export let { changeName, increase } = user.actions 
export let { addItem } = cart.actions