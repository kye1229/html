const thumSwiper = new Swiper('.thum_swiper',{
    slidesPerView:4,
    slidesPerGroup:4,
    speed:1000,
    navigation:{
        prevEl:'.photo_wrap .prev',
        nextEl:'.photo_wrap .next',
    },
});