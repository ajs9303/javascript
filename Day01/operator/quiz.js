// 1. 유저에게 프롬프트로 나이를 입력 받아, 20살보다 적으면
// 콘솔로 미성년자 입니다. 아니면 성인입니다.
const age = Number(window.prompt("나이?"));
const result = age >= 20 ? "성인" : "미성년자";
window.console.log(result);

// 2. 유저에게 키를 입력 받고, 140cm 보다 작으면
// 해당 놀이기구는 탑승이 안됩니다. 넘으면 가능합니다. 나타내기
const height = Number(window.prompt("키?"));
const result1 = height >= 140 ? "탑승 ㅇ" : "탑승 ㄴ";
window.console.log(result1);

// 3. 유저에게 숫자(정수)를 입력 받고, 0보다 크면 양수 입니다.
// 아니면 0 또는 음수입니다. 나타내기
const num = Number(window.prompt("숫자?"));
const result2 = num > 0 ? "양수" : "0 또는 음수";
window.console.log(result2);
