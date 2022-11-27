/* eslint-disable jsx-a11y/heading-has-content */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { addItem } from '../store/cartSlice'
import { useDispatch } from "react-redux"

function Detail(props) {
  let { SKU } = useParams();
  let [tab, setTab] = useState(0);
  let dispatch = useDispatch();
  let item = props.shoes.find(x => x["id"] == SKU); // === 하면 오류남. 꼭 == 로!

  useEffect(() => {
    let watched = JSON.parse(localStorage.getItem('watched'));
    //App에서 세팅한 쿠키를 Detail 페이지 접속할 때 읽어들이기
    watched.push(item.id);
    watched = Array.from(new Set(watched));
    localStorage.getItem('watched', JSON.stringify([watched])) 
  }, []) 

  return (
    <>
      <div className="row mb-5">
        <div className="col-md-6" >
          <h4 className="pt-5">[{item.id}] {item.title}</h4>
          <p>{item.content}</p>
          <p>{item.price} won</p>
          <button className="btn btn-danger" onClick={() => {
            dispatch(addItem({ id: item.id, name: item.title, count: 1 }))
          }}>Let's order!</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(0) }} eventKey="link0">Tab 0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(1) }} eventKey="link1">Tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(2) }} eventKey="link2">Tab 2</Nav.Link>
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
  }, [props.tab])

  return (
    <div className={'start ' + fade}>
      {[<div>Tab content 0</div>, <div>Tab content 1</div>, <div>Tab content 2</div>][props.tab]}
    </div>
  )
}


export default Detail