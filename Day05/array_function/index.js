// const coffee = ["americano", "latte", "mocha", "flat white"];

// // map, filter, some, every
// // 1. 대문자화
// const q1 = (v) => v.toUpperCase();
// console.log(coffee.map(q1));

// // 2. e가 들어간것만 살리기
// const q2 = (v) => v.includes("e");
// console.log(coffee.filter(q2));

// // 3. mo, no 가 있는지 확인하기
// const q3 = (v) => v.includes("mo") || v.includes("no");
// console.log(coffee.map(q3));

// // 순서대로 먼저 나오는거 반환
// const a4 = coffee.find((v) => v.length <= 5);
// console.log(a4);

// // 순서대로 먼저 나오는거의 인덱스 반환
// const a5 = coffee.findIndex((v) => v.length <= 5);
// console.log(a5);

// const words = ["ice", "cream", "cake", "jmt"];
// const a6 = words.join(" "); // "ice cream cake jmt"

const arr = [1, 2, 3, 4, 5];
const a7 = arr.reduce((a, c) => {
  console.log(`a: ${a}, c: ${c}`);
  return a + c;
}); // arr.reduce((a, c) => a + c); 와 동일

const coffee = ["americano", "latte", "mocha", "flatwhite"];
const a8 = coffee.map((v) => v.length).reduce((a, c) => a + c);
console.log(a8);
