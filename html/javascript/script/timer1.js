//타이머함수
//일정시간마다 반복하는 setInterval
//setInterval(실행함수, 실행시간)
//const 타이머변수 = setInterval(실행함수, 실행시간)
let num = 5;
const timerDiv = document.querySelector('.timer');
const timer1 = setInterval(function(){
    //console.log('timer'+num);
    timerDiv.textContent =`${num}초 후에 사이트로 이동합니다.`;
    num--;
    //if(num == 0) window.location.href = './index.html';
},1000);

console.log('===============================================')
//애니메이션 진행시간에 맞춰 1초씩 증가하는 타이머
const boxAni = document.querySelector('.box');
const boxTimer = document.querySelector('.boxtimer');
let num2 = 0;
/* const time = document.querySelector('.boxtimer span')*/
let timer2 = setInterval(timerFunc,1000);
function timerFunc(){
    num2++;
    //time = num2;
    boxTimer.textContent = `진행시간 : ${num2}초`;
}

//stop 버튼 클릭 시 진행시간, 애니메이션 모두 정지
const stopBtn = document.querySelector('#stop');
//replay 버튼 클릭 시 진행시간, 애니메이션 다시 재생(running)
const replayBtn = document.querySelector('#replay');
stopBtn.addEventListener('click',()=>{
    clearInterval(timer2);
    clearInterval(timer1);
    //boxAni.style.animation = 'none';
    boxAni.style.animationPlayState = 'paused';
})
replayBtn.addEventListener('click', ()=>{
    boxAni.style.animationPlayState = 'running';
    timer2 = setInterval(timerFunc,1000);
})

//한글자씩 작성하는 자바스크립트
const text = 'Portfolio 2025';
let i = 0; //글자 인덱스 인식변수
const textSpan = document.querySelector('.container .text');
const textWrite = setInterval(writer,200);
function writer(){
    if(i<=text.length){
        textSpan.innerHTML += text.charAt(i);
        i++;
        //console.log(i, text.charAt(i-1))
    }
}
const text2 = '웹디자이너 웹퍼블리셔 프론트엔드 백엔드';
let j = 0;
const textSpan2 = document.querySelector('.container2 .text');
const textWrite2 = setInterval(writer2,200);
function writer2(){
    if(j<=text2.length){
        if(j===5 || j===11 || j === 17) textSpan2.innerHTML += `<br>`;
        textSpan2.innerHTML += text2.charAt(j);
        console.log(j,text2.charAt(j))
        j++;
    }
}
