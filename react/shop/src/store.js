import { configureStore, createSlice } from '@reduxjs/toolkit'

//state 생성
let user = createSlice({
  name: 'user',
  initialState: 'kim'
})

//state 등록 - 모든 컴포넌트가 자유롭게 사용 가능
export default configureStore({
  reducer: {
    user: user.reducer
  }
}) 