1. 컴포넌트 안에서 쓰는 if/else
function Component() {
  if ( true ) {
    return <p>참이면 보여줄 HTML</p>;
  } 
  return null;
}

2. JSX안에서 쓰는 삼항연산자 (ternary operator)
function Component() {
  return (
    <div>
      {
        1 === 1
        ? <p>참이면 보여줄 HTML</p>
        : null
      }
    </div>
  )
}


3. && 연산자로 if 역할 대신하기
true && '안녕'; //안녕
false && '안녕'; //false
true && false && '안녕'; //false
왜냐면 && 연산자를 잘 생각해보면 이해도 가능한데 이해를 하기 싫으면
“자바스크립트는 그냥 &&로 연결된 값들 중에 처음 등장하는 falsy 값을 찾아주고 그게 아니면 마지막값을 남겨준다”
이런 이상한 현상이 있다고 외우면 됩니다.
이걸 리액트에서 약간 exploit 하면 if문을 조금 더 간략하게 쓸 수 있습니다. (edited) 

function Component() {
  return (
    <div>
      {
        1 === 1
        ? <p>참이면 보여줄 HTML</p>
        : null
      }
    </div>
  )
}

function Component() {
  return (
    <div>
      { 1 === 1 && <p>참이면 보여줄 HTML</p> }
    </div>
  )
}
그래서 위의 예제 두개는 동일한 역할을 합니다.
밑의 예제를 보시면 && 연산자로 조건식과 오른쪽 JSX 자료를 비교하고 있습니다.
이 때, 왼쪽 조건식이 true면 오른쪽 JSX가 그 자리에 남습니다.
왼쪽 조건식이 false면 false가 남습니다.
(false가 남으면 HTML로 렌더링하지 않습니다)


4. switch / case 조건문
function Component2(){
  var user = 'seller';
  switch (user){
    case 'seller' :
      return <h4>판매자 로그인</h4>
    case 'customer' :
      return <h4>구매자 로그인</h4>
    default : 
      return <h4>그냥 로그인</h4>
  }
}
장점은 if문 연달아쓸 때 코드가 약간 줄어들 수 있는데
조건식란에서 변수하나만 검사할 수 있다는게 단점입니다. (edited) 

5. object/array 자료형 응용
function Component() {
  var 현재상태 = 'info';
  return (
    <div>
      {
        { 
           info : <p>상품정보</p>,
           shipping : <p>배송관련</p>,
           refund : <p>환불약관</p>
        }[현재상태]
      }

    </div>
  )
}

var 탭UI = { 
  info : <p>상품정보</p>,
  shipping : <p>배송관련</p>,
  refund : <p>환불약관</p>
}

function Component() {
  var 현재상태 = 'info';
  return (
    <div>
      {
        탭UI[현재상태]
      }
    </div>
  )
}