const arr = [1, 3, 5, 7, 9];

// map: 안에 있는 요소를 바꾸는 함수
// filter: 안에 있는 요소를 조건에 의하여 가르기
// some: 하나라도 있으면 true, 없으면 false
// every: 모든요소가 조건이 만족할 때 true, 하나라도 아니면 false

/*
const double = (x) => {
  return x * 2;
};
const plus10 = (x) => {
  return x + 10;
};

const result = arr.map(plus10);
console.log(result);
*/

/*
const biggerFive = (x) => {
  return x >= 5;
};

const first = arr.filter(biggerFive);
console.log(first);

// 3이상 7 이하만 살리기
const threeSeven = (x) => {
  return x >= 3 && x <= 7;
};
const second = arr.filter(threeSeven);
console.log(second);
*/

// 1. 요소 중에 5 있는지?
const five = (x) => {
  return x == 5;
};
console.log(arr.some(five));

// 2. 요소 중에 짝수 있는지
const even = (x) => {
  return x % 2 == 0;
};
console.log(arr.some(even));
