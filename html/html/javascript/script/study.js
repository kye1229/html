// 변수와 html 요소 활용
// 1. 밥 주문하기 변수와 함수
var bowl; //그릇 준비
bowl = '쌀밥';
bowl = '콩밥';
//함수 생성(버튼 클릭 시 호출 목적)
//function 생성함수명() { 함수실행결과 }
function cookOrder(){
    console.log('주문한',bowl,'나왔습니다.')
}

//2. 메일수신확인 변수와 함수, 버튼(메일함에는 하나의 메일만 넣을 수 있다, 새로운 메일이 오면 기존 메일은 폐기된다.)
var mail;
mail = '우리은행 결제 확인되었습니다.';
mail = '762포인트 적립되었습니다.';
function mailSend() {
    console.log('메일 1건',mail);
}

//3. 장바구니 변수, 함수, 버튼
//'사과'만 구입할 수 있는 쇼핑몰
//버튼을 누를 때마다 사과가 1개씩 추가돼서 구입된다.
var fruit;
fruit = '사과';
var num;
num = 0;
function purchaseFruit() {
    num = num+1
    console.log(fruit,num,'개','주문했습니다.')
}

//4. 재고 수량 감소 변수, 함수, 버튼
//바나나 재고는 10개로 상요자가 1개 주문할 때마다 재고가 주문수량만큼 감소한다.
//버튼 클릭 시 콘솔 출력 메시지 예) 바나나 1개 주문완료. 재고?개 남았습니다.

var fruit;
var count;
var order_num;
fruit = '바나나';
count = 10;
order_num = 0;
function orderBanana() {
    order_num = order_num+1
    count = count - order_num
    console.log(fruit,order_num,'개 주문완료. 재고' ,count,'개 남았습니다.')
}