import { Table } from 'react-bootstrap'
import { useSelector } from "react-redux"

function Cart() {
  let a = useSelector((state) => { return state })
  let b = useSelector((state) => state.user); //advanced version
  console.log(a) //{"user": "kim"}
  console.log(b) //kim

  return (
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
        <tr>
          <td>1</td>
          <td>안녕</td>
          <td>안녕</td>
          <td>안녕</td>
        </tr>
      </tbody>
    </Table>
  )
}
export default Cart