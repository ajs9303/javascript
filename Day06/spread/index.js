// spread 연산자: ...
// 1. 문자열 스프레드
const rabbit = [..."rabbit"];

// 2. 배열 스프레드 [여러 배열 합칠 때 자주 사용]
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

// 결과: [1,2,3,4,5,6,7,8,9,10]
const result = [...arr1, ...arr2];
console.log(result);

// 3. 오브젝트 스프레드
const candy = { name: "sunkist", flavor: "lemon", kcal: 40 };
const chocolate = { name: "hershey", kcal: 100 };

const x = 1;
const y = 2;
// key, value 가 같으면 하나로 요약가능
const point = { x, y };

const snack = { ...candy, ...chocolate };
console.log(snack); // => key 값이 같으면 update
