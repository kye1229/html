const colSwiper = new Swiper('.collect_swiper',{
    slidesPerView:2.7,
    slidesPerGroup:3,
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

const menuList = document.querySelectorAll('.menu_list a');

function removeMenu() {
    menuList[0].classList.remove('active');
    menuList[1].classList.remove('active');
    menuList[2].classList.remove('active');
    menuList[3].classList.remove('active');
    menuList[4].classList.remove('active');
}

menuList[0].addEventListener('click',(e)=>{
    e.preventDefault();
    removeMenu();
    menuList[0].classList.add('active');
})
menuList[1].addEventListener('click',(e)=>{
    e.preventDefault();
    removeMenu();
    menuList[1].classList.add('active');
})
menuList[2].addEventListener('click',(e)=>{
    e.preventDefault();
    removeMenu();
    menuList[2].classList.add('active');
})
menuList[3].addEventListener('click',(e)=>{
    e.preventDefault();
    removeMenu();
    menuList[3].classList.add('active');
})
menuList[4].addEventListener('click',(e)=>{
    e.preventDefault();
    removeMenu();
    menuList[4].classList.add('active');
})