import { useState, useEffect } from 'react';
import styled from 'styled-components'

function Detail2() {
  let [count, setCount] = useState(0)
  let [alert, setAlert] = useState(true)

  // 여기적은 코드는 컴포넌트 로드 & 업데이트 마다 실행됨
  useEffect(() => {

// 리로드 할때마다 사라져야 하니까 false 설정을 타임아웃 안에 해야함.
    let a = setTimeout(() => { setAlert(false) }, 2000)
    console.log('turn 2') // < QUESTION. 이거 왜 run? 2 - 1 - 2 - 1 - 2 ..

    return () => {
      console.log('turn 1')
      // 리턴 안에 오는 것은 useEffect 동작 전에 실행됌.
      // 1. 주로 cleanup function. 보통 timer 를 변수에 저장한다음에 clearTimeout안에 변수로 넣어줌.
      clearTimeout(a) // < mount 될 때: 실행 됌. unmount 될 때 (컴포넌트 삭제될 때, 다른 페이지로 넘어갈 때): 실행 안됌.
      // 2. 기존 서버 요청 제거할 때.
    }
  }); //dependency: count 변할때 && 처음 로드될 때 실행하고 지나감.

  return (
    <div className="container">
      {
        alert === true
          ? <div className="alert alert-warning">
            2초이내 구매시 할인
          </div>
          : null
      }
      <button onClick={() => { setCount(count + 1); }}>버튼</button>
    </div> // 재렌더링시에도 진짜 '안녕' 출력되나 테스트해보려고 버튼누르면 재렌더링되게 코드짜봤습니다. 
  );
};

export default Detail2