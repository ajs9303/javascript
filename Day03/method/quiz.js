// 유저에게 프롬프트로 단어를 입력 받아
// 대문자화 해서 콘솔로 출력
// const quiz = prompt("입력");
// console.log(quiz1.toUpperCase());

// 1. 단어를 입력하고 10글자 이상이면,
// 콘솔로 단어가 깁니다. 아니면 대문자화해서 콘솔출력
const q1 = prompt("q1. 단어 입력");
if (q1.length >= 10) {
  console.log("단어가 깁니다");
} else {
  console.log(q1.toUpperCase());
}

// 2. 영어 문장을 입력해서 콘솔출력 배열로 나타내기
// ex) i like icecream -> ["i", "like", "icecream"]
const q2 = prompt("q2. 문장 입력");
console.log(q2.split(" "));

// 3. 유저에게 단어를 입력 받고
// 소문자로 입력하면 대문자화, 대문자면 소문자화 해서 콘솔출력
// ex) dog -> DOG, CAT->cat
const q3 = prompt("q3. 단어 입력");
if (q3 == q3.toUpperCase()) {
  console.log(q3.toLowerCase());
} else {
  console.log(q3.toUpperCase());
}

// 4. 유저에게 이메일을 입력 받고,
// @가 포함하면 올바른 이메일 입니다.
// 아니면 바르지 않은 이메일 입니다. 콘솔출력
const q4 = prompt("q4. 이메일 입력");
if (q4.indexOf("@") >= 0) {
  console.log("올바른 이메일");
} else {
  console.log("바르지 않은 이메일");
}
