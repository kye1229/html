//window.document.body.style = 'background-color:aqua';
document.write('250107'); //window 생략(기본 내장됨)
//DOM
//객체는 변수에 선언해야 한다.
//변수생성키워드 생성변수명 = 변수에대입되는값;
//변수 선언 시 [] 배열선언표시 없이 복수형 데이터를 저장하면 자동으로 배열로 인식된다.
//배열 인식 경로가 -> 각 데이터가 [0] [1] 인덱스로 구분되고 length 속성이 자동추가된다.
const title1 = document.getElementsByTagName('h1');
const title2 = document.getElementsByTagName('h2');
console.log(title1);
console.log(title2);
//DOM객체.속성;        //기존 속성 읽기
//DOM객체.속성 = '값'; //속성에 새로운 값 대입하기
title1[0].style = 'color:red';
title1[1].style = 'background-color:aqua';
title2[0].style = 'font-size:15px';
title2[1].style = 'font-weight:600';
title2[2].style = 'letter-spacing:2.0em';
const listWrap = document.getElementsByTagName('ul')[0];
const list = listWrap.getElementsByTagName('li');
console.log(listWrap);
console.log(list);
listWrap.style = 'background-color:aqua'; //listWrap[0][0] X
list[0].style = 'background-color:yellow';
list[1].style = 'background-color:lime';
list[2].style = 'background-color:orange';
//=======================
const linkWrap = document.getElementsByTagName('ul')[1];
const linkList = linkWrap.getElementsByTagName('li');
const linkTag1 = linkList[0].getElementsByTagName('a');
const linkTag2 = linkList[1].getElementsByTagName('a');
const aTagAll = linkWrap.getElementsByTagName('a');
console.log(linkWrap);
console.log(linkList);
console.log(linkTag1,linkTag2); //0 0
console.log(aTagAll); //0 1
linkWrap.style = 'background-color:aquamarine';
linkList[0].style = 'border:2px solid black';
linkList[1].style = 'border:2px solid green';
linkTag1[0].style = 'background-color:brown;'
linkTag2[0].style = 'background-color:hotpink';
/* 
HTML, CSS 작성 시 HTML의 가족관계를 우선시하여 li가 형제, a는 각 외동으로 각각 인식하지만 JS는 최종 선택 대상 앞의 'document' 자리에 누굴 쓰느냐에 따라 그 안에 있는 태그 전체를 순서대로 인식하기 때문에 실제 HTML 관계에서 a가 외동이든 아니든 'ul'을 선택했다면 ul 안 모든 a를 순서대로 인식해서 인덱스 번호를 적용한다. 하지만 'li'의 경우 li 안에는 a가 하나씩 밖에 배치안되어있으므로 각 a를 0번째로만 인식하게 된다.
*/
const subTitle = document.getElementsByClassName('sub_title')[0];
console.log(subTitle);
subTitle.style = 'background-color:lime';
//=============
const menu = document.getElementsByClassName('menu')[0];
const menuList = menu.getElementsByTagName('li');
const menuLink = menu.getElementsByTagName('a');
console.log(menu);
console.log(menuList);
console.log(menuLink);
menu.style = 'border:2px solid blue';
menuList[0].style = 'font-weight:700';
menuList[1].style = 'color:red';
menuList[2].style = 'background-color:orange';
menuList[3].style = 'font-size:18px';
menuLink[0].style = 'background-color:hotpink';
menuLink[1].style = 'background-color:coral';
menuLink[2].style = 'background-color:green';
menuLink[3].style = 'background-color:aqua';
const notice = document.getElementById('notice');
console.log(notice);
notice.style = 'color:red';
//===================
const container = document.getElementById('container');
const titleWrap = document.getElementById('title');
const titleA = titleWrap.getElementsByTagName('a');
const contents = document.getElementById('contents');
const contentsA = contents.getElementsByTagName('a');
console.log(container);
console.log(titleWrap);
console.log(titleA);
console.log(contents);
console.log(contentsA);
container.style = 'border:4px solid #007000';
titleWrap.style = 'background-color:#a4a4a4';
titleA[0].style = 'color:orange';
titleA[1].style = 'color:cyan';
contents.style = 'background-color:#565567';
contentsA[0].style = 'color:purple';
contentsA[1].style = 'color:white';
console.log('===============================');
const nav = document.getElementsByTagName('nav')[0];
const gnb = nav.getElementsByClassName('gnb')[0];
const gnbLi = gnb.getElementsByTagName('li');
const lnb = gnb.getElementsByClassName('lnb')[0];
const lnbLi = lnb.getElementsByTagName('li');
const lnbLiA = lnb.getElementsByTagName('a');
nav.style = 'background-color:lime';
