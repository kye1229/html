const heightInput = document.querySelector('.insert_wrap #height_input');
const weightInput = document.querySelector('.insert_wrap #weight_input');
const checkBtn = document.querySelector('.user_weight #check');
const checkResult = document.querySelector('.weight_inform');
function statusCheck() {
    let checkWeight = Number((heightInput.value)-100)*0.9;
    let exceedWeight = Number(weightInput.value)-checkWeight;
    console.log(checkWeight);
    checkResult.innerHTML = `사용자님의 적정체중은 ${checkWeight}kg이며 ${exceedWeight}kg 초과하셨습니다.`;
};
checkBtn.addEventListener('click',statusCheck);
const heightInput = document.querySelector('.insert_wrap #height_input');
const weightInput = document.querySelector('.insert_wrap #weight_input');
const checkBtn = document.querySelector('.user_weight #check');
const checkResult = document.querySelector('.weight_inform');
function statusCheck() {
    let checkWeight = Number((heightInput.value)-100)*0.9;
    let exceedWeight = Number(weightInput.value)-checkWeight;
    console.log(checkWeight);
    checkResult.innerHTML = `사용자님의 적정체중은 ${checkWeight}kg이며 ${exceedWeight}kg 초과하셨습니다.`;
};
checkBtn.addEventListener('click',statusCheck);
>>>>>>>> 0a26e883c356b943a8d25de0d334d75ae3d1683e:과제/script/index.js
>>>>>>> 0a26e883c356b943a8d25de0d334d75ae3d1683e
