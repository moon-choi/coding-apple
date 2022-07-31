// 이 파일은 타입만 저장할 수 있는 파일형식입니다. (그래서 definition의 약자인 d가 들어감)
// 그리고 자바스크립트로 컴파일되지 않습니다.
// 어디다 쓰냐면
// 1. 타입정의만 따로 저장해놓고 import 해서 쓰려고
// 2. 프로젝트에서 사용하는 타입을 쭉 정리해놓을 레퍼런스용으로 사용

export type Age = number;
export type multiply = (x: number, y: number) => number
export interface Person { name: string }
export interface User { name: string }


// 2. 정의해둔 타입은 export 해서 써야합니다.

//   d.ts 파일은 ts 파일이 아니기 때문에 그냥 써도 ambient module이 되지 않습니다. 

// 그래서 export를 추가해줘야 다른 ts 파일에서 가져다쓸 수 있습니다. 

// 3. 한 번에 많은 타입을 export 하고 싶은 경우 namespace에 담든가

// 아니면 자바스크립트 배운 사람처럼 import * as 어쩌구 문법을 쓰십시오. 