import data from './data.js';
import { Routes, Route, Outlet } from 'react-router-dom'
import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Detail from "./routes/Detail.js";
import Detail4 from "./routes/Detail4.js";
import bg from "./bg.png";
import axios from 'axios'
export let StockContext = React.createContext(); //context 는 state 보관함

function App() {
  let [재고, 재고변경] = useState([10, 11, 12]);
  let [shoes, setShoes] = useState(data); //initial: shoes - data,json array of objects.

  return (
    <>
      <div>
        <StockContext.Provider value={{ 재고, shoes }}>
          <Detail shoes={shoes} />
        </StockContext.Provider>
      </div>

      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bg + ")" }}
      ></div>

      <div>
        
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/features">Features</Nav.Link>
              <Nav.Link href="/pricing">Pricing</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/detail">Detail</Nav.Link>
              {/* <Nav.Link href="/detail2">Detail2</Nav.Link> */}
              {/* <Nav.Link href="/detail3">Detail3</Nav.Link>  */}
              {/* <Nav.Link href="/detail4">Detail4</Nav.Link> */}
            </Nav>
          </Container>
        </Navbar>
      </div>

      {/* 라우트: 페이지 나누기 */}
      <Routes>
        <Route path="/" element={
          <>
            <h3>메인페이지임</h3>
            <div className="container">
              <div className="row">
                {shoes.map((a, i) => { //shoes는 array.
                  return <Card shoe={shoes[i]} index={i} ></Card>
                })}
              </div>
            </div>
          </>
        } />

        <Route path="/about" element={<About />} >
          <Route path="member" element={<div>멤버들</div>} />
          <Route path="location" element={<div>회사위치</div>} />
        </Route>

        <Route path="/event" element={<Event />} >
          <Route path="one" element={<div><p>첫 주문시 양배추즙 서비스</p></div>} />
          <Route path="two" element={<div><p>생일기념 쿠폰받기</p></div>} />
        </Route>
        <Route path="/detail/:id" element={<><div>디테일페이지임</div>
          <Detail shoes={shoes} /></>} />
        <Route path="*" element={<div>없는페이지임</div>} />
      </Routes>

      <div className="App">
        <button onClick={() => {
          axios.get('https://codingapple1.github.io/shop/data2.json').then((result) => {
            console.log(result.data) //result는 [ {}, {}, {} ... ]
            let copy = [...shoes, ...result.data]
            //array 변경은 항상 복사본을 만든 뒤에!
            // ...는 괄호를 벗김.
            setShoes(copy)
          })
            .catch(() => {
              console.log('실패함')
            })
        }}>버튼</button>
        {/* 누르면 3개 더로드 */}

      </div>
    </>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" alt="shoes1" />
      <h4>{props.shoe.title}</h4>
      <p>{props.shoe.price}</p>
    </div>
  )
}

function About() {
  return (
    <div>
      <h4>about페이지임</h4>
      <Outlet />
      {/* 여기에 div 보여줌 */}
    </div>
  )
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet />
      {/* 여기에 div 보여줌 */}
    </div>
  )
}
export default App;
