// 유저에게 mbti 물어보기
/*
const ei = prompt("e? i?");
const sn = prompt("s? n?");
const tf = prompt("t? f?");
const jp = prompt("j? p?");

const mbti = {
  e: "외향적",
  i: "내향적",
  s: "감각적",
  n: "직관적",
  t: "이성적",
  f: "감성적",
  j: "계획적",
  p: "즉흥적",
};

alert(`결과: ${mbti[ei]} ${mbti[sn]} ${mbti[tf]} ${mbti[jp]} 이시네요!`);
*/

// 유저에게 몇년생인지 물어보고 띠 알려주기
const year = +prompt("몇년생?");
const mod = year % 12;
const ani = {
  4: "쥐",
  5: "소",
  6: "호랑이",
  7: "토끼",
  8: "용",
  9: "뱀",
  10: "말",
  11: "양",
  0: "원숭이",
  1: "닭",
  2: "개",
  3: "돼지",
};

alert(`${year}년생은 ${ani[mod]} 띠 입니다.`);
