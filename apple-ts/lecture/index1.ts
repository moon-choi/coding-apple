// var 이름 = 'kim';

// let 이름: string[] = ['kim', 'park']
// let 나이: { age: number } = { age: number }

// let 이름: string | number = 'kim';

// type nameType = string | number;
// let 이름: nameType = 'kim';

// function 함수명(x: number): number {
//   return x * 2
// }

let age: number = 31;
let hometown: string = 'seoul';
let myName: string = 'moon';

let user: string = 'kim';
let age2: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user, age, married];

let 학교: {
  score: (number | boolean)[],
  teacher: string,
  friend: string | string[]
}
  = {
  score: [100, 97, 84],
  teacher: 'Phil',
  friend: 'John'
}
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher]

//

const nameFinder = function (name?: string): void {
  if (name) {
    console.log('hi')
  } else {
    console.log('nothing')
  }
}

//

const digitCounter = function (x: number | string): number {
  return x.toString().length;
}

//

const marriageCalculator = function (income: number, house: boolean, charm: string): string | void {
  let score: number = 0;
  score += income;

  if (house) {
    score += 500;
  }

  if (charm === 'high') {
    score += 100;
  }

  if (score >= 600) {
    return 'marriage'
  }
}
console.log(marriageCalculator(100, true, 'high'))

// Type Narrowing  

// function 내함수(x :number | string){
//    return x + 1  //에러남 
// } //doesn't work


// defensive coding

function 내함수(x: number | string) {
  if (typeof x === 'number') {
    return x + 1
  }
  else if (typeof x === 'string') {
    return x + 1
  }
  else {
    return 0
  }
}

function 내함수2(x: number | string) {
  return (x as number) + 1
}
console.log(내함수(123))

// 

function converter(a: (string | number)[]) {
  let converted = [];
  a.forEach((e) => {
    if (typeof e === 'string') {
      converted.push(Number(e))
    } else {
      converted.push(e)
    }
  })
  return converted;
}

//

function lastSubject(o: { subject: string | string[] }) {
  if (typeof o.subject === 'object') {
    return o.subject[o.subject.length - 1]
  } else if (typeof o.subject === 'string') {
    return o.subject
  } else {
    return null;
  }
}
console.log(lastSubject({ subject: ['science', 'art', 'korean'] }))

// 

type Animal = string | number | undefined;
let 동물: Animal;

type 사람 = {
  name: string,
  age: number,
}

let teacher: 사람 = { name: 'john', age: 20 }

// 만약에 위처럼 안쓰면 이렇게 해야함. 
// let teacher :{
//   name : string,
//   age : number,
// } = { name : 'john', age : 20 } 

const 여친 = {
  name: '엠버'
}
여친.name = '유라';  //const 변수지만 에러안남

type Girlfriend = {
  readonly name: string,
}

let 여친2: Girlfriend = {
  name: '엠버'
}

// 여친2.name = '유라' //readonly라서 에러남

// 
type Square = {
  color?: string, //물음표는 "undefined 라는 타입도 가질 수 있다~"라는 뜻임을 잘 기억해둡시다.
  width: number,
}

let 네모2: Square = {
  width: 100
}

// 

type Name = string;
type Age = number;
type NewOne = Name | Age;

// 

type PositionX = { x: number };
type PositionY = { y: number };
type XandY = PositionX & PositionY
let 좌표: XandY = { x: 1, y: 2 }

// 

type MyType = {
  color?: string,
  size: number,
  readonly position: number[]
}

let test: MyType = {
  size: 123,
  position: [1, 2, 3]
}
console.log(test)

//

type Valid = {
  name?: string,
  phone: number,
  email?: string
}

type Adult = {
  adult?: boolean
}

type ValidAdult = Valid & Adult

let person: Valid = { name: 'kim', phone: 123, email: 'abc@naver.com' }

//

let person2: ValidAdult = { name: 'kim', phone: 123, email: 'abc@naver.com', adult: false }

//

function 가위바위보(x: '가위' | '바위' | '보'): ('가위' | '바위' | '보')[] {
  return ['가위']
}

//

let 방향: 'left' | 'right';
방향 = 'left';

//

function 함수(a: 'hello'): 1 | 0 | -1 {
  return 1
}

const 변하면안되는변수 = 123;
const 가끔변하는변수 = 'kim' | 'park' //이런 식의 문법은 자바스크립트에 없음

//

var 자료 = {
  name: 'kim'
} as const; // 자료.name 이라는건 string 타입이지 'kim' 타입이 아니기 때문에 as const 없으면 에러남. 

function 내함수3(a: 'kim') {

}
내함수3(자료.name)

// as const는 효과가 2개인데

// 1. 타입을 object의 value로 바꿔줍니다. (타입을 'kim'으로 바꿔줍니다)
// 2. object안에 있는 모든 속성을 readonly로 바꿔줍니다 (변경하면 에러나게)
// object를 잠그고 싶으면 as const를 활용해보도록 합시다.

//

type 함수타입 = (a: string) => number; // 무조건 넘버 리턴. 

//type alias 부착하려면 function expression 으로 써야. 
// function 함수4 () {} <- function declaration.

let 함수4 = function () {

}

let 회원정보 = {
  name: 'kim',
  plusOne(a: number) {
    return a + 1
  },
  changeName: () => {
    console.log('안녕')
  }
}

console.log(회원정보.plusOne(2))
console.log(회원정보.changeName())

// plusOne 그리고 changeName 함수를 object 자료에 집어넣었습니다.
// arrow function, 일반함수 전부 object 안에 맘대로 집어넣을 수 있습니다. 

type memberInfo = {
  name: string,
  plusOne: (x: number) => number,
  changeName: () => void
}


//function 함수이름 :NumOut (){} 쓰면 타입 지정 불가!
type NumOut = (x: number, y: number) => number
let ABC: NumOut = function (x, y) {
  return x + y
}

// class는 간단히 말하면 object 복사기계.

class Person {
  data: number = 0;
  name: string;
  age: number;
  // ^constructor 에서 쓰려면 미리 필드값으로 만들어줘야함. 
  constructor(a: string) {
    this.name = a
    this.age = 20;
    // 함수 문법 중에 기본 파라미터 이런게 있습니다 (default parameter)
    // 파라미터에 값을 입력 안하면 자동으로 할당해주는 그런걸 지정가능. 
    // 문법: 파라미터 = 자료.
  }
}

let john = new Person('john');
// john.data = '1';  //이제 문자할당시 에러남
john.data = 1 //에러안남
let kim = new Person('kim');

console.log(john.data);
console.log(kim.data);


class Car {
  model: string;
  price: number;

  constructor(a: string, b: number) {
    this.model = a;
    this.price = b;

  }

  tax(): number {
    return this.price / 10
  };

}

let car1 = new Car('소나타', 3000)

console.log(car1) //콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()) //콘솔창 출력결과는 300

function tax() {
  throw new Error("Function not implemented.");
}

//

class Word {
  num;
  str;

  constructor(...param) { //정확히 parameter 가 몇개인지 모를 때 rest parameter.
    let numbers: number[] = [];
    let strings: string[] = [];

    param.forEach((i) => {
      if (typeof i === 'string') {
        strings.push(i)
      } else {
        numbers.push(i)
      }
    });
  };
};

let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num) //[3,5]
console.log(obj.str) //['kim', 'park'] 

