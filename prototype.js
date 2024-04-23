
let student = {
    name: 'Shoeb',
    age: 22,
    calcGpa() {
        console.log('Your gpa is: 3.44');
    }
}

console.log(student)


let anisul = {
    tax_rate() {
        console.log('Tax rate is 10%');
    }
}

let employee = {
    sallary: 20000,
}

employee.__proto__ = anisul;
console.log(employee)


const person1 = {
    designation: 'mechanical',
    title() {
        console.log('Mechanical engineer');
    },
    common_title() {
        console.log('Engineer')
    }
}

const person2 = {
    designation: 'software',
    title() {
        console.log('Software engineer');
    },
    common_title() {
        console.log('Software engineer')
    }
}

person2.__proto__ = person1;
console.log(person2)
console.log(person2.common_title)