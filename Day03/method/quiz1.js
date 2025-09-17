// 유저에게 프롬프트로 비밀번호 설정을 입력 받고,
// 1. 비밀번호 길이가 4~12자 까지만 허용, 틀리면 -> 비밀번호 길이가 맞지않습니다.
// 2. 비밀번호에 @,!,# 중 하나가 포함되어야 함, 틀리면 -> 비밀번호에 @,!,# 이 없습니다
// 3. 비밀번호 시작이 it 로 시작, 틀리면 -> 비밀번호 시작이 it가 아닙니다.
// 다 통과 시 올바른 비밀번호 입니다.
const quiz = prompt("비밀번호 입력");
const quiz1 = quiz.length >= 4 && quiz.length <= 12;
const quiz2 = quiz.includes("@") || quiz.includes("!") || quiz.includes("#");
const quiz3 = quiz.startsWith("it");

if (quiz1) {
  if (quiz2) {
    if (quiz3) {
      console.log("올바른 비밀번호 입니다.");
    } else {
      console.log("비밀번호 시작이 it가 아닙니다.");
    }
  } else {
    console.log("비밀번호에 @,!,# 이 없습니다.");
  }
} else {
  console.log("비밀번호 길이가 맞지 않습니다.");
}
