const birthMonth = document.querySelector('#birth_month');
const flowerBtn = document.querySelector('#flowerBtn');
const flowerResult = document.querySelector('.result_flower');
function flower(){
    let txt = `당신의 탄생월은 ${month}월입니다.`
    txt += `${month}월의 탄생화는 ${flowerName}이며 꽃말은 ${mean}입니다.`
    return txt;
}
console.log(typeof birthMonth);
flowerBtn.addEventListener('click',()=>{
    month = birthMonth.
    if(month = 1){
        flowerResult.innerText = flower(month,"수선화","자기애, 자존심, 외로움");
    }
})