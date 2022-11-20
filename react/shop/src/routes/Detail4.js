import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap'

function Detail4(props) {
  let { id } = useParams();
  let item = props.shoes.find(x => x["id"] == id); // === 하면 오류남. 꼭 ==로!
  let [alert, setAlert] = useState(true);
  let [탭, 탭변경] = useState(0);
  let [fade2, setFade2] = useState('');

  useEffect(() => {
    let a = setTimeout(() => { setAlert(false) }, 2000)
    setFade2('end');

    return () => {
      clearTimeout(a);
      setFade2('');
    }
  }, [])

  return (
    
    <div className={'container start' + fade2}>
      {
        alert === true ?
          <div className="alert alert-warning">
            2초이내 구매시 할인
          </div>
          : null
      }
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" alt="shoes1" />
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{item.title}</h4>
            <p>{item.content}</p>
            <p>{item.price} 원</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>

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

        <TabContent 탭={탭} />
      </div>
    </div>
  )
}

function TabContent(props) {
  let [fade, setFade] = useState('')
  useEffect(() => {
    setTimeout(() => { setFade('end') }, 100)
    return () => {
      setFade('') // clean up function
      // fade라는 state를 공백으로 바꾸라고 했으니 useEffect 실행 전엔 'end'가 '' 이걸로 바뀝니다.
    }
  }, [props.탭]) //"탭이라는 state가 변할 때 end를 저기 부착해주세요"s

  return (
    <div className={'start ' + fade}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.탭]}
    </div>
  )
}
// 아니면 function TabContent({탭}){
// return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]
// }

export default Detail4