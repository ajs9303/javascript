// 유저에게 영어 점수를 입력 받고,
// 90점 이상 A
// 80점 이상 B
// 70점 이상 C
// 60점 이상 D
// 50점 이상 E
// 그 외 ㅅㄱ

/*
const score = +window.prompt("점수");
if (score >= 90) {
  window.console.log(`A 입니다.`);
} else if (score >= 80) {
  window.console.log(`B 입니다.`);
} else if (score >= 70) {
  window.console.log(`C 입니다.`);
} else if (score >= 60) {
  window.console.log(`D 입니다.`);
} else if (score >= 50) {
  window.console.log(`E 입니다.`);
} else {
  window.console.log(`ㅅㄱ`);
}
*/

// 유저에게 숫자 정수를 입력 받고
// 양의 홀수, 양의 짝수, 0, 음의 홀수, 음의 짝수 출력
const num = +window.prompt("숫자");
if (num > 0) {
  if (num % 2 == 0) {
    window.console.log(`${num} 은 양의 짝수`);
  } else {
    window.console.log(`${num} 은 양의 홀수`);
  }
} else if (num < 0) {
  if (num % 2 == 0) {
    window.console.log(`${num} 은 음의 짝수`);
  } else {
    window.console.log(`${num} 은 음의 홀수`);
  }
} else {
  window.console.log(`${num} 은 0`);
}
