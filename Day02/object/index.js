// 기본 타입: String, Number, Boolean, Undifined[값이 할당 되지 않음], Null[없음]
// 참조 타입: object

// [key - value]
// key : 중복 불가
// value : 종복 가능
const coffee = {
  name: "아메리카노",
  price: 3000,
  bean: "스페셜",
};

// car object type
const car = {
  name: "K5",
  brand: "Kia",
  price: 10,
  color: "white",
};

console.log(car);
console.log(car.color); // dot 접근
console.log(car["color"]); // bracket 접근
console.log(car.capacity); // 존재하지 않으면 undefined

car.options = "날개"; // 추가
console.log(car);
delete car.price; // 삭제
car.color = "blue"; // 업데이트

const course = {
  students: 10,
  subject: "javascript",
  time: "19:00~",
  teacher: {
    name: "j",
    age: 30,
    mbti: "e",
  },
};

console.log(course);
