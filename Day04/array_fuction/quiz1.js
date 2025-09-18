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

// 1. 배열의 요소들을 문자 길이로 바꾸기
const q1 = (str) => {
  return str.length;
};

// 2. 배열의 요소들이 6글자 이상이면 대문자화 아니면 소문자화
const q2 = (str) => {
  return str.length >= 6 ? str.toUpperCase() : str.toLowerCase();
};

// 3. 배열의 요소들이 a or e 가 들어가면 "꿀맛", 아니면 "노맛"
const q3 = (str) => {
  return str.includes("a") || str.includes("e") ? "꿀맛" : "노맛";
};

// 4. 배열의 요소들의 첫번째 글자만 대문자화 하고 나머지 소문자화
const q4 = (str) => {
  return str[0].toUpperCase() + str.slice(1, str.length);
};

// 5. 배열의 요소들을 오브젝트 타입으로 {name: 과일이름, length: 이름길이} 로 바꾸기
const q5 = (str) => {
  return {
    name: str,
    length: str.length,
  };
};

const a1 = fruits.map(q1);
const a2 = fruits.map(q2);
const a3 = fruits.map(q3);
const a4 = fruits.map(q4);
const a5 = fruits.map(q5);
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
