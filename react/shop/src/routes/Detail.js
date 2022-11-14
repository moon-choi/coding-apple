import { useContext } from 'react';
import { StockContext } from './../App.js';

function Detail() {
  let { 재고 } = useContext(StockContext)

  return (
    <>
      <div className="col-md-6 mt-4">
        <button className="btn btn-danger">주문하기</button>
      </div>
      <div>Currently remaining: {재고}</div>
    </>
  )
}

export default Detail