import { useContext } from 'react';
import { StockContext } from './../App.js';

function Detail() {
  let { stock } = useContext(StockContext) //이 문법은 외우자.

  return (
    <>
      <div className="col-md-6 mt-4">
        <div>Currently remaining: {stock}</div>
        <button className="btn btn-danger">Order now!</button>
      </div>
    </>
  )
}

export default Detail