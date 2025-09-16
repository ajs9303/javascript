// 종류 1:일반(12000), 2:3D(15000), 3: IMAX(18000)
// 나이 연령별 할인규칙 7세 이하 50% 할인, 8~19세 30% 할인, 65세 무료
// 간식 1:팝콘(5000), 2:음료(2000), 3:없음
// 좌석 1:일반(0), 2:프리미엄(5000), 3:VIP(10000)
// 영화 기본요금 -> 간식 요금 추가 -> 좌석 요금 추가 -> 최종금액 할인

const ask1 = +prompt("영화 종류 : 1.일반, 2.3D, 3.IMAX");
const ask2 = +prompt("몇살?");
const ask3 = +prompt("간식 : 1.팝콘, 2.음료, 3.없음");
const ask4 = +prompt("좌석 : 1.일반, 2.프리미엄, 3.VIP");

const kind = {
  1: 12000,
  2: 15000,
  3: 18000,
};

const snack = {
  1: 5000,
  2: 2000,
  3: 0,
};

const seat = {
  1: 0,
  2: 5000,
  3: 10000,
};

if (ask2 >= 65) {
  console.log(
    `최종 결제 금액은 ${kind[ask1] * 0 + snack[ask3] + seat[ask4]}원 입니다.`
  );
} else if (ask2 <= 7) {
  console.log(
    `최종 결제 금액은 ${kind[ask1] * 0.5 + snack[ask3] + seat[ask4]}원 입니다.`
  );
} else if (ask2 >= 8 && ask2 <= 19) {
  console.log(
    `최종 결제 금액은 ${kind[ask1] * 0.7 + snack[ask3] + seat[ask4]}원 입니다.`
  );
} else {
  console.log(
    `최종 결제 금액은 ${kind[ask1] * 1 + snack[ask3] + seat[ask4]}원 입니다.`
  );
}
