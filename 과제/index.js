const heightInput = document.querySelector('.insert_wrap #height_input');
const weightInput = document.querySelector('.insert_wrap #weight_input');
const checkBtn = document.querySelector('.user_weight #check');
const checkResult = document.querySelector('.weight_inform');
function statusCheck() {
    let checkWeight = (Number(heightInput.value)-100)*0.9;
    let exceedWeight = Number(weightInput.value)-checkWeight;
    console.log(typeof checkWeight);
}
checkBtn.addEventListener('click',statusCheck);
checkResult.innerHTML = `사용자님의 적정체중은 ${checkweight}kg이며 ${exceedWeight}kg 초과하셨습니다.`;