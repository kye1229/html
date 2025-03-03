const nav = document.querySelectorAll('.header_left nav ul li');
const sub = document.querySelectorAll('.header_left nav .sub');
console.log(nav,sub);
function removeSub(){
    sub[0].style.display = 'none';
    sub[1].style.display = 'none';
    sub[2].style.display = 'none';
    sub[3].style.display = 'none';
    sub[4].style.display = 'none';
    sub[5].style.display = 'none';
};
nav[0].addEventListener('mouseover',()=>{
    removeSub();
});
nav[0].addEventListener('mouseout',()=>{
    removeSub();
});
nav[1].addEventListener('mouseover',()=>{
    removeSub();
});
nav[1].addEventListener('mouseout',()=>{
    removeSub();
});
nav[2].addEventListener('mouseover',()=>{
    removeSub();
    sub[0].style.display ='block';
});
nav[3].addEventListener('mouseover',()=>{
    removeSub();
    sub[1].style.display ='block';
});
nav[4].addEventListener('mouseover',()=>{
    removeSub();
    sub[2].style.display ='block';
});
nav[5].addEventListener('mouseover',()=>{
    removeSub();
    sub[3].style.display ='block';
});
nav[6].addEventListener('mouseover',()=>{
    removeSub();
});
nav[7].addEventListener('mouseover',()=>{
    removeSub();
    sub[4].style.display ='block';
});
nav[8].addEventListener('mouseover',()=>{
    removeSub();
    sub[5].style.display ='block';
});

sub[0].addEventListener('mouseout',()=>{
    removeSub();
});
sub[1].addEventListener('mouseout',()=>{
    removeSub();
});
sub[2].addEventListener('mouseout',()=>{
    removeSub();
});
sub[3].addEventListener('mouseout',()=>{
    removeSub();
});
sub[4].addEventListener('mouseout',()=>{
    removeSub();
});
sub[5].addEventListener('mouseout',()=>{
    removeSub();
});
