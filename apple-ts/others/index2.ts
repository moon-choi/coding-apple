import { Age, Person } from "./type-definition"

// ...  SPREAD / REST

// 1. 괄호벗겨주는 ...spread는 array, object 자료 왼쪽에,
// 2. 여러개의 파라미터를 의미하는 ...rest는 함수선언할 때 소괄호 안에 출몰합니다. 

// rest param
// 함수 파라미터 작명할 때 점3개 붙여주면 여기엔 파라미터 잔뜩 들어올 수 있습니다~라고 정의가 가능합니다. 
// rest 파라미터는 다른 일반 파라미터 뒤에만 올 수 있습니다. 
// rest 파라미터자리에 집어넣은 값들은 전부 [ ] 안에 담겨있습니다. 출력해보시면 진짜임 

function 전부더하기(...a: number[]) {
  console.log(a)
}

전부더하기(1, 2, 3, 4, 5)


//Destrucrturing

let person5 = { student: true, age: 20 }

function 함수5({ student, age }: { student: boolean, age: number }) {
  console.log(student, age)
}

함수5({ student: true, age: 20 })

//

function maxNum(...arr: number[]) {

  let result = 0;
  arr.forEach((i) => {
    if (result < i) {
      result = i
    }
  })
  return result;
}

// object destructuring 

type UserType = { user: string, comment: number[], admin: boolean }
function 함수6({ user, comment, admin }: UserType): void {
  console.log(user, comment, admin)
} //void means no return value

함수6({ user: 'kim', comment: [3, 5, 4], admin: false })

// array destructuring 

type ArrayType = (string | number | boolean)[]
function 함수7([a, b, c]: ArrayType): void {
  console.log(a, b, c)
}
함수7([40, 'wine', false])

//
// literal type? 

// && 기호로 비교할 때 true와 false를 넣는게 아니라 자료형을 넣으면

// && 사이에서 처음 등장하는 falsy 값을 찾아주고 그게 아니면 마지막 값을 남겨줍니다.

// falsy 값은 false와 유사한 기능을 하는 null, undefined, NaN 이런 값들을 의미합니다.

1 && null && 3   // null이 남음
undefined && '안녕' && 100  // undefined 남음

if (변수 && typeof strs === "string") { }

// 이렇게 사용하면 변수가 undefined라면 undefined가 남아서 if문이 실행되지 않고,

// (if문 조건식안에 falsy 값이 남으면 if문 실행되지 않습니다)

// 변수가 string 타입이면 if문이 실행됩니다.

// 변수가 null, undefined인 경우를 쉽게 거를 수 있는 문법이라고 보면 되겠습니다. 

// 참고로 if (변수 != null) 이렇게 조건식을 써도 null, undefined 이거 두 개를 동시에 거를 수 있습니다. 

type Fish = { swim: string };
type Bird = { fly: string };
function 함수(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim
  }
  return animal.fly
}

let 날짜 = new Date();
if (날짜 instanceof Date) {
  console.log('참이에요')
}

type Car2 = {
  wheel: '4개',
  color: string
}
type Bike = {
  wheel: '2개',
  color: string
}

function 함수(x: Car2 | Bike) {
  if (x.wheel === '4개') {
    console.log('the car is ' + x.color)
  } else {
    console.log('the bike is ' + x.color)
  }
}

// never type
// void 로 대체 가능
// 그래서 1. 무언가 return 하지 않고 
// 2. 끝나지도 않는 함수를 표현하고 싶을 때 never 타입을 지정하면 되는데 
// 2번 조건의 함수를 만들 일이 거의 없기 때문에 never 타입은 쓸 일이 없습니다. 

//잘못된 narrowing을 사용했을 때 파라미터의 타입이 never로 변합니다. 파라미터에 마우스 올려보셈

// 이런 건 있을 수 없다, 일어나면 안된다고 알려주는 느낌입니다. 

// 그럴 때 never를 구경할 수 있으니 never 타입이 발견되는 경우 코드를 수정하는게 어떨까요. 

//

class User {
  public name: string;
  private familyName: string;

  constructor() {
    this.name = 'kim';
    let hello = this.familyName + '안뇽';
  }
  changeSecret() {
    this.familyName = 'park';
  }
}

let 유저1 = new User();
// 유저1.familyName = 'park';  //에러남
유저1.changeSecret()        //가능

// 두개의 코드는 같은 역할을 하는 코드입니다.
// "constructor 파라미터에 public 붙이면 this.name = name 이거 생략가능하다" 

class Person1 {
  name;
  constructor(name: string) {
    this.name = name;
  }
}
let 사람1 = new Person1('john')


class Person2 {
  constructor(public name: string) {

  }
}
let 사람2 = new Person2('john')

//
// class는 복사할 수 있습니다. 

// extends라는 문법 쓰면 다른 class 만들 때 기존 class에 있던걸 전부 복사붙여넣기 가능합니다. 

class NewUser extends User {
  'blah'
}

// protected를 달아놓으면 1. private 이거랑 똑같은데 2. extends 된 class 안에서도 사용가능하게 약간 보안을 풀어줍니다. 

class User2 {
  static x = 10;
  y = 20;
}

let jim = new User2();
// jim.x //불가능
User2.x //가능

//

class User3 {
  private static x = 10; //only inside class, not extendable to instances
  public static y = 20; //accessible outside class, not extandable to instances
  protected z = 30; //accessible outside class, extendable to instances
}

//
class User4 {
  private static x = 10;
  public static y = 20;

  static addOne(z: number) {
    User4.x += z
  }

  static printX() {
    console.log(User4.x)
  }

}

User4.addOne(3) //이렇게 하면 x가 3 더해져야함
User4.addOne(4) //이렇게 하면 x가 4 더해져야함
User4.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함


// Generic 함수
// 장점: 확장성... 자동으로 타입 인식함.

function 함수<MyType>(x: MyType[]): MyType {
  return x[0];
}
// 함수<number>( ) 이렇게 쓰는 순간 MyType 이라는 변수에 number 라는게 들어간다. 
// 함수(x : number[]) :number { } 이거랑 똑같이 동작합니다. 

let a1 = 함수<number>([4, 2])
let b1 = 함수<string>(['kim', 'park'])


// 실은 함수 사용시 꼭 <> 안써도 알아서 기본 타입을 유추해서 집어넣어줍니다. 
// 이래도 결과는 똑같습니다.

let a2 = 함수([4, 2])
let b2 = 함수(['kim', 'park'])

//Generic 타입 제한하기 (constraints)

//틀린 코드
function 함수<MyType>(x: MyType) {
  // return x - 1 //이미 경고해줌.
}

let a3 = 함수<number>(100)

//맞는 코드
function 함수<MyType extends number>(x: MyType) {
  return x - 1
}

let a4 = 함수<number>(100) //잘됩니다

//
interface lengthCheck {
  length: number
}
function 함수<MyType extends lengthCheck>(x: MyType) {
  return x.length
}

//여기서 extends 는 복사가 아니고 '오른쪽 조건을 만족하면' 임.

let a = 함수<string>('hello')  //가능
let a = 함수<number>(1234) //에러남

//숙제1

function 함수<MyType extends string | string[]>(x: MyType) {
  console.log(x.length)
}

함수<string>('hello');
함수<string[]>(['kim', 'park'])

//숙제2

interface Animal2 {
  name: string;
  age: number
}

let data = '{"name" : "dog", "age" : 1 }'

function parser<Type>(x: string): Type {
  return JSON.parse(x)
}

console.log(parser<Animal2>(data))


//숙제3

class Person3<T> {
  name;
  constructor(a: T) {
    this.name = a;
  }
}
let b = new Person3<string>('어쩌구');
b.name //string 타입이 되었넹 


//React + TS

//JSX.Element: html 타입


let 이름: string = 'kim';
let 나이 = 20;
interface Person { name: string }
let 사람: Person = { name: 'park' }

//

declare let a: number;
// 다른데에 정의가 돼있는 것을 타입스크립트에서 재정의. 


//tuple

function 함수1(...x: string[]) {
  console.log(x)
}
// 함수 정의할 때 파라미터 왼쪽에 점3개 붙이면 rest parameter라고 했습니다.

// "여기에 파라미터가 몇 개 들어올지 아직 몰라요~" 라는 뜻으로 사용하는 파라미터입니다.

// x 자리에 입력한 파라미터들은 array에 담겨오기 때문에 array 처럼 타입지정을 해주는게 일반적입니다. 

// 근데 tuple을 이용해서 타입지정을 해주는 것도 가능

// 옵션 가능
type Num = [number, number?, number?];
let 변수1: Num = [10];
let 변수2: Num = [10, 20];
let 변수3: Num = [10, 20, 10];


//array 두개를 spread 연산자로 합치는 경우 타입지정

//arr 자리에 자료 몇개가 들어올지도 모르는 상황

let arr = [1, 2, 3]
let arr2: [number, number, ...number[]] = [4, 5, ...arr]

//숙제 1
type Arr2 = [string, number, boolean]
let food: Arr2 = ['sushi', 15, true]

//숙제 2
type Arr3 = [string, number, ...boolean[]]
let arr3: Arr3 = ['동서녹차', 4000, true, false, true, true, false, true]

//숙제 3
function 함수2(...x: [string, boolean, ...(number | string)[]]) {
}

함수2('a', true, 6, 3, '1', 4)

//숙제 4
function 함수3(...rest: (string | number)[]) {

  let result: [string[], number[]] = [[], []];
  rest.forEach((x) => {
    if (typeof x === 'string') {
      result[0].push(x)
    } else {
      result[1].push(x)
    }
  })
  return result;
}

함수3('b', 5, 6, 8, 'a')


//implements

class Car1 {
  model: string;
  price: number = 1000;
  constructor(a: string) {
    this.model = a
  }
}

interface CarType {
  model: string,
  price: number
}

class Car implements CarType {
  model: string;
  price: number = 1000;
  constructor(a: string) {
    this.model = a
  }
}
let 붕붕이 = new Car1('morning');

//class 이름 우측에 implements를 쓰고 interface 이름을 쓰면

// "이 class가 이 interface에 있는 속성을 다 들고있냐" 라고 확인이 가능합니다.

// 그래서 다 갖고 있으면 별말 안해주고 혹여나 빠진 속성이 있으면 에러로 알려줍니다.

//implements라는건 interface에 들어있는 속성을 가지고 있는지 확인만하라는 뜻입니다.

//class에다가 타입을 할당하고 변형시키는 키워드는 아닙니다.

//index signatures

interface StringOnly {
  age: number,   ///가능
  [key: string]: string | number,
}

//Recursive Index Signatures

interface MyType {
  'font-size': MyType | number
}


let obj: MyType = {
  'font-size': {
    'font-size': {
      'font-size': 14
    }
  }
}