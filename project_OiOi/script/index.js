const hTop = document.querySelector('.h_top');
const topClose = document.querySelector('.h_top #close_btn');
topClose.addEventListener('click',()=>{
    hTop.style.display='none';
});

const bnrSwiper = new Swiper ('.bnr_swiper',{
    autoplay:{delay:2000,},
    speed:800,
    scrollbar:{
        el:'.swiper-scrollbar',
    },
    clickable:true,
})

const newMore = document.querySelector('.new_product > a');
const newShow2 =  document.querySelector('.new_product .new_show2');
const newBtn = document.querySelector('.new_product .new_btn');
console.log(newMore,newShow2,newBtn,newBtn.children);

newMore.addEventListener('click',(e)=>{
    e.preventDefault();
    newMore.style.display ='none';
    newBtn.style.display = 'block';
    newShow2.style.display = 'block';
})
newBtn.children[1].addEventListener('click',(e)=>{
    e.preventDefault();
    newShow2.style.display = 'none';
    newBtn.style.display = 'none',
    newMore.style.display = 'block';
})

const bestLink = document.querySelectorAll('.best_categories a');

function removeBest() {
    bestLink[0].classList.remove('active');
    bestLink[1].classList.remove('active');
    bestLink[2].classList.remove('active');
    bestLink[3].classList.remove('active');
    bestLink[4].classList.remove('active');
    bestLink[5].classList.remove('active');
    bestLink[6].classList.remove('active');
}
bestLink[0].addEventListener('click',(e)=>{
    e.preventDefault();
    removeBest();
    bestLink[0].classList.add('active');
})
bestLink[1].addEventListener('click',(e)=>{
    e.preventDefault();
    removeBest();
    bestLink[1].classList.add('active');
})
bestLink[2].addEventListener('click',(e)=>{
    e.preventDefault();
    removeBest();
    bestLink[2].classList.add('active');
})
bestLink[3].addEventListener('click',(e)=>{
    e.preventDefault();
    removeBest();
    bestLink[3].classList.add('active');
})
bestLink[4].addEventListener('click',(e)=>{
    e.preventDefault();
    removeBest();
    bestLink[4].classList.add('active');
})
bestLink[5].addEventListener('click',(e)=>{
    e.preventDefault();
    removeBest();
    bestLink[5].classList.add('active');
})
bestLink[6].addEventListener('click',(e)=>{
    e.preventDefault();
    removeBest();
    bestLink[6].classList.add('active');
})

const bestMore = document.querySelector('.best_product > a');
const bestShow2 =  document.querySelector('.best_product .best_show2');
const bestBtn = document.querySelector('.best_product .best_btn');

bestMore.addEventListener('click',(e)=>{
    e.preventDefault();
    bestMore.style.display ='none';
    bestBtn.style.display = 'block';
    bestShow2.style.display = 'block';
})
bestBtn.children[1].addEventListener('click',(e)=>{
    e.preventDefault();
    bestShow2.style.display = 'none';
    bestBtn.style.display = 'none',
    bestMore.style.display = 'block';
})

const collection1Swiper = new Swiper ('.collect_swiper1',{
    navigation:{
        prevEl:'.collection_wrap .prev',
        nextEl:'.collection_wrap .next',
    },
    initialSlide:0,
    slidesPerView:3.1,
    slidesPerGroup:1,
    spaceBetween:15,
})

const collection2Swiper = new Swiper ('.collect_swiper2',{
    navigation:{
        prevEl:'.collection_wrap .prev',
        nextEl:'.collection_wrap .next',
    },
    initialSlide:0,
    slidesPerView:3.1,
    slidesPerGroup:1,
    spaceBetween:15,
})

const collection3Swiper = new Swiper ('.collect_swiper3',{
    navigation:{
        prevEl:'.collection_wrap .prev',
        nextEl:'.collection_wrap .next',
    },
    initialSlide:0,
    slidesPerView:3.1,
    slidesPerGroup:1,
    spaceBetween:15,
})

const collectList = document.querySelectorAll('.collection_wrap .collection_list a');
const colSwiper = document.querySelectorAll('.collection_wrap .swiper');
const colTitle = document.querySelector('.collection_wrap .col_left h2');
function removeCollect() {
    collectList[0].classList.remove('active');
    collectList[1].classList.remove('active');
    collectList[2].classList.remove('active');
    colSwiper[0].style.display = 'none';
    colSwiper[1].style.display = 'none';
    colSwiper[2].style.display = 'none';
    colTitle.innerHTML = '';
}
collectList[0].addEventListener('click',(e)=>{
    e.preventDefault();
    removeCollect();
    colSwiper[0].style.display ='block';
    collectList[0].classList.add('active');
    colTitle.innerHTML = '<h2>2025<br>SPRING & SUMMER COLLECTION</h2>';
})
collectList[1].addEventListener('click',(e)=>{
    e.preventDefault();
    removeCollect();
    colSwiper[1].style.display ='block';
    collectList[1].classList.add('active');
    colTitle.innerHTML = '<h2>2024<br>FALL & WINER COLLECTION</h2>';
})
collectList[2].addEventListener('click',(e)=>{
    e.preventDefault();
    removeCollect();
    colSwiper[2].style.display ='block';
    collectList[2].classList.add('active');
    colTitle.innerHTML = '<h2>2024<br>SPRING & SUMMER COLLECTION</h2>';
})
console.log(colSwiper[0]);