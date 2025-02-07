const bnrSlide = new Swiper('.bnr_swiper .bnr_wrap',{
    autoplay:{
        delay:2000,
        disableOnInteraction:false,
    },
    loop:true,
    speed:1000,
    pagination:{
        el:'.bnr_wrap + .swiper-pagination',
        type:'bullets',
        dynamicBullets:true,
    },
    navigation:{
        nextEl:'.bnr_swiper .next',
        prevEl:'.bnr_swiper .prev',
    },
});
