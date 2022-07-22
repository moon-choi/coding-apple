import { Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'
import Detail from './routes/Detail.js'
import './App.css';
import data from './data.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap'

function App() {

  let [shoes] = useState(data);
  return (
    <>
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
      <div className="App">
        (생략)
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
              <h4>{shoes[0].title}</h4>
              <p>{shoes[0].price}</p>
            </div>
            <div className="col-md-4">
              <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%" />
              <h4>상품명</h4>
              <p>상품정보</p>
            </div>
            <div className="col-md-4">
              <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" />
              <h4>상품명</h4>
              <p>상품정보</p>
            </div>
          </div>
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

export default App;
