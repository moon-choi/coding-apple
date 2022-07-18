import React from 'react';
import logo from './logo.svg';
import './App.css';
      
let 박스: JSX.Element = <div></div>
let 버튼: JSX.Element = <button></button>

type AppProps = {
  name: string;
}; 

function App() {
  
  return (
  <>
    <div>{박스}</div>
    <div>{버튼}</div>    
    <Profile name="moon" age="31"></Profile>
  </>
  );
}

function Profile(props: {name :string, age :string}) :JSX.Element {
  return (
    <div>{props.name}프로필입니다.</div>
)
}



export default App;
