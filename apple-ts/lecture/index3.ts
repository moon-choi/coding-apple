// HTML 찾고 변경해보기

//   < h4 > 제목을 다른 글자로 변경해봅시다.
// let 제목 = document.querySelector('#title');
// 제목.innerHTML = '반갑소'
// 이러면 원래 변경되어야하는데 타입스크립트는 에러를 내줍니다. 

// "제목이라는 변수가 null일 수 있습니다"
// 아까 켜놨던 strict 옵션 덕분에 이런 에러를 내주는데
// 이유는 셀렉터로 html을 찾으면 타입이 Element | null 이기 때문에 그렇습니다.
// (html을 못찾을 경우 null이 됩니다)

// 해결책1.narrowing 하면 됩니다.

let 제목 = document.querySelector('#title');
if (제목 != null) {
  제목.innerHTML = '반갑소'
}
// 멋있게 else문도 추가하면 더 완벽한 코드가 되겠군요.

// 해결책2.(BEST) instanceof 사용하는 narrowing 방법도 있습니다.

// let 제목 = document.querySelector('#title');
// if (제목 instanceof HTMLElement) {
//   제목.innerHTML = '반갑소'
// }
// instanceof 라는 연산자를 쓰는 것인데 우측에 HTMLElement 입력하면 그 타입인지 체크해줍니다.

// 해결책3.assertion 써도 될듯요

// let 제목 = document.querySelector('#title') as HTMLElement;
// 제목.innerHTML = '반갑소'

// as 키워드를 쓰면 타입을 구라칠 수 있다고 배웠습니다.

// HTMLElement 혹은 그냥 Element 이걸로 구라치면 됩니다. 

// 물론 좋지 않은 임시 땜빵문법이 맞습니다.

// 해결책4.optional chaining 연산자

// let 제목 = document.querySelector('#title');
// if (제목?.innerHTML != undefined) {
//   제목.innerHTML = '반갑소'
// }
// 이건 몰라도 되는데 가끔 innerHTML 작성할 때 엔터키로 자동완성시키면?.이런 연산자가 자동으로 붙습니다.

// js 신문법인데 뭔 뜻이냐면 왼쪽에 있는 object 자료안에.innerHTML이 존재하면 그거 써주시고 없으면 undefined 남기셈~입니다. 

// 그래서 가끔?.연산자로 해결할 때도 있습니다.

