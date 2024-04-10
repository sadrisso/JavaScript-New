
let myArr = [1,2,3,4,5,6,8];
let yourArr = [2,4,5,6,7]
myArr.push(10) // push on last index
console.log(myArr)

myArr.pop() // remove from last index
console.log(myArr)

let ourArr = myArr.concat(yourArr)
console.log(ourArr)

let heros = ['thor', 'ironman', 'captain']
heros.unshift('thanos') // add on first index
console.log(heros)

heros.shift() // remove from first index
console.log(heros)


let indianHeros = ['shaktiman', 'kris', 'shahkukh']
let sliceHeros = indianHeros.slice(0, 2)  // not change main array

console.log(indianHeros)
console.log(sliceHeros)


let names = ['Drisso', 'Durjoy', 'Galib', 'Khusbu', 'Trisha', 'Topu'];
console.log(names)
names.splice(0, 2, 'Shakil', 'Biplob')  // it takes 3 arguments whare to start, cut size and new value
console.log(names)


let numbers = [1,2,3,66,78,6,7,8];
console.log(numbers)
numbers.splice(3, 2, 4,5)
console.log(numbers)

numbers.splice(4)
console.log(numbers)


// create an array to store companies -> bloombarg, microsoft, uber, google, IBM, netflix
// a. remove the first company from the array
// b. remove uber and add ole in its place
// c. add amazon at the end

let companies = ['Bloombarg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix'];

companies.shift()  // required a done
console.log(companies)

companies.splice(2, 1, 'Ole'); // required b done
console.log(companies)

companies.push('Amazon'); // required c done
console.log(companies)