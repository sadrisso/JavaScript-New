
const age = 33;

con1 = age >= 18 ? 'Adult' : 'Child';
console.log(con1)


const level = 10;

con2 = level >= 10 ? 'Senior' : 'Junior';
console.log(con2)


let alu = 40;

con3 = alu <= 50 ? 'Cheap' : 'Expensive';
console.log(con3)

let js = '100%';

con4 = js === '100%' ? 'popular' : 'not popular';
console.log(con4)

let python = false;

con5 = python && con4 ? 'true' : 'false';
console.log(con5)

let php = false;

con6 = php || python == true ? 'true' : 'false';
console.log(con6)


let mobilePrice = 10000;

con7 = mobilePrice > 5000 && mobilePrice <= 20000 ? 'entry level' : 'flagship';
console.log(con7)
      

let a = 10;

switch(a){
    case 10:
        console.log('ten')
        break;
    case 20:
        console.log('twinty')
        break;
    case 30:
        console.log('thirty')
        break;
    case 50:
        console.log('fifty')
        break;
    default:
        console.log('not ten to fifty')
}   