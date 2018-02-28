//start with strings, numbers and booleans
let age = 25;
let age2 = age;
console.log(age, age2);
age = 18;
console.log(age, age2);

let name = 'Vivek';
let name2 = name;
console.log(name, name2);
name = 'Maulik';
console.log(name, name2);

//arrays
let array = ['One', 'Two', 'Three']
let array2 = array;
console.log(array, array2);
array[3]= 'Four';
console.log(array, array2);

//how to fix the issue with arrays
const arraySlice = array.slice();
const arrayConcat = [].concat(array);
const arrayES6 = [...array];            //preferred
const arrayFrom = Array.from(array);    //preferred

array[4] = 'Five';
console.log(array, arraySlice, arrayConcat, arrayES6, arrayFrom);

//objects

//make a copy of it

//poor man's deep clone
