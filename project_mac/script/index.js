const bnrSwiper = new Swiper ('.bnr_swiper',{
    autoplay:{
        delay:2000,
        disableOnInteraction:false,
    },
    loop:true,
    speed:1000,
    pagination:{
        el:'.bnr_swiper + .swiper-pagination',
        type:'bullets',
        dynamicBullets:true,
    },
});
const bestSwiper = new Swiper ('.best_wrap .best_swiper',{
    slidesPerView:4,
    spaceBetween:20,
    slidesPerGroup:4,
    navigation:{    
        prevEl:'.best_contents .prev',
        nextEl:'.best_contents .next',
    },
    speed:1000,
});

const bestBtn = document.querySelectorAll('.best_list a');
const bestSlide = document.querySelectorAll('.best_swiper .swiper-slide');
const bestImg = document.querySelectorAll('.best_swiper .swiper-slide a img')

function removeActive() {
    bestBtn[0].classList.remove('active');
    bestBtn[1].classList.remove('active');
    bestBtn[2].classList.remove('active');
    bestBtn[3].classList.remove('active');
};

bestBtn[0].addEventListener('click',(e)=>{
    e.preventDefault();
    removeActive();
    bestBtn[0].classList.add('active');
    bestImg[0].src='./images/product_001.jpg';
    bestImg[1].src='./images/product_007.jpg';
    bestImg[2].src='./images/product_009.jpg';
    bestImg[3].src='./images/product_017.jpg';
    bestImg[4].src='./images/product_002.jpg';
    bestImg[5].src='./images/product_018.jpg';
    bestImg[6].src='./images/product_004.jpg';
    bestImg[7].src='./images/product_012.jpg';
});
bestBtn[1].addEventListener('click',(e)=>{
    e.preventDefault();
    removeActive();
    bestBtn[1].classList.add('active');
    bestImg[0].src = './images/product_014.jpg';
    bestImg[1].src = './images/product_022.jpg';
    bestImg[2].src = './images/product_024.jpg';
    bestImg[3].src = './images/product_023.jpg';
    bestImg[4].src = './images/product_025.jpg';
    bestImg[5].src = './images/product_021.jpg';
    bestImg[6].src = './images/product_010.jpg';
    bestImg[7].src = './images/product_026.jpg';
})
bestBtn[2].addEventListener('click',(e)=>{
    e.preventDefault();
    removeActive();
    bestBtn[2].classList.add('active');
    bestImg[0].src = './images/product_011.jpg';
    bestImg[1].src = './images/product_020.jpg';
    bestImg[2].src = './images/product_003.jpg';
    bestImg[3].src = './images/product_015.jpg';
    bestImg[4].src = './images/product_010.jpg';
    bestImg[5].src = './images/product_019.jpg';
    bestImg[6].src = './images/product_020.jpg';
    bestImg[7].src = './images/product_015.jpg';
})
bestBtn[3].addEventListener('click',(e)=>{
    e.preventDefault();
    removeActive();
    bestBtn[3].classList.add('active');
    bestImg[0].src = './images/product_016.jpg';
    bestImg[1].src = './images/product_029.jpg';
    bestImg[2].src = './images/product_027.jpg';
    bestImg[3].src = './images/product_028.jpg';
    bestImg[4].src = './images/product_030.jpg';
    bestImg[5].src = './images/product_031.jpg';
    bestImg[6].src = './images/product_032.jpg';
    bestImg[7].src = './images/product_033.jpg';
})

const adverSwiper = new Swiper ('.ad_set_wrap .set_swiper',{
    slidesPerView:3,
    slidesPerGroup:3,
    spaceBetween:20,
    speed:1000,
    navigation:{
        prevEl:'.ad_set_wrap .prev',
        nextEl:'.ad_set_wrap .next',
    },
    pagination:{
        el:'.set_swiper + .swiper-pagination',
        type:'bullets',
    },
})

const mdSwiper = new Swiper('.md_swiper',{
    slidesPerView:4,
    slidesPerGroup:4,
    spaceBetween:18,
    navigation:{
        prevEl:'.md_list .prev',
        nextEl:'.md_list .next',
    },
});