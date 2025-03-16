const cateList = document.querySelectorAll('.cate_list a');
const cateTitle = document.querySelector('.cate_list h2');

function removeCate(){
    cateList[0].classList.remove('active');
    cateList[1].classList.remove('active');
    cateList[2].classList.remove('active');
    cateList[3].classList.remove('active');
    cateList[4].classList.remove('active');
    cateList[5].classList.remove('active');
    cateList[6].classList.remove('active');
    cateList[7].classList.remove('active');
}

cateList[0].addEventListener('click',(e)=>{
    e.preventDefault();
    removeCate();
    cateTitle.innerText = 'ALL';
    cateList[0].classList.add('active');
})
cateList[1].addEventListener('click',(e)=>{
    e.preventDefault();
    removeCate();
    cateTitle.innerText = 'OUTER';
    cateList[1].classList.add('active');
})
cateList[2].addEventListener('click',(e)=>{
    e.preventDefault();
    removeCate();
    cateTitle.innerText = 'DRESS';
    cateList[2].classList.add('active');
})
cateList[3].addEventListener('click',(e)=>{
    e.preventDefault();
    removeCate();
    cateTitle.innerText = 'KNITWEAR';
    cateList[3].classList.add('active');
})
cateList[4].addEventListener('click',(e)=>{
    e.preventDefault();
    removeCate();
    cateTitle.innerText = 'TOP';
    cateList[4].classList.add('active');
})
cateList[5].addEventListener('click',(e)=>{
    e.preventDefault();
    removeCate();
    cateTitle.innerText = 'BOTTOM';
    cateList[5].classList.add('active');
})
cateList[6].addEventListener('click',(e)=>{
    e.preventDefault();
    removeCate();
    cateTitle.innerText = 'SHOES';
    cateList[6].classList.add('active');
})
cateList[7].addEventListener('click',(e)=>{
    e.preventDefault();
    removeCate();
    cateTitle.innerText = 'ACC';
    cateList[7].classList.add('active');
})