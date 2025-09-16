// Operator[연산자]

// 산술 연산자
// +,-,*,/,%,**
const a = 1 + 3; // 더하기 연산자 결과: 4
const a1 = 1 - 3; // 빼기 연산자 결과: -2
const a2 = 2 * 2; // 곱하기 연산자 결과: 4
const a3 = 3 / 2; // 나누기 연산자 결과: 1.5
const a4 = 2 % 3; // 나머지 연산자 결과: 2
const a5 = 2 ** 3; // 제곱 연산자 결과: 8

// 대입 연산자
// =
const b = "ㅅㄱ"; // 대입 연산자

// 비교 연산자 [boolean 타입으로 귀결]
// < > <= => == != === !==
const c = 5 > 3; // true
const c1 = 5 < 3; // false
const c2 = 5 >= 3; // true
const c3 = 5 <= 3; // false
const c4 = 1 == 2; // false
const c5 = 1 != 2; // true
const c6 = 1 === "1"; // type 까지 체크 ? false

// 논리 연산자
// &&(and) ||(or) !(not)

// &&(and): 모두 true면 true
const d = 3 > 0 && 5 > 0 && 7 > 0; // true
const d1 = 3 > 0 && 5 > 0 && 7 < 0; // false

// ||(or): 하나라도 true면 true
const d2 = 3 > 0 || 5 > 0 || 7 < 0; // true
const d3 = 1 == 2 || 3 == 4; // false

//  !(not): 불리언 반대
const d4 = !true;
const d5 = !(5 > 3);
const d6 = !!(5 != 5);

const d7 = !(5 <= 3) || !(3 > 10);
const d8 = 5 > 3 && 3 <= 10;

// 삼항 연산자
// ?
// 조건식 ? 데이터1 : 데이터2
const e = 5 > 3 ? "김밥" : "아이스크림";
const e1 = false ? "고기" : "참치";
const e2 = "소다" == "콜라" ? "강아지" : "고양이";
