import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap'

function Detail4(props) {
  let [탭, 탭변경] = useState(0)
  let { id } = useParams();
  let [alert, setAlert] = useState(true);
  let [tab, setTab] = useState(0)

  useEffect(() => {
    let a = setTimeout(() => { }, 2000)
    return () => {
      clearTimeout(a);
    }
  }, [])

  return (
    <div className="container">
      {alert === true ?
        <div className="alert alert-warning">
          2초이내 구매시 할인
        </div>
        : null
      }

      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" alt="shoes1" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{item.title}</h4>
          <p>{item.content}</p>
          <p>{item.price} 원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
      
      

  )
}

function TabContent(props) {
  if (props.탭 === 0) {
    return <div>내용0</div>
  }
  if (props.탭 === 1) {
    return <div>내용1</div>
  }
  if (props.탭 === 2) {
    return <div>내용2</div>
  }
}

<Nav variant="tabs" defaultActiveKey="link0">
  <Nav.Item>
    <Nav.Link onClick={() => { 탭변경(0) }} eventKey="link0">버튼0</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link onClick={() => { 탭변경(1) }} eventKey="link1">버튼1</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link onClick={() => { 탭변경(2) }} eventKey="link2">버튼2</Nav.Link>
  </Nav.Item>
</Nav>
export default Detail4