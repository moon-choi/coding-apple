/* eslint-disable jsx-a11y/alt-text */
import { Routes, Route } from "react-router-dom";
import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
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
      <div>
        <div
          className="main-bg"
          style={{ backgroundImage: "url(" + bg + ")" }}
        ></div>
      </div>

      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>

      <div className="container">
        <div className="row">
          <Card shoe={shoes[0]} i={1} />
          <Card shoe={shoes[1]} i={2} />
          <Card shoe={shoes[2]} i={3} />

          {/* {shoes.map((a, i) => {
            return <Card shoes={shoes[i]} i={i} ></Card>
          })} */}
        </div>
      </div> 
      <div className="App">
        <Routes>
          <Route path="/detail" element={<Detail />} />
          <Route path="/about" element={<div>어바웃페이지임</div>} />
        </Routes>
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
