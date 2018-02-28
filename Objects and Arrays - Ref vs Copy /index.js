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
const person ={ 
	name : 'Vievk',
	age : 26
}

//make a copy of it
const person2 = person;
person2.number = 2;
console.log(person, person2);

//how to fix the issue with objects
const person3 = Object.assign({}, person, {number : 3, age : 18});
const person4 = {...person};
console.log(person, person3, person4);

/*
    Arrays and Objects
    NOTE - this is only level 1 deep. Should be able to find functions
        called cloneDeep, but think twice before using it. 
        Do you really need to deep copy?
*/

//poor man's deep clone - shaking all the refernces, might be slow performant
const person5 = JSON.parse(JSON.stringify(person));