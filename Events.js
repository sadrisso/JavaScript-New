let div = document.querySelector('div');
// div.onmouseover = () => {
//     console.log('You are inside the div..');
// }

div.addEventListener('mouseover', (evt) => {
    console.log(evt);
    console.log('inside div');
});

let btn = document.querySelector('#btn1');
// btn.onclick = (evt) => {
//     console.log(evt)
//     console.log(evt.type)
//     console.log(evt.target)
//     console.log(evt.clientX, evt.clientY)
//     console.log('Clicked');
// }


let clicked2 = () => {
    console.log('Clicked 2');
};

btn.addEventListener('click', (evt) => {
    console.log(evt);
    console.log('Clicked 1');
});

btn.addEventListener('click', clicked2);
btn.removeEventListener('click', clicked2);

btn.addEventListener('click', (evt) => {
    console.log(evt);
    console.log('Clicked 3');
});