/* eslint-disable jsx-a11y/alt-text */
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import React, { useState } from "react";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Detail from "./routes/Detail.js";
import data from "./data.js";
import bg from "./bg.png";

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate

  return (
    <>
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

            </Nav>


          </Container>
        </Navbar>
      </div>

      {/* 라우트: 페이지 나누기 나기 */}
      <Routes>
        <Route path="/" element={
          <>
            <h3>메인페이지임</h3>
            <div className="container">
              <div className="row">
                {shoes.map((a, i) => {
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
        <Route path="/detail" element={<><div>디테일페이지임</div>
          <Detail /></>} />
        <Route path="*" element={<div>없는페이지임</div>} />
      </Routes>
      <div className="App">
        

      </div>
    </>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
      <h4>{props.shoe.title}</h4>
      <p>{props.shoe.price }</p>
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
