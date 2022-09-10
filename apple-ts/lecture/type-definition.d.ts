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

//

// export 없이 d.ts 파일을 글로벌 모듈 만들기

 
// 원래 d.ts 파일은 import export 없어도 로컬모듈입니다.

// 그래서 다른 ts파일에서 import를 해서 쓸 수 밖에 없는데

// 이게 귀찮으면 d.ts를 글로벌 모듈로 만들어보십시오.  

// 파일이 많아지면 섞이기 때문에 굳이 왜 하나 싶지만 

// 프로젝트 내에 types / common 이런 폴더 두개를 만드시고

// tsconfig.json 파일에 "typeRoots": ["./types"] 이런 옵션을 추가해주면 됩니다.

// 이러면 ts 파일 작성할 때 타입없으면 자동으로 여기서 타입 찾아서 적용해줌

//   - 다만 이걸 쓸 경우 파일명.d.ts 자동생성 기능은 끄는게 좋을 듯 합니다. 

// - d.ts 파일명은 기존 ts 파일명과 안겹치게 작성하는게 좋습니다. 

// - 하지만 이런거 쓰다가 로컬 타입과 저런 글로벌 타입이 겹치면 어쩌쥬 역시 import export가 안전합니다. 