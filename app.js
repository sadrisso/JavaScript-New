let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        let userChoice = choice.getAttribute('id');
        playGame(userChoice)
    });
})
const drawGame = () => {
    console.log('Draw!')
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
        showWinner(userWin);
    }
}

const genCompChoice = () => {
    let idx = Math.floor(Math.random() * 3);
    let options = ['rock', 'paper', 'scissors'];
    return options[idx];
}

const showWinner = (userWin) => {
    if (userWin) {
        console.log('You win..')
    } else {
        console.log('You lose!')
    }
}
 