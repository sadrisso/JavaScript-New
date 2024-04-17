console.dir(window.document)
console.log(document.body)

let headingOne = document.getElementById('headingOne');
console.log(headingOne)

let headingFour = document.getElementsByClassName('headingdFour');
console.log(headingFour)

let pera = document.getElementsByTagName('p');
console.dir(pera)

let firstEl = document.querySelector('h1');
console.dir(firstEl)

let allEle = document.querySelectorAll('h1');
console.dir(allEle)

let firstPera = document.querySelector('.pera')
console.log(firstPera.innerHTML)

let secondPera = document.querySelector('.pera2')

let input = document.querySelector('#input')
console.log(input)

let firstPeraTag = firstPera.innerHTML;
let secondPeraText = secondPera.innerText;
console.log(firstPeraTag)

let container = document.querySelector('.container')  // inner html comes with html tags
console.log(container.innerHTML)


let container2 = document.querySelector('.container2')  // inner text means just text content
console.log(container2.innerText)


let heading3 = document.querySelector('h3')  // text content showes hidden elements too
console.log(heading3.textContent)