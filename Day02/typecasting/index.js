// Number 화
// 1. Number() 사용
const a = Number("101");

// 2. parseInt(), parseFloat()
// 뒤에 문자 만나면 그 앞까지 숫자화
const b = parseInt("10px"); // 10
const c = parseFloat("101.12cm"); // 101.12

// 3. 단항연산자 -> +
const d = +"98"; // 98(숫자)
const d1 = "98" + "12"; // 9812

// +
// 산술 연산자 : Number + Number
// 문자 연결 연산자 : String + String
// 단항 연산자 : +Number or +String -> Number
