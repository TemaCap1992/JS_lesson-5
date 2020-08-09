"use strict"


// TASK 1 =============================================
let userName = prompt('Enter your name please');
let userSurname = prompt('Enter your Surname please');
let userAge = prompt('Enter your age please');
let userMood = prompt('Enter your mood please');

let div = document.createElement('div');
div.className = 'user';
div.innerHTML = '';
document.body.append(div);

let span = document.createElement('span');
span.className = 'userName';
span.innerHTML = userName;
document.querySelector('div.user').append(span);

let spanLast = document.createElement('span');
spanLast.className = 'userSurname';
spanLast.innerHTML = userSurname;
document.querySelector('div.user').prepend(spanLast);

let pAge = document.createElement('p');
pAge.className = 'userAge';
pAge.innerHTML = userAge;
document.querySelector('div.user').append(pAge);

let p = document.createElement('p');
p.className = 'userMood';
p.innerHTML = userMood;
document.querySelector('div.user').append(p);


document.querySelector('div.user').style.background = 'cornsilk';


document.querySelector('span').style.background = 'orange';
document.querySelector('span').style.display = 'block';
document.querySelector('p').style.background = 'red';

// TASK 2 ============================================

let quantityP = document.querySelectorAll('p').length;
console.log(quantityP);

let quantityDiv = document.querySelectorAll('div').length;
console.log(quantityDiv);

let quantitySpan = document.querySelectorAll('span').length;
console.log(quantitySpan);


let quantityClasses = document.querySelector('div.user').classList;
// как обратиться ко всем классам всех тегов так и не сообразил
console.log(quantityClasses);


let getQuantityTags = {
    div: quantityDiv,
    span: quantitySpan,
    p: quantityP,
    classes: quantityClasses
};
console.log(getQuantityTags);

// TASK 3 ============================================

function changeColor() {

    let lengthtOrderList = document.querySelectorAll('li').length;

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    let randomNumber = getRandomInt(lengthtOrderList);

    let elem = document.querySelectorAll('li')[randomNumber];
    elem.style.background = 'red';
    setTimeout(() => elem.style.background = '', 1000);
}
changeColor();


let timerId = setInterval(() => changeColor(), 1000);
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 20000);











