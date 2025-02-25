//--------------------------------변수 복습
var a = 2025; //숫자 데이터
var b = "자바스크립트"; //문자 데이터
var c; //undefined 값이 정의되지 않음(대입값이 존재안함)
console.log(a,b,c);
console.log(a+1); //2026 숫자를 가진 변수+숫자데이터
console.log(b+' 공부'); //문자를 가진 변수+문자데이터 = 문자데이터
console.log(a+c); //숫자를 가진 변수+정의되지 않은 변수 = Not a Number(NaN)
console.log(a+b); //숫자 변수 + 문자 변수 = 문자 데이터
c = 1;
console.log(a+c); //숫자 변수 + 숫자 변수 = 숫자
console.log(a-c); //숫자 변수 - 숫자 변수 = 숫자
console.log('-----------------------------------')
//함수 생성 문법 function 함수명() {실행식;}
function abcPlus() {
    console.log(a+b+c);
}
//메서드() 공부
/* var d = window.prompt('1+1은?');
console.log(d); */
//prompt와 function함수 활용
//1. 변수 생성 age
//2. 함수 생성 ageFunc
//3. 버튼 클릭시 2번 함수를 호출 onclick="ageFunc()"
var age; //undefined 나이를 정의하지 않은 상태로 시작
function ageFunc() {
    age = window.prompt('당신의 나이는?');
    console.log(age+'세');
    console.log(typeof age);
}
var mbti;
var blood;
function quesMbtiBld() {
    mbti=window.prompt('당신의 MBTI는?')
    blood=window.prompt('당신의 혈액형은?')
    console.log('저의 mbti는',mbti+'이고, 저의 혈액형은',blood+'형입니다.');
    console.log('mbti의 데이터 타입은',typeof mbti);
    console.log('blood의 데이터 타입은',typeof(blood));
    console.log(typeof(mbti,blood));
}
//변수 선언 var, let, const
var a; //상단에 a가 존재하는 상태로 중복 a를 만듦
console.log(a); //중복 문제를 발견 못함
/* let b; */
console.log(b);
//상수는 선언과 동시에 변하지 않는 값을 바로 대입해야 한다.
const e = 2024;
console.log(e);
console.log('---------------------------------')
console.log(typeof a); //a변수의 데이터타입 확인 number(숫자)
console.log(typeof b); //b변수의 데이터타입 확인 string(문자)
console.log(typeof(c)); //c 데이터타입 확인
console.log(typeof(a+b)); //a와 b변수를 더한 결과 데이터타입은?
console.log(typeof(a+c));
console.log('------------------특수데이터연습-----------------');
let f;
let g;
console.log(typeof(f,g)); //undefined
f = '';
console.log(typeof f); //string
f = '아이디를 입력하세요.';
console.log(typeof f); //string
f = null; //f 변수의 값을 비운다.
//문자 데이터를 초기화하는 경우는 null보다 '' 빈문자 데이터를 많이 활용한다.
console.log(typeof f); //object
g = 100;
console.log(typeof g); //number
g = null; //숫자데이터 특징이 사라지고 object만 남는다.
console.log(typeof g); //object
g = 0; //숫자데이터는 유지한 상태로 0 초기화한다.
console.log(typeof g); //number
console.log('-------------템플릿문자열---------------')
let coffee = 1500;
let lunch = 6000;
let total = coffee+lunch;
//오늘 총 지출액은 ? 원입니다.
console.log(`오늘 총 지출액은 ${total}원입니다.`);
//2단 구구단 출력하기 ex) 2x1=2
/* let dan = 9;
console.log(`${dan}x1=${dan*1}`);
console.log(`${dan}x2=${dan*2}`);
console.log(`${dan}x3=${dan*3}`);
console.log(`${dan}x4=${dan*4}`);
console.log(`${dan}x5=${dan*5}`);
console.log(`${dan}x6=${dan*6}`);
console.log(`${dan}x7=${dan*7}`);
console.log(`${dan}x8=${dan*8}`);
console.log(`${dan}x9=${dan*9}`); */
//dan99
let dan;
function dan99() {
    dan = window.prompt('구구단 몇단이 궁금해요?')
    console.log(`${dan}x1=${dan*1}`);
    console.log(`${dan}x2=${dan*2}`);
    console.log(`${dan}x3=${dan*3}`);
    console.log(`${dan}x4=${dan*4}`);
    console.log(`${dan}x5=${dan*5}`);
    console.log(`${dan}x6=${dan*6}`);
    console.log(`${dan}x7=${dan*7}`);
    console.log(`${dan}x8=${dan*8}`);
    console.log(`${dan}x9=${dan*9}`);
}