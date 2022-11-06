import { useState, useEffect } from 'react';
import styled from 'styled-components'

function Detail2() {
//   let Box = styled.div`
//   padding : 20px;
//   color : yellow;
// `;
  useEffect(() => {
    //여기적은 코드는 컴포넌트 로드 & 업데이트 마다 실행됨
    console.log('안녕')

    // setTimeout(() => {
    //   Box.display: NamedNodeMap;
    // }, 2000)

  });

  let [count, setCount] = useState(0)
  let [hideBox, setHideBox] = useState()
  return (
    <button onClick={() => { setCount(count + 1) }}>버튼</button>
    // 재렌더링시에도 진짜 '안녕' 출력되나 테스트해보려고 
    // 버튼누르면 재렌더링되게 코드짜봤습니다.
  )
};

export default Detail2