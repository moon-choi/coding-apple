// var 이름 = 'kim';
// let 이름: string[] = ['kim', 'park']
// let 나이: { age: number } = { age: number }
// let 이름: string | number = 'kim';
// type nameType = string | number;
// let 이름: nameType = 'kim';
// function 함수명(x: number): number {
//   return x * 2
// }

var age = 31;
var hometown = 'seoul';
var myName = 'moon';
var user = 'kim';
var age2 = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
  score: [100, 97, 84],
  teacher: 'Phil',
  friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
var nameFinder = function (name) {
  if (name) {
    console.log('hi');
  }
  else {
    console.log('nothing');
  }
};
var digitCounter = function (x) {
  return x.toString().length;
};
var marriageCalculator = function (income, house, charm) {
  var score = 0;
  score += income;
  if (house) {
    score += 500;
  }
  if (charm === 'high') {
    score += 100;
  }
  if (score >= 600) {
    return 'marriage';
  }
};
console.log(marriageCalculator(100, true, 'high'));
