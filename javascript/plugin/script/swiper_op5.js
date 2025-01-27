//const newSlide = new Swiper('.new_slide_wrap'); //기본 형태
const newSlide = new Swiper('.new_slide_wrap',{
    mousewheel:true, //웹사이트 수진페이지 전환 시에만 사용
    direction:'vertical',
});
const snsSlide = new Swiper('.sns_portfolio',{
    autoplay:{
        delay:2000,
        disableOnInteraction:false,
    },
    loop:true,
});