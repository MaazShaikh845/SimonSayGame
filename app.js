//Event bubbling
// let div = document.querySelector('div');
// let ul = document.querySelector('ul');
// let lis = document.querySelectorAll('li');

// div.addEventListener ('click', function() {
//     console.log("div was clicked");
// })

// ul.addEventListener ('click', function(event) {
//     event.stopPropagation();
//     console.log("ul was clicked");
// })

// for (li of lis) {
//     li.addEventListener('click', function(event) {
//         event.stopPropagation();
//         console.log("li was clicked");
//     })
// }

// let btn = document.querySelector('button');
// let ul = document.querySelector('ul');
// let input = document.querySelector('input');


// btn.addEventListener('click', function() {
//     let element = document.createElement('li');
//     element.innerText = input.value;

//     let delel = document.createElement('button');
//     delel.innerText = "delete";
//     delel.classList.add('delete');
//     element.appendChild(delel);

//     ul.appendChild(element);
//     input.value = "";

// })

// ul.addEventListener('click', function(event) {
//     let del = document.querySelectorAll("button");
//     if (event.target.nodeName == 'BUTTON') {
//         let par = event.target.parentElement;
//         par.remove();
//         console.log("deleted")
//     }
    
// })

//Simon say game

// let gameSeq = [];
// let userSeq = [];
// let btn = ['red','yellow','green','blue'];

// let start = false;
// let level = 0;

// let h2 = document.querySelector('h2');


// document.addEventListener('keypress', function() {
//     if (start == false) {
//         console.log("Game started");
//         start = true;

//         levelUp();
//     }
// })

// function btnFlash(btn) {
//     btn.classList.add('flash');
//     setTimeout( function() {
//         btn.classList.remove('flash')
//     }, 150);
// }

// function userFlash(btn) {
//     btn.classList.add('user');
//     setTimeout( function() {
//         btn.classList.remove('user')
//     }, 150);
// }

// function levelUp() {
//     userSeq = [];
//     level++;
//     h2.innerText = `level ${level}`;


//     let randomInd = Math.floor( Math.random()*3);
//     let randColor = btn[randomInd];
//     let randBtn = document.querySelector(`.${randColor}`);

//     gameSeq.push(randColor);
//     console.log(gameSeq);
//     btnFlash(randBtn);



// }

// function checkAns(indx) {
//     if (gameSeq[indx] == userSeq[indx]) {
//         if(gameSeq.length == userSeq.length){
//             setTimeout(levelUp, 1000);
//         }
//     } else {
//         h2.innerHTML = `Game over!, Your score was <b>${level}</b> <br> press any key to start`;
//         document.querySelector('body').style.backgroundColor = 'red';
//         setTimeout( function() {
//             document.querySelector('body').style.backgroundColor = 'white';
//         }, 150);

//         heighestScore();
//         reset();
//     }
// }

// function btnPress() {
//     let btn = this;
//     userFlash(btn);

//     userColor = btn.getAttribute('id');
//     userSeq.push(userColor);

//     checkAns(userSeq.length-1);
// }

// let btns = document.querySelectorAll('.btn');

// for (allBtn of btns) {
//     allBtn.addEventListener('click', btnPress);
// }

// function reset() {
//     start = false;
//     gameSeq = [];
//     userSeq = [];
//     level = 0;
// }

// let max = 0;
// function heighestScore() {
//     let score = document.querySelector('.high');
//     if (level >= max) {
//         score.innerText = `Heighest score was: ${level}`;
//         max = level;
//     } else {
//         score.innerText = `Heighest score was: ${max}`;
//     }
// }