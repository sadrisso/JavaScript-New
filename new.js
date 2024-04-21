
let choices = document.querySelectorAll('.choice');
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        let userChoice = choice.getAttribute('id')
        console.log(`User choice is: ${userChoice}`)
    });
});