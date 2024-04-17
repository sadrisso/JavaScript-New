
// Create a h2 heading element with text 'hello javascript'. append 'from apna college students' to this text using js

let headingTwo = document.querySelector('.headingTwo');
let newHeading = headingTwo.innerText = headingTwo.innerText + ' from apna college students';
console.dir(newHeading)

// Create three div with common class name 'box' access them and add some unique text to each of them

let divs = document.querySelectorAll('.box');
divs[0].innerText = 'JS';
divs[1].innerText = 'Python';
divs[2].innerText = 'PHP';
