자바스크립트

변수
데이터 저장하는 공간
변수명 선언 방법: const 별명 = 데이터타입
숫자시작안됨, 특수문자 언더바만됨, 띄어쓰기안됨, 대소문자구분됨, 예약어(const/if/else/function)
데이터 타입
기본 타입: String, Number, Boolean, Null, Undefined
참조 타입: Object{}, Array[], Function
타입 캐스팅
Number화: Number(), parseInt(), parseFloat(), +
String화: String(), ``, +
Boolean화: Boolean(), !, 비교연산자
연산자
산술 연산자: +, -, \*, \*\*, /, %
비교 연산자: >,<,!=,==
논리 연산자: ||, &&, !
삼항 연산자: ?
대입 연산자: =
문자연결 연산자: +
단항 연산자: +
타입/검사 연산자: typeof, delete
조건문
if(조건식), else-if(조건식), else
함수
function name(x,y){return x+y}
object에서 function 넣을때, 이름 앞으로 빼고 시작 const car = { speed:0, speedUp:function(acc){ this.speed = this.speed + acc } } car.speedUp(100)
문자/배열 필수 함수[메소드]
toUppercase(),includes(),slice(),split(),...
push(),pop(),shift(),unshift()
