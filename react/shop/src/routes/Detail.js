/* eslint-disable jsx-a11y/heading-has-content */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { addItem } from '../store/cartSlice'
import { useDispatch } from "react-redux"

function Detail(props) {
  let { SKU } = useParams();
  let item = props.shoes.find(x => x.id == SKU); // === 하면 오류남. 꼭 == 로!
  // console.log('item.id', item.id)
  let [tab, setTab] = useState(0);
  let dispatch = useDispatch();

  useEffect(() => {
    //App.js에서 셋한 쿠키를 Detail 페이지 접속할 때 겟하기
    let pulled = localStorage.getItem('watched'); //로컬 스토리지에서 꺼낸거
          console.log('1. pulled: ', pulled)
    pulled = JSON.parse(pulled)
          console.log('2. parsed: ', pulled)
    pulled.push(item.id);
          console.log('3. pushed: ', pulled)
    localStorage.setItem('watched: ', JSON.stringify(pulled))
          console.log('4. stringified: ', pulled)
   //Set으로 바꿨다가 다시 array로 만들기: if 쓰기 귀찮을 때. Set 은 중복을 알아서  제거해주는 array.
    pulled = new Set(pulled); //Set(1) {2}
          console.log('5. new Set: ', pulled)
    pulled = Array.from(pulled); //[2]
    console.log('6. Array.from: ', pulled)
  // TODO: 
  // 1. Detail 메인에 각 제품 이미지 뜨는 것
  // 2. 코드 있을 될 때만 컴파일 다시 돼면서 콘솔로그랑 로컬스토리지 업데이트 됌.
  // 3. deatili/2 처럼 다른 모델로 갈 때는 업데이트 안돼고 현재 보는 상품만 뜸. 
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