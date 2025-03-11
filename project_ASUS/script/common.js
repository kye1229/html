const htop = document.querySelector('.h_top');
const closeBtn = document.querySelector('.h_top #close_btn');
closeBtn.addEventListener('click',()=>{
    htop.style.display = 'none';
});

const subTab = document.querySelector('.header_left .sub_tab');
subTab.parentElement.addEventListener('mouseover',()=>{
    subTab.style.display='block';
});
subTab.addEventListener('mouseout',()=>{
    subTab.style.display='none';
});
subTab.addEventListener('mouseout',()=>{
    subTab.style.display='none';
});

const moreTab = document.querySelector('.header_right .more_tab');
const moreTab2 = document.querySelector('.header_right .more_tab2');
const subT = document.querySelector('.header_right .sub_tab_t');
const subM = document.querySelector('.header_right .sub_tab_m');
const subMh2 = document.querySelectorAll('.header_right .sub_tab_m .tab_title');
const subMmenu = document.querySelectorAll('.header_right .sub_tab_m .sub');
console.log(subMh2, subMmenu);
moreTab.addEventListener('click',()=>{
    subT.classList.toggle('active');
});

moreTab2.addEventListener('click',()=>{
    subM.classList.toggle('active');
});

function removeMsub() {

}
subMh2[1].addEventListener('click',(e)=>{
    e.preventDefault();
    subMmenu[0].classList.toggle('active');
})
subMh2[2].addEventListener('click',(e)=>{
    e.preventDefault();
    subMmenu[1].classList.toggle('active');
})
subMh2[3].addEventListener('click',(e)=>{
    e.preventDefault();
    subMmenu[2].classList.toggle('active');
})
subMh2[4].addEventListener('click',(e)=>{
    e.preventDefault();
    subMmenu[3].classList.toggle('active');
})
subMh2[5].addEventListener('click',(e)=>{
    e.preventDefault();
    subMmenu[4].classList.toggle('active');
})
subMh2[6].addEventListener('click',(e)=>{
    e.preventDefault();
    subMmenu[5].classList.toggle('active');
})
subMh2[7].addEventListener('click',(e)=>{
    e.preventDefault();
    subMmenu[6].classList.toggle('active');
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