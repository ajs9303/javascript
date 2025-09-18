const fruits = [
  "watermelon",
  "apple",
  "melon",
  "grape",
  "banana",
  "peach",
  "kiwi",
  "pineapple",
  "strawberry",
  "orange",
  "plum",
];

// 1. 6글자 이상만 남기기
const q1 = (x) => {
  return x.length >= 6;
};
console.log(fruits.filter(q1));

// 2. 알파벳 m 이 들어가면 없애기
const q2 = (x) => {
  return !x.includes("m");
};
console.log(fruits.filter(q2));

// 3. a,e,i,o,u 로 시작하는 과일은 없애기
const q3 = (x) => {
  return !["a", "e", "i", "o", "u"].some((v) => x.startsWith(v));
};

const a3 = fruits.filter(q3);
console.log(a3);

// 4. 과일에 i,p,k,z,q,v 들어가면 살려주기
const q4 = (x) => {
  return ["i", "p", "k", "z", "q", "v"].some((v) => x.includes(v));
};
const a4 = fruits.filter(q4);
console.log(a4);

// 5. a or p 로 시작해서 e로 끝나는거
const a5 = fruits
  .filter((x) => ["a", "p"].some((v) => x.startsWith(v)))
  .filter((x) => x.endsWith("e"));
console.log(a5);

// 6. i or e를 포함하고, 문자 길이가 4글자 이상인 애들만 찾고, 대문자화 하기
const a6 = fruits
  .filter((x) => ["i", "e"].some((v) => x.includes(v)))
  .filter((x) => x.length >= 4)
  .map((x) => x.toUpperCase());

console.log(a6);
