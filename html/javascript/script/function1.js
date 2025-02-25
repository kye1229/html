//==============================함수스코프, 지역변수와 전역변수
//함수 외부(전역스코프 위치)
let b = 20;
let c = 30;
let a = 0;
//function 함수명(매개변수){반복 알고리즘;}
function test() {
    //함수 내부(지역스코프 위치)
    a = 10;
    console.log(a+b); //30
}
//선언한 함수를 사용하고 싶다면 함수 외부에서 함수를 호출해야 한다!
//호출방법 : 함수명()
console.log(a+b); //30
test(); //전역 스코프에서 함수 결과를 보여줄 수 있도록 함수 호출
//==============================함수스코프 연습2
//최종 결과 값 순서가 6, 16으로 출력되도록 함수스코프와 호출을 이용한 문제 풀기
let x = 1;
let y;
function func1(){
    y = 5;
    console.log(x+y);
}
func1(); //되는 경우를 의미한다.
func2();
function func2(){
    let z = 10;
    console.log(x+y+z);
}

//1. 변수 생성(버튼)
const btn1 = document.getElementById('btn1');
console.log(btn1);
//2. 변수 이벤트 생성
//이벤트대상.addEventListner('이벤트종류',이벤트 만족 시 실행함수);
//이벤트대상 == 이벤트종류를 적용하고 싶은 대상
//이벤트종류 => 태그의 인라인script로 적용시 on을 붙이고 스크립트에서 바로 작성 시 on없이 바로 이벤트만 작성한다.
btn1.addEventListener('click',function(){
    alert('hello');
});

//1. 버튼2 준비
//2. 버튼2 클릭 시
const btn2 = document.getElementById('btn2');
btn2.addEventListener('click',function(){
    //3. 1+1 답을 입력받을 수 있는 질문창 제공 후 답 받기
    let answer = prompt('1+1에 대한 답을 쓰세요');
    //4. 위 3에서 받은 값을 팝업창으로 다시 띄우기
    alert(answer);
});

//1. 제어 노드 변수 생성하기
const num = document.querySelector('#num');
const numPlus = document.querySelector('#numPlus');
const numMinus = document.querySelector('#numMinus');
console.log(num,numPlus,numMinus);
//2. 위 1에서 생성한 변수 중 이벤트대상에 해당되는 것부터 작성하기
numPlus.addEventListener('click',function(){
    //3. 변경대상의 객체, 속성을 잘 구분하여 문법에 맞게 작성하기
    //기존 수량의 값에 1을 더해서 수량 칸에 대입하기
    num.value = Number(num.value)+1;
        console.log(typeof(num.value)); //데이터타입확인메소드
});
numMinus.addEventListener('click',function(){
    num.value = num.value-1;
});

//===========================직장인 수입 계산기
//1. 월급 입력받기 prompt
const price1 = document.querySelector('#price1');
//2. 보너스 입력받기 prompt
const price2 = document.querySelector('#price2');
//3. 계산버튼 클릭 시 click
const total = document.querySelector('#total');
total. addEventListener('click',function(){
    //4. 월급+보너스 더하기 +
    let price1Value = Number(price1.value);
    let price2Value = Number(price2.value);
    let totalPrice = price1Value+price2Value;
    //const totalPrice = Number(price1)+Number(price2);
    //5. 더한 결과 출력 console
    console.log(`${totalPrice}만원`);
})