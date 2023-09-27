let score = JSON.parse(localStorage.getItem('score')) || {
    Wins : 0,
    Loses: 0,
    Ties: 0
};

updateScore();

/*
 
if(score === null){
    score = {
        Wins : 0,
        Loses: 0,
        Ties: 0
    }
}
 */

function playGame(playerMove){
    const computerMove = pickComputerMove();  
     
    let result = '';

        if(playerMove === 'Scissors'){ 

        if(computerMove === 'Rock'){
            result = 'You lose';
        }else if(computerMove === 'Paper'){
            result = 'You win';
        }else if(computerMove === 'Scissors'){  
            result = 'Tie';
        }
}else if(playerMove === 'Rock'){

        if(computerMove === 'Rock'){
            result = 'Tie';
        }else if(computerMove === 'Paper'){
            result = 'You lose';
        }else if(computerMove === 'Scissors'){
            result = 'You win';
        }

}else if(playerMove === 'Paper'){

        if(computerMove === 'Rock'){
            result = 'You lose';
        }else if(computerMove === 'Paper'){
            result = 'Tie';
        }else if(computerMove === 'Scissors'){
            result = 'You win';
        }
}

if(result === 'You win'){
    score.Wins += 1
}
else if(result === 'You lose'){
    score.Loses += 1
}
else if(result === 'Tie'){
    score.Ties  += 1
}

localStorage.setItem('score', JSON.stringify(score));

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML = 
`you <img src="img/${playerMove}-emoji.png" class="move"><img src="/img/${computerMove}-emoji.png" class="move">Computer`;

updateScore();

}

function updateScore () {
document.querySelector('.js-score')
 .innerHTML = `Wins: ${score.Wins}, Loses: ${score.Loses}, Ties: ${score.Ties}`;
}

function pickComputerMove(){
const randomNumber = Math.random();
 
let computerMove = '';

if(randomNumber >= 0 && randomNumber < 1/3 ){
    computerMove = 'Rock';
}else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'Paper';
}else if(randomNumber >= 2/3 && randomNumber < 1){
    computerMove = 'Scissors';
}

return computerMove;
}