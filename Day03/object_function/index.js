const calculator = {
  num: 0,
  add: function (x, y) {
    return x + y;
  },
  minus: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  square: function (x, y) {
    return x ** y;
  },
};

/*
console.log(calculator.num);
console.log(calculator.add(5, 10));
console.log(calculator.add);
console.log(calculator.multiply(3, 3));
*/

// object baskin 안에
// icecream 정의, 매개변수 flavor -> flavor 맛 아이스크림 나왔습니다.
// coffee 정의, 매개변수 shots -> shots샷 추가된 커피 나왔습니다.
// cake 정의, 매개변수 topping -> topping이 추가된 아이스크림케이크 나왔습니다.
const baskin = {
  icecream: function (flavor) {
    return `${flavor}맛 아이스크림 나왔습니다.`;
  },
  coffee: function (shots) {
    return `${shots}샷 추가된 커피 나왔습니다`;
  },
  cake: function (topping) {
    return `${topping}가 추가된 아이스크림 케이크 나왔습니다.`;
  },
};

/*
console.log(baskin.icecream("초코"));
console.log(baskin.coffee(3));
console.log(baskin.cake("딸기"));
*/

// 오브젝트 타입 변수 point 만들고
// x:0, y:0, up:함수, down: 함수
const point = {
  x: 0,
  up: function () {
    this.x += 1;
  },
  down: function () {
    this.x -= 1;
  },
};
