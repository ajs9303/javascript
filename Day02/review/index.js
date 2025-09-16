const a_quiz = Number(window.prompt("문제1) 점수 몇?"));
const a_answer = a_quiz >= 60 ? "합격" : "불합격";
window.console.log(`1번 입력:${a_quiz} / 답:${a_answer}`);

const b_quiz1 = Number(window.prompt("문제2) 숫자 1?"));
const b_quiz2 = Number(window.prompt("문제2) 숫자 2?"));
const b_answer = b_quiz1 > b_quiz2 ? b_quiz1 : b_quiz2;
window.console.log(`2번 입력:${b_quiz1},${b_quiz2} / 답:${b_answer}`);

const c_quiz = Number(window.prompt("문제3) 숫자입력?"));
const c_answer = c_quiz == 0 ? 0 : c_quiz > 0 ? "양수" : "음수";
window.console.log(`3번 입력:${c_quiz} / 답:${c_answer}`);

const d_quiz = Number(window.prompt("문제4) 숫자입력?"));
const d_answer = d_quiz % 2 == 0 ? "짝수" : "홀수";
window.console.log(`4번 입력:${d_quiz} / 답:${d_answer}`);
