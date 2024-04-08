
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