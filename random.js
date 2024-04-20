const form = document.querySelector('form');
const userGuess = document.querySelector('#guess-number');
const msg = document.querySelector('.result-pera');
const btn = document.querySelector('#btn');

let attemps = 0;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let guessNumber = userGuess.value;
    attemps++;
    if (attemps === 5) {
        userGuess.disabled = true;
        btn.disabled = true;
    };
    if (guessNumber < 6) {
        let guessNumber = Number(userGuess.value);
        playGame(guessNumber);
    }
    userGuess.value = '';
});

const playGame = (guessNumber) => {
    
    let randomNumber = getRandNum(5);

    if (guessNumber === randomNumber) {
        console.log(`You win guessNumber was ${guessNumber} and random number was ${randomNumber}`);
        msg.innerText = `You win. Your guess = ${guessNumber} & Random number = ${randomNumber}`
    } else {
        console.log(`You lost random number was ${randomNumber}`);
        msg.innerText = `You lost. Try again. Random number was ${randomNumber}`;
    };

};

const getRandNum = (limit) => {
    return Math.floor(Math.random() * limit + 1);
}