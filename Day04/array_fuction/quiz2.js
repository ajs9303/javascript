const venti = [
  { name: "iced americano", price: 2000, shots: 2 },
  { name: "iced latte", price: 3000, shots: 2 },
  { name: "iced mocha", price: 3000, shots: 2 },
  { name: "strawberry latte", price: 4000, shots: 0 },
  { name: "mango ade", price: 3500, shots: 0 },
];

// 1. 전체에 shots 을 하나 올려주기
const q1 = (x) => {
  x.shots += 1;
  return x;
};
const a1 = venti.map(q1);
console.log(a1);

// 2. 가격이 3500원 이상이면 +500 아니면 +200
const q2 = (x) => {
  x.price = x.price >= 3500 ? x.price + 500 : x.price + 200;
  return x;
};
const a2 = venti.map(q2);
console.log(a2);

// 3. 전체 이름 앞에 venti 붙이기
const q3 = (x) => {
  x.name = "venti " + x.name;
  return x;
};

const a3 = venti.map(q3);
console.log(a3);
