import data from './data.js';
import { Routes, Route, Outlet } from 'react-router-dom'
import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Cart from "./Cart.js";
import Detail from "./routes/Detail.js";
import Detail4 from "./routes/Detail4.js";
import bg from './bg.png'
import axios from 'axios'
export let StockContext = React.createContext(); //context 는 state 보관함임.

function App() {
  let [stock, setStock] = useState([10, 11, 12]);
  let [shoes, setShoes] = useState(data); //initial: shoes - data,json array of objects.

  return (
    <>
      <StockContext.Provider value={{ stock, shoes }}>
        <Detail shoes={shoes} />
      </StockContext.Provider>
      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bg + ")" }}
      ></div>

      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/features">Features</Nav.Link>
              <Nav.Link href="/pricing">Pricing</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/detail">Detail</Nav.Link>
              <Nav.Link href="/detail4">Detail4</Nav.Link>
              <Nav.Link href="/cart">Cart</Nav.Link>


            </Nav>
          </Container>
        </Navbar>
      </div>

      {/* 라우트: 페이지 나누기 */}
      <Routes>
        <Route path="/" element={
          <>
            <h3>Main page</h3>
            <div className="container">
              <div className="row">
                {/* {shoes.map((a, i) => { //shoes는 array.
                  return <Card shoe={shoes[i]} index={i} ></Card>
                })} */}
              </div>
            </div>
          </>
        } />

        <Route path="/about" element={<About />} >
          <Route path="member" element={<div>Members</div>} />
          <Route path="location" element={<div>Location</div>} />
        </Route>

        <Route path="/event" element={<Event />} >
          <Route path="one" element={<div><p>첫 주문시 양배추즙 서비스</p></div>} />
          <Route path="two" element={<div><p>생일기념 쿠폰받기</p></div>} />
        </Route>
        <Route path="/detail/:SKU" element={<><div>Detail page</div>
          <Detail shoes={shoes} /></>} />
        <Route path="/detail4/:id" element={<><div>Detail4 page</div>
          <Detail4 shoes={shoes} /></>} />

        <Route path="/cart" element={<Cart />} /> 

        <Route path="*" element={<div>Page not found</div>} />
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
        }}>Click me</button> {/* 누르면 3개 더로드 */}
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
      <h4>About page</h4>
      <Outlet />
      {/* 여기에 div 보여줌 */}
    </div>
  )
}

function Event() {
  return (
    <div>
      <h4>Today's event</h4>
      <Outlet />
      {/* 여기에 div 보여줌 */}
    </div>
  )
}
export default App;
