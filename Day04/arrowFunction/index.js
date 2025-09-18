const quiz1 = (x) => {
  return x * 2;
};
console.log(`quiz1(3) : ${quiz1(3)}`);

const quiz2 = (x) => {
  return x - 500;
};
console.log(`quiz2(3): ${quiz2(3)}`);

const quiz3 = (x, y) => {
  return x > y ? x : y;
};
console.log(`quiz3(3, 5): ${quiz3(3, 5)}`);

const quiz4 = (str) => {
  return str.length;
};
console.log(`quiz4("hello"): ${quiz4("hello")}`);

const quiz5 = (str) => {
  return str.length > 10 ? "길이가 길어요." : "길이가 적당해요.";
};
console.log(`quiz5("0123456789"): ${quiz5("0123456789")}`);

const quiz6 = (str) => {
  return str + "을 하다니 럭키비키잖아❤";
};
console.log(`quiz6("ㅎㅇ"): ${quiz6("ㅎㅇ")}`);

const quiz7 = (x, y) => {
  return x ** y;
};
console.log(`quiz7(2, 5): ${quiz7(2, 5)}`);

const quiz8 = (str) => {
  return str.includes("a") || str.includes("b") ? "a, b 포함" : "a, b 미포함";
};
console.log(`quiz8("c"): ${quiz8("c")}`);

const quiz9 = (x) => {
  return [x, x * 2, x * 3, x * 4, x * 5, x * 6, x * 7, x * 8, x * 9];
};
console.log(`quiz9(5) : ${quiz9(5)}`);

const quiz10 = (str, x) => {
  return str.slice(0, x + 1);
};
console.log(`quiz10("apple", 3): ${quiz10("apple", 3)}`);
