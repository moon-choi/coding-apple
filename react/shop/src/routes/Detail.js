import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { addItem, addCount } from '../store/cartSlice'
import { useDispatch } from "react-redux"

function Detail(props) {
  const { SKU } = useParams();
  console.log('SKU', SKU)
  let [tab, setTab] = useState(0);
  let dispatch = useDispatch();
  let item = props.shoes.find(x => x['id'] == SKU); // === 하면 오류남. 꼭 ==로!
  
  console.log('props.shoes', props.shoes)
  console.log('typeof', typeof item) //object.
  console.log('item', item)

  // let { stock } = useContext(StockContext) //이 문법은 외우자.

  // return (
  //   <>
  //     <div className="col-md-6 mt-4">
  //       <div>Currently remaining: {stock}</div>
  //       <button className="btn btn-danger" onClick={addItem}>Order now!</button>
  //     </div >
  //   </>
  // )




  return (
    <>
      <div className="row mb-5">
        <div className="col-md-6" >
          <h4 className="pt-5"></h4>
          {/* <p>{item.content}</p>
          <p>{item.price}원</p> */}
          <button className="btn btn-danger" onClick={() => {
            dispatch(addItem({ id: 1, name: 'Red Knit', count: 1 }))
          }}>Let's order!</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(0) }} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(1) }} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(2) }} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </>
  )
}

function TabContent(props) {
  let [fade, setFade] = useState('')
  useEffect(() => {
    setTimeout(() => { setFade('end') }, 100)
    return () => {
      setFade('')
    }
  }, [props.탭])

  return (
    <div className={'start ' + fade}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.탭]}
    </div>
  )
}


export default Detail