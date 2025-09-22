// rest 문법
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

// 대입 연산자 기준 오른쪽에 있으면 spread
// 대입 연산자 기준 왼쪽에 있으면 rest
// const sumArr = [...arr1, ...arr2]; // spread
// const [a, b, ...c] = arr1; // rest

const koreaIT = { a: "java", b: "python", c: "javascript", d: "c", e: "linux" };
const { a, b, ...c } = koreaIT; // java, python
const { e } = c; // linux

const company = {
  ceo: "신여진",
  header: "이영철",
  senior: ["박신율", "권유나", "전상원"],
  intern: ["손정우", "전수효"],
};

const [p1, p2] = company.senior; // 박신율, 권유나
const { header, senior, ...other } = company;
const { intern } = other; // 손정우, 전수효
const [, p4] = intern; // 전수효

const t1 = { top: "도란", jg: "오너", mid: "갓", ad: "구마유시", sp: "케리아" };
const { ad, sp } = t1; // 구마유시, 케리아

const people = {
  manager: [{ name: "손정우", skills: ["자바", "파이썬", "디비"] }],
  interns: [
    { names: "전상원", skills: ["엑셀", "파워포인트"] },
    { names: "권유나", skils: ["계산기", "파워포인트", "어도비"] },
  ],
};
