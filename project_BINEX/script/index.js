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
gsap.to('.page2 h2',{
    scrollTrigger:{
        trigger:'.page2 h2',
        start:'top 80%',
        end:'top 20%',
        toggleActions:'play reverse restart reverse',
    },
    opacity:1,
    left:0,
});

gsap.to('.vision1 h3',{
    scrollTrigger:{
        trigger:'.vision1 h3',
        start:'top 80%',
        end:'top 20%',
        toggleActions:'play reverse restart reverse',
    },
    opacity:1,
    left:0,
});

gsap.to('.vision2 h3',{
    scrollTrigger:{
        trigger:'.vision2 h3',
        start:'top 80%',
        end:'top 20%',
        toggleActions:'play reverse restart reverse',
    },
    opacity:1,
    left:0,
});

gsap.to('.page3 h2',{
    scrollTrigger:{
        trigger:'.page3 h2',
        start:'top 80%',
        end:'top 20%',
        toggleActions:'play reverse restart reverse',
    },
    opacity:1,
    left:0,
});

gsap.to('.page3_top p',{
    scrollTrigger:{
        trigger:'.page3_top p',
        start:'top 80%',
        end:'top 20%',
        toggleActions:'play reverse restart reverse',
    },
    opacity:1,
    left:0,
});

gsap.to('.page3 .cdmo1',{
    scrollTrigger:{
        trigger:'.page3 .cdmo1',
        start:'top 80%',
        end:'top 20%',
        toggleActions:'play reverse restart reverse', 
    },
    opacity:1,
    top:0,
});
gsap.to('.page3 .cdmo2',{
    scrollTrigger:{
        trigger:'.page3 .cdmo2',
        start:'top 80%',
        end:'top 20%',
        toggleActions:'play reverse restart reverse', 
    },
    opacity:1,
    top:0,
});
gsap.to('.page3 .cdmo3',{
    scrollTrigger:{
        trigger:'.page3 .cdmo3',
        start:'top 80%',
        end:'top 20%',
        toggleActions:'play reverse restart reverse', 
    },
    opacity:1,
    top:0,
});

gsap.to('.page4 h2',{
    scrollTrigger:{
        trigger:'.page4 h2',
        start:'top 80%',
        end:'top 20%',
        toggleActions:'play reverse restart reverse',
    },
    opacity:1,
    left:0,
});

gsap.to('.page4 .quality_list p',{
    scrollTrigger:{
        trigger:'.page4 .quality_list p',
        start:'top 80%',
        end:'top 20%',
        toggleActions:'play reverse restart reverse',
    },
    opacity:1,
    top:0,
});

gsap.to('.page5 h2',{
    scrollTrigger:{
        trigger:'.page5 h2',
        start:'top 80%',
        end:'top 20%',
        toggleActions:'play reverse restart reverse',
    },
    opacity:1,
    left:0,
});

gsap.to('.page5 p',{
    scrollTrigger:{
        trigger:'.page5 p',
        start:'top 80%',
        end:'top 20%',
        toggleActions:'play reverse restart reverse',
    },
    opacity:1,
    left:0,
});

gsap.to('.page5 .news_swiper',{
    scrollTrigger:{
        trigger:'.page5 .news_swiper',
        start:'top 80%',
        end:'top 20%',
        toggleActions:'play reverse restart reverse',
    },
    opacity:1,
    top:0,
});
gsap.to('.page6 h2',{
    scrollTrigger:{
        trigger:'.page6 h2',
        start:'top 80%',
        end:'top 20%',
        toggleActions:'play reverse restart reverse',
    },
    opacity:1,
    left:0,
});
gsap.to('.page6_top p',{
    scrollTrigger:{
        trigger:'.page6_top p',
        start:'top 80%',
        end:'top 20%',
        toggleActions:'play reverse restart reverse',
    },
    opacity:1,
    left:0,
});

gsap.to('.page6 .talent1',{
    scrollTrigger:{
        trigger:'.page6 .talent1',
        start:'top 80%',
        end:'top 20%',
        toggleActions:'play reverse restart reverse',
    },
    opacity:1,
    top:0,
});
gsap.to('.page6 .talent2',{
    scrollTrigger:{
        trigger:'.page6 .talent2',
        start:'top 80%',
        end:'top 20%',
        toggleActions:'play reverse restart reverse',
    },
    opacity:1,
    top:0,
});
gsap.to('.page6 .talent3',{
    scrollTrigger:{
        trigger:'.page6 .talent3',
        start:'top 80%',
        end:'top 20%',
        toggleActions:'play reverse restart reverse',
    },
    opacity:1,
    top:0,
});
gsap.to('.page6 .talent4',{
    scrollTrigger:{
        trigger:'.page6 .talent4',
        start:'top 80%',
        end:'top 20%',
        toggleActions:'play reverse restart reverse',
    },
    opacity:1,
    top:0,
});
