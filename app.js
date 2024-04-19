let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        let userChoice = choice.getAttribute('id');
        playGame(userChoice)
    });
})


const playGame = (userChoice) => {
    console.log('User choice =',userChoice)
    let compChoice = genCompChoice();
    console.log('Computer choice =', compChoice)
}

const genCompChoice = () => {
    let idx = Math.floor(Math.random() * 3);
    let options = ['rock', 'paper', 'scissors'];
    return options[idx];
}


 