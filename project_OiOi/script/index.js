const hTop = document.querySelector('.h_top');
const topClose = document.querySelector('.h_top #close_btn');
topClose.addEventListener('click',()=>{
    hTop.style.display='none';
});

const bnrSwiper = new Swiper ('.bnr_swiper',{
    /* autoplay:{delay:3000,}, */
    scrollbar:{
        el:'.swiper-scrollbar',
        /* hide:true, */
    },
})