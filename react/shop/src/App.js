/* eslint-disable jsx-a11y/alt-text */
import { Routes, Route, Link } from "react-router-dom";
import React, { Component, useState } from "react";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Detail from "./routes/Detail.js";
import data from "./data.js";
import bg from "./bg.png";

function App() {
  let [shoes] = useState(data);

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
        <Route path="/about" element={<div>어바웃페이지임</div>} />
        <Route path="/detail" element={<><div>디테일페이지임</div> <Detail/></>} />
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

export default App;
