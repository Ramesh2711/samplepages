'use strict';

const cl=function(i){
    console.log(i);
}

let secretNumber=Math.trunc(Math.random()*20)+1;
cl('secret number'+':'+secretNumber);
let score=20;
let highscore=0;

const displayMessage=function(msg){
    document.querySelector('.message').textContent=msg;
}

document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    cl(guess);
    if(!guess){
        displayMessage('😒no input entered!!');
    }else if(guess>20){
        displayMessage('please choose between 1 and 20.');
    }else if(guess===secretNumber){
        displayMessage('😍correct answer!!');
        document.querySelector('.number').textContent=secretNumber;
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('body').style.backgroundColor='green';
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }else if(guess!==secretNumber){
       if(score>1){
        displayMessage(guess>secretNumber?'too high!':'too low!');
        score--;
        document.querySelector('.score').textContent=score;
       }else{
        displayMessage('you lost the game.Try again!!');
        document.querySelector('.score').textContent = 0;
       }
    }
})

document.querySelector('.again').addEventListener('click',function(){
    secretNumber=Math.trunc(Math.random()*20)+1;
    cl('secret number'+':'+secretNumber);
    score=20;
    document.querySelector('.score').textContent=score;
    document.querySelector('.guess').value='';
    displayMessage('Start Guessing...');
    document.querySelector('.number').textContent='?';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width = '15rem';
})



