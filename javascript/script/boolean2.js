//관리자정보 ID:admin / PW:admin1234
let userId ='admin';
let userPw ='admin1234';

if(userId === 'admin' && userPw == 'admin1234'){
    console.log('관리자님 어서오세요');
}else{
    console.log('로그인 실패');
}

//===========================================
//비교연산자와 논리연산자를 이용한 게임만들기
//W(전진) S(후진) A(좌) D(우)
/* const charMove = prompt('이동방향을 입력하세요 WSAD');
console.log(charMove);
if(charMove == 'W' || charMove == 'D' || charMove == 'A' || charMove == 'D'){
    //W 1칸 이동
    alert(`${charMove} 1칸 이동`);
    //S 1칸 이동
    //A 1칸 이동
    //D 1칸 이동
}else{
    alert('잘못 입력했습니다.');
}
 */
//================점수에 따라 등급 출력
//100~90 A
//89~80 B
//79~70 C
//69~60 D
//59 이하면 F
let score = prompt('0~100사이 시험점수를 입력하세요');
if(score > 0 && score < 101){//0~100사이 조건 정하기
    if(score >=90){
        alert('A');
    }else if(score >= 80){
        alert('B');
    }else if(score >= 70){
        alert('C');
    }else if(score >= 60){
        alert('D');
    }else if(score < 60){
        alert('F');
    }
}else{
    alert('잘못 입력했습니다');
    score = prompt('0~100사이 시험점수를 입력하세요');
}
