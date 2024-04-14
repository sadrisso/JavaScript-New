
let myArr = [1,2,3,4,5,6];

let yourArr = myArr.map((res) => {
    return res % 2 == 0;
})

console.log(yourArr)



// filter method

let evenArr = myArr.filter((val) => {
    return val % 2 === 0;
})

console.log(evenArr)


let oddArr = myArr.filter((r) => {
    return r % 2 != 0;
})

console.log(oddArr)



// reduce method 

let number = [10,2,3];

let arrSum = number.reduce((prev, crnt) => {
    return prev + crnt;
})

console.log(arrSum)

let bigNumber = number.reduce((p, c) => {
    return p > c ? p : c;
})

console.log(bigNumber)



// We are given array of marks of students. Filter out of the marks of the students who have scored 90+

let marks = [90, 88, 87, 84, 33, 45, 90, 99, 97, 95];

let newMarks = marks.filter((res) => {
    return res > 90;
})

console.log(newMarks)


// Take a number n as a input from user. Create an array of numbers from 1 to n;


let n = 5;
let nums = [];

for (let i = 0; i <= n; i++) {
    nums[i-1] = i
}
console.log(nums)

// use reduce method to calculate sum of all numbers in the array

let newNums = nums.reduce((p, c) => {
    return p + c;
})

console.log(newNums)


// use the reduce method to calculate the factorial of the array

let facNums = nums.reduce((p, c) => {
    return p * c;
})

console.log(facNums)