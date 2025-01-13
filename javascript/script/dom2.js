//자바스크립트 동적기능에 의해서 요소가 생성될 경우 createElement();
const new_child = document.createElement('div'); //태그명만 작성
const new_p = document.createElement('p');
const parent = document.querySelector('#parent');
const childNode = document.querySelectorAll('.child');

console.log(new_child,parent,new_p,childNode);
console.log(parent.firstElementChild);
console.log(parent.children[2].previousElementSibling); //012 Nodes

//기준이 되는 부모변수.appendChild(마지막자식위치에 추가하고 싶은 노드변수);
new_child.innerText = '새로운 요소';
new_p.innerHTML = '<em>새로운 요소2</em>'
parent.appendChild(new_child);
document.body.appendChild(new_p);
parent.firstElementChild.appendChild(new_p);
parent.children[2].previousElementSibling.appendChild(new_child);
//기준부모변수.insertBefore(추가요소, 기준요소);
parent.insertBefore(new_p,childNode[2]);
//삭제대상변수.remove();
//숨기는 개념(style.display = 'none')이 아닌 요소 삭제('',remove) 개념! 쇼핑몰 장바구니 삭제 등으로 이용
//childNode[0].remove();
//숨기는대상의부모변수.removeChild(부모의n번째자식변수);
parent.removeChild(childNode[0]);
