let div = document.querySelector('div');
div.onmouseover = () => {
    console.log('You are inside the div..');
}

let btn = document.querySelector('#btn1');
btn.onclick = (evt) => {
    console.log(evt)
    console.log(evt.type)
    console.log(evt.target)
    console.log(evt.clientX, evt.clientY)
    console.log('Clicked');
}