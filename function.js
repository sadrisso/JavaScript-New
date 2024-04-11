// function hello(){
//     console.log('Hello');
// }

// hello();

// function myFunction(){
//     console.log('Hi I am learning Javascript!');
//     console.log('Hello Function');
// }

// myFunction();

// function Hi(reply){
//     console.log(reply);
// }

// Hi('Hello');

// function addition(a, b) {
//     console.log('Addition of a and b is =',a + b);
// }

// addition(10,20);

// function subtraction(x, y){
//     console.log('Subtraction of x and y is =',x-y);
// }

// subtraction(200, 400);

// function multiplication(m, n){
//     console.log('Multiplication of',m,'and',n,'=',m*n);
// }

// multiplication(22,3);

// function division(o, p){
//     console.log('Division of',o,'and',p, '=',o/p);
// }

// division(4,2);

// function average(i,j,k){
//     let sum = 0;
//     sum += i+j+k;
//     let avg = sum / average.length
//     console.log('Average of',i,j,k,'is =', avg);
// }

// average(22,55,43);

// Arrow Function

const addition = (x, y) => {
    console.log('Addition of',x, 'and',y, 'is =',x+y)
}
addition(10,99)

// Create a function using the function keyword that takes a string as an argument and 
// return the number of vowels in the string?


function vowelCheck(res){
    let count = 0;
    for (const val of res){
        if(val === 'a' || val === 'e' || val === 'i' || val === 'o' || val ==='u'){
            count++;
        }
    }
    console.log(count)
}

vowelCheck('Drisso')

const str = (str) => {
    let count = 0;
    for (let char of str){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char ==='u'){
            count++;
        }
    }
    console.log(count)
}

str('Bangladesh');