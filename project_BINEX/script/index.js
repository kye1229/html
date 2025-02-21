const header = document.querySelector('.header');
const mainSwiper = new Swiper('#main',{
    direction:'vertical',
    mousewheel:true,
    speed:1000,
    on:{
        slideChangeTransitionEnd:function(){
            setTimeout(()=> ScrollTrigger.refresh(),0)
        }
    },

});

const newsSwiper = new Swiper('#main .news_swiper',{
    speed:1000,
    slidesPerView:3.2,
    spaceBetween:200,
});

gsap.registerPlugin(ScrollTrigger);
gsap.from('.page h2',{
    ScrollTrigger:{
        trigger:'.page2 h2'
    }
})
gsap.to('.page2 h2',{
    ScrollTrigger:{
        trigger:'.page2 h2',
        start:'top 80%',
        end:'top 20%',
        toggleActions:'play reverse restart reverse',
    },
    opacity:1,
    left:0,
});

