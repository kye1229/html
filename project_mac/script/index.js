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
});
