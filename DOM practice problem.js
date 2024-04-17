
// Create a h2 heading element with text 'hello javascript'. append 'from apna college students' to this text using js

let headingTwo = document.querySelector('.headingTwo');
let newHeading = headingTwo.innerText = headingTwo.innerText + ' from apna college students';
console.dir(newHeading)

// Create three div with common class name 'box' access them and add some unique text to each of them

let divs = document.querySelectorAll('.box');

let idx = 1;
for (div of divs){
    div.innerText = `This is unique value ${idx}`;
    idx++;
}

// getting the attribute

let val = div.getAttribute('class')
console.log(val)

// set attribute

let h3 = document.querySelector('.headingThree');
console.log(h3.setAttribute('class', 'h3'))

div.style.backgroundColor = 'red';
headingTwo.style.backgroundColor = 'blue'; 
divs[0].style.fontSize = '28px';
divs[1].style.fontSize = '30px';
divs[2].style.color = 'white';
divs[2].style.visibility = 'hidden';