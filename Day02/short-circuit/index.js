// short-circuit[단축평가]

// ||[or]
const a = false || "떡볶이"; // 떡볶이
const b = "순대" || false; // 순대
const c = 0 || "" || "콜라" || "제로콜라"; // 콜라에서 끝

// 유저에게 닉네임을 입력 받고,
// alert 로 ~~ 님 환영 합니다!
// 만약에 닉네임을 빈 문자로 입력하면
// alert 으로 guest 님 환영합니다! 출력

// const nick = window.prompt("닉네임 입력") || "guest";
// window.alert(`${nick}님 환영합니다`);

//  &&[and]
const d = false && "떡볶이"; // false
const e = true && "떡볶이"; // "떡볶이"

// 유저에게 화장실 비밀번호 입력을 받고,
// 틀리면 아무일도 안일어나고,
// 맞으면 화장실 문 열림
const pass = +window.prompt("비밀번호");
pass == 1215 && window.alert("문열림");
