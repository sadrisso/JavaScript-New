const form = document.querySelector('form');
const userGuess = document.querySelector('#guess-number');
const msg = document.querySelector('.result-pera');
const btn = document.querySelector('#btn');

let attemps = 0;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let guessNumber = userGuess.value;
    playGame(guessNumber);
    attemps++;
    if (attemps === 5) {
        userGuess.disabled = true;
        btn.disabled = true;
    };
    userGuess.value = '';
});

const playGame = (guessNumber) => {
    
    let randomNumber = getRandNum();

    if (guessNumber === randomNumber) {
        console.log(`You win guessNumber was ${guessNumber} and random number was ${randomNumber}`);
    } else {
        console.log(`You lost random number was ${randomNumber}`);
    };

};


const getRandNum = () => {
    let randomNumber = Math.floor(Math.random() * 5 + 1);
    return randomNumber;
}