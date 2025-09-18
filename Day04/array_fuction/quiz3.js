const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. 5이하만 살리기
const q1 = (x) => {
  return x <= 5;
};
console.log(arr.filter(q1));

// 2. 2,5 만 살리기
const q2 = (x) => {
  return x == 2 || x == 5;
};
console.log(arr.filter(q2));

// 3. 짝수만 살리기
const q3 = (x) => {
  return x % 2 == 0;
};
console.log(arr.filter(q3));

// 4. 자기숫자의 제곱이 50보다 작은수만 살리기
const q4 = (x) => {
  return x ** x < 50;
};
console.log(arr.filter(q4));
