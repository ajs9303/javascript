// 1. 홀짝 알려주는 함수 제작
// 콘솔로그로 출력
function quiz1(num) {
  if (num % 2) {
    // 1이면
    return `${num}은 홀수 입니다.`;
  }
  return `${num}은 짝수 입니다.`;
}

// const a = +prompt("숫자입력");
// console.log(quiz1(a));

// 2. 어떠한 숫자를 넣었을 때, 10보다 크면
// ❤를 돌려주고, 작으면 😺를 돌려주는 함수를 만들고
// 콘솔로그로 출력
function quiz2(num) {
  if (num > 10) {
    return "❤";
  }
  return "😺";
}
// const b = +prompt("숫자입력");
// console.log(quiz2(b));

// 3. 어떠한 아이스크림 맛을 주면,
// "~~ 맛보다 바.로.너" 를 돌려주는 함수를 만들고
// 콘솔로그로 출력
function quiz3(tasty) {
  return `${tasty} 보다 바.로.너`;
}
// const c = prompt("맛 입력");
// console.quiz3(icecream(c));

// 4. x,y 를 주었을 때, x가 y보다 크면 x의 y 제곱을 주고,
// 아니면 오브젝트로 {first:x, second: y} 함수 리턴
function quiz4(x, y) {
  if (x > y) {
    return x ** y;
  } else {
    return { first: x, second: y };
  }
}
console.log(quiz4(10, 6));

// 5. x,y,z 를 주었을 때, 가장 큰 수 돌려주기
function quiz5(x, y, z) {
  return x > y ? (x > z ? x : z) : y > z ? y : z;
}
console.log(quiz5(10, 15, 6));

// 6. year,month,day 를 주었을 때, year-month-day로 돌려주는 함수
function quiz6(year, month, day) {
  return `${year}-${month}-${day}`;
}
console.log(quiz6(2025, 9, 17));

// 7. burger, side, drink 를 매개 변수
// 오브젝트로 {main: burger, side: side, drink: drink} 나오도록 하기
function quiz7(burger, side, drink) {
  return { main: burger, side: side, drink: drink };
}
console.log(quiz7("싸이", "감튀", "콜라"));

// 8. krw, nation 을 매개 변수
// nation 이 usa면 원화를 달러로, jpy면 원화를 엔화로, thb면 원화를 바트로, 그 외는 원화로 돌려주기
function quiz8(krw, nation) {
  if (nation == "usa") {
    return krw * 1.38;
  } else if (nation == "jpy") {
    return krw * 0.94;
  } else if (nation == "thb") {
    return krw * 0.43;
  } else {
    return krw;
  }
}
console.log(quiz8(1, "jpy"));
