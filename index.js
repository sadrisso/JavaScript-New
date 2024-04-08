
console.log('Hi')

// string type variable
let fullName = 'Shoeb akter drisso';
console.log(fullName)

let surName = 'Drisso';
console.log(surName)

// integer data type variable
let number = 100;
console.log(number)


// float data type variable
let floatValue = 3.17
console.log(floatValue)


// boolean type variable
let boll = true
console.log(boll)


const student = {
    name : 'Shoeb Akter Drisso',
    age : 22,
    subject : 'Accounting',
    year : '3rd',
    course : 'BBA'
}

console.log(student)
console.log(student.course)
console.log(student['name'])

student.age = student.age + 1
console.log(student.age)

student['year'] = student['year'] + 1
console.log(student.year)

student['name'] = 'Shoeb Drisso';
console.log(student['name'])


const product = {
    name : 'pen',
    rating : '5star',
    price : '$5',
    delivery : 'express'
}

console.log(product)

const profile = {
    profileName : 'Shradha Khapra',
    posts : '1.2k',
    follower : '100k',
    likes : '12k',
    title : 'entrepreneur'
}

console.log(profile)
console.log(typeof(profile))
console.log(typeof(profile.likes))



// Operators

let x = 3;
let y = 2;
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)
console.log(x ** y)
x++;
console.log(x)
x--
console.log(x)

x = 10
console.log('x++ =', x++)
console.log(x)
console.log('++x =', ++x)

x = 20;
y = 23;
console.log(x += 2)
console.log(x -= 2)

console.log(x *= 2)
console.log(x /= 2)
console.log(x **= 2)

x = 100;
y = 100;
z = x == y;
console.log(z)

z = x != y;
console.log(z)

z = x === y;
console.log(z)

z = x > y;
console.log(z)

z = x < y;
console.log(z)

z = x >= y;
console.log(z)

z = x <= y;
console.log(z)

const m = 130;
const n = 130;
con1 = m === n;
con2 = n > m;
console.log('x && y =', con1 && con2)


con3 = m || n
console.log(con1)


const p = 100;
const q = 100;

con1 = p === q;

console.log(!con1)
