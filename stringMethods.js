
let str1 = 'Apna\nCollege';
console.log(str1)

let str2 = 'Apna\tCollege';
console.log(str2)

let str3 = 'Drisso';
str3Len = str3.length;
console.log(str3Len)

let str4 = 'Shoeb';
str4Upper = str4.toUpperCase();
console.log(str4Upper)

let str5 = 'Akter';
str5Low = str5.toLowerCase()
console.log(str5Low)

let str6 = '    Hello World   ';
str6Trim = str6.trim();             // it removes whitespaces
console.log(str6Trim)

let str7 = 'abcdefghij';
sliceElement = str7.slice(0, 3)
console.log(sliceElement)

let str8 = 'klmnop';
concatElement = str7.concat(str8)
console.log(concatElement)

let str9 = 'Shakib';
let replaceValue = str9.replace('kib', 75)
console.log(replaceValue)


let userName = prompt('Enter yout fullname without any space: ')
let fullName = '@' + userName + userName.length;
console.log(fullName)