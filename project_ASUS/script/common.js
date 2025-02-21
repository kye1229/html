const htop = document.querySelector('.h_top');
const closeBtn = document.querySelector('.h_top #close_btn');
closeBtn.addEventListener('click',()=>{
    htop.style.display = 'none';
});

const tabMenu = document.querySelectorAll('header nav ul li')
const subTab = document.querySelector('header .sub_tab');
tabMenu[1].addEventListener('mouseover',()=>{
    subTab.style.display = 'block';
})
subTab.addEventListener('mouseout',()=>{
    subTab.style.display = 'none';
})

const searchPopup = document.querySelector('header .search_popup');
const searchIcon = document.querySelector('.header_right .search');
const searchClose = document.querySelector('.search_popup #close_btn');
searchIcon.addEventListener('click',()=>{
    searchPopup.style.display = 'block';
})
searchClose.addEventListener('click',()=>{
    searchPopup.style.display='none';
})
console.log(searchPopup);