import './App.css';
import { useState } from 'react';
      
let 박스: JSX.Element = <div></div>
let 버튼: JSX.Element = <button></button>

function App() {
  const [user, setUser] = useState<string | null>('kim'); //generic 문법

  return (
  <>
    <div>{박스}</div>
    <div>{버튼}</div>    
      <Profile name={user} age="31"></Profile>
  </>
  );
}

function Profile(props: {name :string | null, age :string}) :JSX.Element {
  return (
    <div>{props.name}프로필입니다.</div>
  )
}



export default App;
