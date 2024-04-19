let userScore = 0;
let compScore = 0;

const msg = document.querySelector('#msg');
const userScorePera = document.querySelector('#user-score');
const compScorePera = document.querySelector('#comp-score');

const choices = document.querySelectorAll('.choice');
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        let userChoice = choice.getAttribute('id');
        playGame(userChoice)
    });
})
const drawGame = () => {
    console.log('Draw!')
    msg.innerText = 'Game was draw!!';
    msg.style.backgroundColor = 'yellow';
}

const playGame = (userChoice) => {
    console.log('User choice =',userChoice)
    let compChoice = genCompChoice();
    console.log('Computer choice =', compChoice)

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === 'rock') {
            userWin = compChoice === 'paper' ? false : true;
        } else if (userChoice === 'scissors') {
            userWin = compChoice === 'rock' ? false : true;
        } else {
            userWin = compChoice === 'rock' ? true : false; 
        }
        showWinner(userWin, compChoice, userChoice);
    }
}

const genCompChoice = () => {
    let idx = Math.floor(Math.random() * 3);
    let options = ['rock', 'paper', 'scissors'];
    return options[idx];
}

const showWinner = (userWin, compChoice, userChoice) => {
    if (userWin) {
        console.log('You win..')
        msg.innerText = `You win your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'green';
        userScore++;
        userScorePera.innerText = userScore;
    } else {
        console.log('You lose!')
        msg.innerText = `You lost ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = 'red';
        compScore++;
        compScorePera.innerText = compScore;
    }
}
 