
let msg = document.querySelector('.msg');
let msgPera = document.querySelector('.msg-pera');
let compScore = document.querySelector('.comp-score');
let userScore = document.querySelector('.user-score');
let cScore = 0;
let uScore = 0;

let choices = document.querySelectorAll('.choice');
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        let userChoice = choice.getAttribute('id')
        console.log(`User choice is: ${userChoice}`)
        playGame(userChoice)
    });
});


const playGame = (userChoice) => {
    console.log(`User choice is ${userChoice}`);
    let compChoice = genCompChoice();
    console.log(`Comp choice is ${compChoice}`);

    if (userChoice === compChoice) {
        console.log('DRAW');
        msg.innerText = 'DRAW';
        msgPera.innerText = 'draw...';
        msg.style.backgroundColor = 'yellow';
    } else {
        let userVal = true;
        if (userChoice === 'rock') {
            userVal = compChoice === 'paper' ? false : true;
        } else if (userChoice === 'paper') {
            userVal = compChoice === 'scissor' ? false : true;
        } else {
            userVal = compChoice === 'rock' ? false : true;
        }
        showResult(userVal, userChoice, compChoice);
    }
}

const showResult = (userVal, userChoice, compChoice) => {
    if (userVal) {
        msgPera.innerText = `You win, your choice is ${userChoice} comp choice is ${compChoice}`;
        uScore++;
        userScore.innerText = uScore;
        msg.innerText = 'You win CONGRATULATIONS!';
        msg.style.backgroundColor = 'green';
    } else {
        msgPera.innerText = `You lost, comp choice is ${compChoice} your choice is ${userChoice}`;
        cScore++;
        compScore.innerText = cScore;
        msg.innerText = 'You lost TRY AGAIN!';
        msg.style.backgroundColor = 'red';
    }
}

const genCompChoice = () => {
    let options = ['rock', 'paper', 'scissor'];
    let idx = Math.floor(Math.random() * 3);
    return options[idx];
}