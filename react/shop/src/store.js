import { configureStore, createSlice } from '@reduxjs/toolkit'


//state 생성
let user = createSlice({
  name: 'user',
  initialState: 'kim'
})

//state 등록
export default configureStore({
  reducer: {
    user: user.reducer
  }
}) 