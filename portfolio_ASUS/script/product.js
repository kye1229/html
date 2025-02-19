const thumSwiper = new Swiper('.thum_swiper',{
    direction:'vertical',
    navigation:{
        prevEl:'.photo_thumnail .prev',
        nextEl:'.photo_thumnail .next',
    },
    slidesPerView:4,
    spaceBetween:20,
    slidePerGroup:4,
});
console.log(thumSwiper);

const thumLink = document.querySelectorAll('.thum_swiper a');
const thumPhoto = document.querySelectorAll('.thum_swiper a img');
const thumBig = document.querySelector('.big_bg img');
console.log(thumLink[0],thumPhoto,thumBig);
function removeThum(){
    thumLink[0].classList.remove('active');
    thumLink[1].classList.remove('active');
    thumLink[2].classList.remove('active');
    thumLink[3].classList.remove('active');
    thumLink[4].classList.remove('active');
}
thumLink[0].addEventListener('click',(e)=>{
    e.preventDefault();
    removeThum();
    thumLink[0].classList.add('active');
    thumBig.src = './images/sub_big_001.jpg';
});
thumLink[1].addEventListener('click',(e)=>{
    e.preventDefault();
    removeThum();
    thumLink[1].classList.add('active');
    thumBig.src = './images/sub_big_002.jpg';
})
thumLink[2].addEventListener('click',(e)=>{
    e.preventDefault();
    removeThum();
    thumLink[2].classList.add('active');
    thumBig.src = './images/sub_big_003.jpg';
})
thumLink[3].addEventListener('click',(e)=>{
    e.preventDefault();
    removeThum();
    thumLink[3].classList.add('active');
    thumBig.src = './images/sub_big_004.jpg';
})
thumLink[4].addEventListener('click',(e)=>{
    e.preventDefault();
    removeThum();
    thumLink[4].classList.add('active');
    thumBig.src = './images/sub_big_005.jpg';
})

const helpImg = document.querySelector('.deliver a');
const help = document.querySelector('.help');
helpImg.addEventListener('mouseover',(e)=>{
    help.classList.add('active');
});
helpImg.addEventListener('mouseout',()=>{
    help.classList.remove('active')
});

const selectLink1 = document.querySelectorAll('.storage a');
const selectLink2 = document.querySelectorAll('.memory a');
const selectLink3 = document.querySelectorAll('.processor a');
const selectLink4 = document.querySelectorAll('.graphic a');
const selectLink5 = document.querySelectorAll('.color a');
console.log(selectLink1, selectLink2, selectLink3, selectLink4, selectLink5);

function removeClass1(){
    selectLink1[0].classList.remove('active');
    selectLink1[1].classList.remove('active');
    selectLink1[2].classList.remove('active');
}
function removeClass2(){
    selectLink2[0].classList.remove('active');
    selectLink2[1].classList.remove('active');
}
function removeClass3(){
    selectLink3[0].classList.remove('active');
    selectLink3[1].classList.remove('active');
}
function removeClass4(){
    selectLink4[0].classList.remove('active');
    selectLink4[1].classList.remove('active');
}
function removeClass5(){
    selectLink5[0].classList.remove('active');
    selectLink5[1].classList.remove('active');
}

selectLink1[0].addEventListener('click',(e)=>{
    e.preventDefault();
    removeClass1();
    selectLink1[0].classList.add('active');
})
selectLink1[1].addEventListener('click',(e)=>{
    e.preventDefault();
    removeClass1();
    selectLink1[1].classList.add('active');
})
selectLink1[2].addEventListener('click',(e)=>{
    e.preventDefault();
    removeClass1();
    selectLink1[2].classList.add('active');
})

selectLink2[0].addEventListener('click',(e)=>{
    e.preventDefault();
    removeClass2();
    selectLink2[0].classList.add('active');
})
selectLink2[1].addEventListener('click',(e)=>{
    e.preventDefault();
    removeClass2();
    selectLink2[1].classList.add('active');
})

selectLink3[0].addEventListener('click',(e)=>{
    e.preventDefault();
    removeClass3();
    selectLink3[0].classList.add('active');
})
selectLink3[1].addEventListener('click',(e)=>{
    e.preventDefault();
    removeClass3();
    selectLink3[1].classList.add('active');
})

selectLink4[0].addEventListener('click',(e)=>{
    e.preventDefault();
    removeClass4();
    selectLink4[0].classList.add('active');
})
selectLink4[1].addEventListener('click',(e)=>{
    e.preventDefault();
    removeClass4();
    selectLink4[1].classList.add('active');
})
selectLink5[0].addEventListener('click',(e)=>{
    e.preventDefault();
    removeClass5();
    selectLink5[0].classList.add('active');
})
selectLink5[1].addEventListener('click',(e)=>{
    e.preventDefault();
    removeClass5();
    selectLink5[1].classList.add('active');
})


const cartBtn = document.querySelector('.inform_wrap #cart_btn');
const buyBtn = document.querySelector('.inform_wrap #buy_btn');
console.log(cartBtn, buyBtn);
cartBtn.addEventListener('click',()=>{
    alert('장바구니에 추가되었습니다.');
});
buyBtn.addEventListener('click',()=>{
    confirm('구매하시겠습니까?');
});

const pageNum = document.querySelectorAll('.page_link a');
const commentPage = document.querySelectorAll('.review_comment .comment_wrap');
function numRemove(){
    pageNum[0].classList.remove('active');
    pageNum[1].classList.remove('active');
    pageNum[2].classList.remove('active');
    commentPage[0].style.display = 'none';
    commentPage[1].style.display = 'none';
    commentPage[2].style.display = 'none';
};
console.log(commentPage);
pageNum[0].addEventListener('click',(e)=>{
    e.preventDefault();
    numRemove();
    pageNum[0].classList.add('active');
    commentPage[0].style.display = 'block';
})
pageNum[1].addEventListener('click',(e)=>{
    e.preventDefault();
    numRemove();
    pageNum[1].classList.add('active');
    commentPage[1].style.display = 'block';
})
pageNum[2].addEventListener('click',(e)=>{
    e.preventDefault();
    numRemove();
    pageNum[2].classList.add('active');
    commentPage[2].style.display = 'block';
})
