
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


// Create element

let myBtn = document.createElement('button');
myBtn.innerText = 'Click me!';

let body = document.querySelector('body');
body.append(myBtn);

let headDiv = document.querySelector('.headDiv');
headDiv.prepend(myBtn);

let scriptTag = document.querySelector('script');
scriptTag.after(myBtn)


// Create a new button element. Give it a text 'Click Me', background color of red and text color of white
// Insert the button as the first element inside body tag?

let button = document.createElement('button');
button.innerHTML = '<i>Click Me!</i>';
button.style.backgroundColor = 'red';
button.style.color = 'white';
button.style.border = 'red';
let b = document.querySelector('body');
b.prepend(button);


// Create a p tag in html give it a class and some styling
// Now create a new class in CSS and try to append this class to the p element
// Did you notice how you overWrite the class name when you add a new one?
// Solve this problem using classList.


let myPera = document.querySelector('.myPera');
myPera.classList.add('yourPera');