
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
        console.log('Draw');
    } else {
        let userVal = true;
        if (userChoice === 'rock') {
            userVal = compChoice === 'paper' ? false : true;
        } else if (userChoice === 'paper') {
            userVal = compChoice === 'scissor' ? false : true;
        } else {
            userVal = compChoice === 'rock' ? false : true;
        }

    }
}

const genCompChoice = () => {
    let options = ['rock', 'paper', 'scissor'];
    let idx = Math.floor(Math.random() * 3);
    return options[idx];
}