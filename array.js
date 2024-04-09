let marks = [11,23,45,78,24,90,47];
let sum = 0
for (let i = 0; i < marks.length; i++) {
    sum += marks[i]
}
let avg = sum / marks.length;
console.log('average is =', avg)

let heros = ['ironman', 'thor', 'captainAmerica', 'shaktiman', 'thanos'];
console.log(heros)
heros[0] = 'batman';
console.log(heros)


for (i = 0; i < heros.length; i++) {
    console.log(heros[i])
}

for (let val in heros){
    console.log(val)
}

for (let res of heros){
    console.log(res.toUpperCase())
}

let mark = [10,20,30,40];
let summ = 0;

for (let j = 0; j < mark.length; j++) {
    summ += mark[j]
}
console.log(`Total marks of all student is: ${summ}`)
let average = summ / mark.length;
console.log(`Average mark of all students is: ${average}`)


let items = [100, 900, 300, 660]
// let idx = 0;
// for(let val of items){
//     let offer = val/10;
//     items[idx] = items[idx] - offer
//     console.log(items[idx])
//     idx++;
// }

for (let idx = 0; idx < items.length; idx++) {
    let offer = items[idx] / 10;
    items[idx] -= offer
}

console.log(items)