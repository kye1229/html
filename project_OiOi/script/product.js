const photoSwiper = new Swiper('.photo_swiper',{
    slidesPerView:2.5,
    slidesPerGroup:1,
    spaceBetween:15,
});

const detailList = document.querySelectorAll('.detail_list li a');
const prdDetail = document.querySelectorAll('.detail_sub');

function removeDetail() {
    detailList[0].classList.remove('active');
    detailList[1].classList.remove('active');
    detailList[2].classList.remove('active');
    detailList[3].classList.remove('active');
}
function removeSub() {
    prdDetail[0].style.display = 'none';
    prdDetail[1].style.display = 'none';
    prdDetail[2].style.display = 'none';
    prdDetail[3].style.display = 'none';
}

detailList[0].addEventListener('click',(e)=>{
    e.preventDefault();
    removeSub();
    removeDetail();
    detailList[0].classList.add('active');
    prdDetail[0].style.display = 'block';
})
detailList[1].addEventListener('click',(e)=>{
    e.preventDefault();
    removeSub();
    removeDetail();
    detailList[1].classList.add('active');
    prdDetail[1].style.display = 'block';
})
detailList[2].addEventListener('click',(e)=>{
    e.preventDefault();
    removeSub();
    removeDetail();
    detailList[2].classList.add('active');
    prdDetail[2].style.display = 'block';
})
detailList[3].addEventListener('click',(e)=>{
    e.preventDefault();
    removeSub();
    removeDetail();
    detailList[3].classList.add('active');
    prdDetail[3].style.display = 'block';
})

const pageNum = document.querySelectorAll('.review_page a');

function removePage() {
    pageNum[0].classList.remove('active');
    pageNum[1].classList.remove('active');
    pageNum[2].classList.remove('active');
}

pageNum[0].addEventListener('click',(e)=>{
    e.preventDefault();
    removePage();
    pageNum[0].classList.add('active');
})
pageNum[1].addEventListener('click',(e)=>{
    e.preventDefault();
    removePage();
    pageNum[1].classList.add('active');
})
pageNum[2].addEventListener('click',(e)=>{
    e.preventDefault();
    removePage();
    pageNum[2].classList.add('active');
})


const moreSwiper = new Swiper('.more_swiper',{
    slidesPerView:4,
    slidesPerGroup:4,
    spaceBetween:20,
    speed:1000,
    navigation:{
        prevEl:'.more_list .prev',
        nextEl:'.more_list .next',
    },    
})    

