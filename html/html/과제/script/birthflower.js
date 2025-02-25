const birthMonth = document.querySelector('#birth_month');
const flowerBtn = document.querySelector('#flowerBtn');
const flowerResult = document.querySelector('.result_flower');

function flower(month,flowerName,mean){
    let txt = `당신의 탄생월은 ${month}월입니다.`
    txt += ` ${month}월의 탄생화는 ${flowerName}이며 꽃말은 ${mean}입니다.`
    return txt;
}
console.log(typeof birthMonth);
flowerBtn.addEventListener('click',()=>{
    month = birthMonth.value;
    flowerName = '';
    mean = '';
    if(month == 1){
        flowerResult.textContent = flower(month,'수선화','자기애, 자존심, 외로움');
    }else if(month == 2){
        flowerResult.textContent = flower(month,'제비꽃','겸손,양보');
    }else if(month == 3){
        flowerResult.textContent = flower(month,'수선화','자기애, 자존심, 외로움');
    }else if(month == 4){
        flowerResult.textContent = flower(month,'스위트피','추억, 즐거움');
    }else if(month == 5){
        flowerResult.textContent = flower(month,'은방울꽃','희망, 섬세함');
    }else if(month == 6){
        flowerResult.textContent = flower(month,'백합','순결');
    }else if(month == 7){
        flowerResult.textContent = flower(month,'수미나리아재비','아름다움, 인격');
    }else if(month == 8){
        flowerResult.textContent = flower(month,'글라디올러스','비밀, 상상, 견고함');
    }else if(month == 9){
        flowerResult.textContent = flower(month,'물망초','진실한 사랑');
    }else if(month == 10){
        flowerResult.textContent = flower(month,'금잔화','실망, 비애');
    }else if(month == 11){
        flowerResult.textContent = flower(month,'국화','성실, 진실');
    }else if(month == 12){
        flowerResult.textContent = flower(month,'포인세티아','축하, 감사');
    }else flowerResult.textContent = '탄생월을 입력해주세요.'
})