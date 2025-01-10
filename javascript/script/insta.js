//인스타그램 아이콘 클릭 시 활성화 이미지로 변경하기
//like 이미지 클릭 시 off->on 변경 결과
//const like = document.querySelector('.like img');
//console.log(typeof like);
//console.log(like.src);
//insta.js 위치에서 like_on.png 프로젝트 최상위 폴더 기준(html) 연결
//like.src = './images/like_on.png';
//insta.css 위치에서 like_on.png 상대경로연결
//../images/like_on.png

//mouseover,mouseout 마우스 올렸을 때, 나갔을 때 이벤트
//off 이미지에 마우스를 올리면 on 변경
//on 이미지에 마우스를 나가면 off 변경
const likeIcon = document.querySelector('.like img');
const commentIcon = document.querySelector('.comments img');
const paperIcon = document.querySelector('.paper img');
console.log(likeIcon);

function iconSrc(target,name,status){
    return target.src = `./images/${name}_${status}.png`;
}

likeIcon.addEventListener('mouseover',function(){
    iconSrc(likeIcon,'like','on');
});
likeIcon.addEventListener('mouseout',function(){
    iconSrc(likeIcon,'like','off');
});

commentIcon.addEventListener('mouseover',function(){
    iconSrc(commentIcon,'comment','on');
});
commentIcon.addEventListener('mouseout',function(){
    iconSrc(commentIcon,'comment','off');
});

paperIcon.addEventListener('mouseover',function(){
    iconSrc(paperIcon,'paper','on');
});
paperIcon.addEventListener('mouseout',function(){
    iconSrc(paperIcon,'paper','off');
});