
let choices = document.querySelectorAll('.choice');
let result = document.querySelector('.result-pera')
let user_score = document.querySelector('.user-score');
let comp_score = document.querySelector('.comp-score');
let footer = document.querySelector('.footer');
let userScore = 0;
let compScore = 0;

choices.forEach((choice) => {
    let userChoice = choice.getAttribute('id');
    choice.addEventListener('click', () => {
        console.log(`Your choice is ${userChoice}`)
        playGame(userChoice)
    });
});

const playGame = (userChoice) => {
    let compChoice = genCompChoice();
    console.log(`Comp choice ${compChoice}`)
    if (userChoice === compChoice) {
        console.log(`Draw !! Comp choice is ${compChoice} Your ${userChoice}`)
        result.innerText = `Draw !! Comp choice is ${compChoice} Your ${userChoice}`;
        footer.style.backgroundColor = 'blue';
    } else {
        userVal = true;
        if(userChoice === 'rock') {
            userVal = compChoice === 'paper' ? false : true;
        } else if(userChoice === 'paper') {
            userVal = compChoice === 'scissor' ? false : true;
        } else {
            userVal = compChoice === 'rock' ? false : true;
        }
        showWinner(userChoice, compChoice, userVal)
    }
}

const showWinner = (userChoice, compChoice, userVal) => {
    if (userVal) {
        result.innerText = `You won your choice is ${userChoice} Comp choice is ${compChoice}`;
        userScore++;
        user_score.innerText = userScore;
        footer.style.backgroundColor = 'green';
    } else {
        result.innerText = `You lost! Comp choice is ${compChoice} Your choice is ${userChoice}`;
        compScore++;
        comp_score.innerText = compScore;
        footer.style.backgroundColor = 'red';
    }
}

const genCompChoice = () => {
    let options = ['rock', 'paper', 'scissor'];
    let idx = Math.floor(Math.random() * 3);
    return options[idx];
}