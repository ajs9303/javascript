const coffee = ["아메리카노", "라떼", "모카"];

// destructuring // 배열의 갯수 넘어가면 Undefined
const test = coffee;
const [a, b] = coffee; // "아메리카노", "라떼"
const [, b1, c1] = coffee; // "라떼", "모카"

const car = { name: "테슬라", price: 10000, color: "흰색" };

const q1 = car; // { name: "테슬라", price: 10000, color: "흰색" }
const { name } = car; // 테슬라 -> name을 변수로 계속 사용
