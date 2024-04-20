
let choices = document.querySelectorAll('.choice');
let result = document.querySelector('.result-pera')

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
    } else {
        userChoice = true;
        if(userChoice = 'rock') {
            userChoice = compChoice === 'paper' ? false : true;
        } else if(userChoice = 'paper') {
            userChoice = compChoice === 'scissor' ? false : true;
        } else {
            userChoice = compChoice === 'rock' ? false : true;
        }
    }
}



const genCompChoice = () => {
    let options = ['rock', 'paper', 'scissor'];
    let idx = Math.floor(Math.random() * 3);
    return options[idx];
}