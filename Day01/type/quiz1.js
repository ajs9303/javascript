const len = Number(window.prompt("한변의 길이?"));
window.console.log(`한 변의 길이 ${len}인 정사각형의 넓이 :${len * len}`);

const len2 = Number(window.prompt("밑변?"));
const height = Number(window.prompt("높이?"));
window.console.log(
  `밑변 ${len2}와 높이 ${height}인 삼각형의 넓이: ${(len2 * height) / 2}`
);

const money = Number(window.prompt("원화 입력?"));
window.console.log(`${money}원은 ${money / 1000}엔 입니다.`);

const min = Number(window.prompt("몇분?"));
window.console.log(`${min}분은 ${min * 60}초 입니다.`);
