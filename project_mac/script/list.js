const colSwiper = new Swiper('.collect_swiper',{
    slidesPerView:2.7,
    slidesPerGroup:2.7,
    speed:800,
    spaceBetween:30,
    scrollbar:{
        el:'.swiper-scrollbar',
    },
    navigation:{
        prevEl:'.collection_wrap .prev',
        nextEl:'.collection_wrap .next',
    },
});