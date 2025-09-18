const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 1. 각 요소를 3배해서 출력
const q1 = (x) => {
  return x * 3;
};

// 2. 각 요소에서 5보다 작으면 2배, 크면 3배
const q2 = (x) => {
  return x < 5 ? x * 2 : x * 3;
};

// 3. 각 요소에서 홀수면 "❤", 짝수면 "🍔" 출력
const q3 = (x) => {
  return x % 2 ? "❤" : "🍔";
};

// 4. 각 요소에서 뒤에 ":00" 붙여서 출력
const q4 = (x) => {
  return x + ":00";
};

// console.log(arr.map((x) => x * 3));
console.log(`q1: ${arr.map(q1)}`);
console.log(`q2: ${arr.map(q2)}`);
console.log(`q3: ${arr.map(q3)}`);
console.log(`q4: ${arr.map(q4)}`);
