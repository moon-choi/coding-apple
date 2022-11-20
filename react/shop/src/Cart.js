import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import { changeName, increase } from "./../store/userSlice.js"

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
        dispatch(increase())
      }}>Add One</button>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {
            state.cart.map((a, i) =>
              <tr key={i}>
                <td>1</td>
                <td>{state.cart[i].name}</td>
                <td>{state.cart[i].count}</td>
                <td>안녕</td>
              </tr>
            )
          }
        </tbody>
      </Table>

    </>
  )
}
export default Cart