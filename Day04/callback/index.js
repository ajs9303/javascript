// boolean, string, number, object, array, function
// 김치볶음밥
// 라면
// 후라이

// 요리함수
const cooking = (recipe) => {
  console.log("---요리 시작---");
  recipe();
  console.log("---요리 끝---");
};

const kimchirice = () => {
  console.log("김치+재료 썰기");
  console.log("후라이팬 달구기");
  console.log("김치+재료 볶기");
  console.log("밥 넣고 볶기");
};

const ramen = () => {
  console.log("물 끓이기");
  console.log("스프랑 면 넣기");
};

const eggfries = () => {
  console.log("후라이팬 달구기");
  console.log("계란깨기");
  console.log("소금뿌리기");
  console.log("뒤집기");
};

cooking(kimchirice);
cooking(ramen);
cooking(eggfries);
