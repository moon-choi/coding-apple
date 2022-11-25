import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import { changeName, increase } from "./store/userSlice"
import { addCount, subtractCount, addItem } from './store/cartSlice'

function Cart() {
  const dispatch = useDispatch()
  let state = useSelector((state) => state)
  let a = useSelector((state) => { return state }) //key-value pair
  let b = useSelector((state) => state.user);//just the value
  console.log(a) //{"user": "kim"}
  console.log(b) //kim

  return (
    <>
      <button onClick={() => {
        dispatch(changeName())
      }}>Change Name</button>
      <button onClick={() => {
        dispatch(increase(100))
      }}>Add Number</button>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Number</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {
            state.cart.map((a, i) =>
              <tr key={i}>
                <td>{i}</td>
                <td>{state.cart[i].name}</td>
                <td>
                  <button onClick={() => {
                    const ID = state.cart[i].id
                    dispatch(subtractCount(ID)) //버튼누르면 이렇게 옆에있던 상품 id를 payload로 전송해 주세요.
                  }}> - </button> 
                  {state.cart[i].count}
                  <button onClick={() => {
                    const ID = state.cart[i].id
                    dispatch(addCount(ID)) //버튼누르면 이렇게 옆에있던 상품 id를 payload로 전송해 주세요.
                  }}> + </button> 

                </td>
                <td>awesome shoes</td>
              </tr>
            )
          }
        </tbody>
      </Table>

    </>
  )
}
export default Cart