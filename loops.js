
for (let i = 10; i <= 20; i++){
    console.log(i)
}

for (let j = 20; j <= 25; j++){
    console.log('Hi')
}

for (let m = 0; m <= 100; m+=2){
    console.log(m)
}

let sum = 0;
for (x = 0; x <= 5; x++){
    sum += x
}
console.log('sum is: ', sum)


let summ = 0;
let n = 10;

for (y = 0; y <= n; y+=2){
    summ += y
}
console.log(summ)


// while loop

let hello = 10;

while(hello <= 12){
    console.log('hello')
    hello ++;
}

let ssum = 0;
let m = 10;
let l = 20;

while(m <= l){
    ssum += m
    m++
}
console.log(ssum)


let a = 0
do {
    console.log(a)
    a++
}while(a >= 10)


// for of loop

let str = 'Drisso';
let size = 0;

for (let value of str){
    console.log('value = ', value)
    size ++;
}   
console.log('Drisso size is =', size)