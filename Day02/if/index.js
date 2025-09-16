const num = +window.prompt("숫자 입력");
if (num > 0) {
  window.console.log(`${num}은 0보다 크다.`);
} else if (num == 0) {
  window.console.log(`0이다.`);
} else {
  window.console.log(`${num}은 0보다 작다.`);
}
window.console.log("프로그램 끝");
