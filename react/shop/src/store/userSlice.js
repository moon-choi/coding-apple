import { createSlice } from "@reduxjs/toolkit"
//state 생성
let user = createSlice({
  name: 'user',
  initialState: { name: 'kim', age: 20 },
  reducers: {
    changeName(state) {
      return 'john ' + state
    },
    increase(state, action) {
      state.age += action.payload // parameter 에 넣은 데이터
      // - action.type 하면 state변경함수 이름이 나오고
      // - action.payload 하면 파라미터가 나옵니다. 
    }
  }
})
//slice이름.actions 라고 적으면 state 변경함수가 전부 그 자리에 출력됩니다.
//그걸 변수에 저장했다가 export 하라는 뜻일 뿐임 

export let { changeName, increase } = user.actions 
export default user