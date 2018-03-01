//ECMAScript 6
 let fname = 'Vivek',
    lname = 'Gondalia';

//let vs var - ALWAYS use let
if(true){
    let x = 'Poop';
    console.log('Inside if statement', x);
}
console.log('Outside if statement', x);

//Data types
console.log(typeof true);
console.log(typeof 3.14);
console.log(typeof "string");
console.log(typeof Symbol());
console.log(typeof {a:1});
console.log(typeof [1,2,3]);
console.log(typeof undefined);

//template literals
console.log(`${fname} ${lname}`);

let num1 = 10;
let num2 = 20;
console.log(`10 * 20 = ${num1 * num2}`);

function doMath(strings, ...values){
    if(strings[0] == 'Add'){
        console.log(`${vaules[0]} + ${values[1]} = ${values[0] + values[1]}`);
    } else if (strings[0] == 'Sub'){
        console.log(`${vaules[0]} - ${values[1]} = ${values[0] - values[1]}`);
    }
}

doMath `Add${10} ${20}`;
doMath `Sub${num2} ${num1}`;

//for of - fname = 'Vivek'
for(let c of fname){
    console.log(`${c}`);
}

//String methods - repeat(), startsWith(), endsWith(), includes()
console.log("Poop".repeat(3));
console.log(fname.startsWith('Vi'));
console.log(fname.endsWith('ek'));
console.log(fname.includes('iv'));

//multiline String
console.log(`This is 
a multiline
string`);

//functions
function getSum(num1 = 1, num2 = 2){
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    console.log(`${arguments[0] + arguments[1]}`);
}

getSum();   //outputs 3
getSum(3);  //outputs 5

//rest parameters - are preceded by 3 dots, treated as an array
function getSumMore(...vals){
    let sum = 0;
    for(let i = 0; i < vals.length; i++){
        sum += vals[i];
    }
    console.log(`The sum is ${sum}`);
}

getSumMore(1,2,3,4);

let vals = [1,2,3,4,5];
getSumMore(...vals);

//arrow function - define parameters followed by body of function
let difference = (num1, num2) => num2 - num1;
console.log(`Difference of ${num2} - ${num2} = ${difference(10, 5)}`);

let mult = (num1, num2) => {
    let product = num1 * num2;
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
}

let valArr = [1,2,3,4,5];
//map
let doubles = valArr.map(v => v * 2);
console.log(`Double of ${valArr}: ${doubles}`);

//reduce - function that returns a single result (accumulator)
let sumVals = valArr.reduce((a,b) => a + b);
console.log(`Sum of ${valArr}: ${sumVals}`);

//filter
let evens = valArr.filter( v => v % 2 == 0);
console.log(`Evens of ${valArr}: ${evens}`);

//objects literals
function createAnimal(name, owner){
    return {
        name, 
        owner,
        getInfo(){
            return `${this.name} is owned by ${this.owner}`;
        },
        address: {
            street: '123 Main St',
            city: 'Salem'
        }
    }
}

var spot = createAnimal("Spot", "Jim");
console.log(`${spot.getInfo()}`);
console.log(`${Object.getOwnPropertyNames(spot).join(", ")}`);
console.log(``);

//destructuring - store values from objects
let {name , owner} = spot;
let {address} = spot;

let favNums = [2.17, 3.14, 4.99];
let [,,chaos] = favNums;
let [, ...last2] = favNums;

let val1 = 1, val2 = 2;
[val1, val2] = [val2, val1];

//classes - similar to other languages
class Mammal{
    constructor(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    static makeMammal(name){
        return new Mammal(name);
    }

    getInfo(){
        return `${this.name} is a mammal`;
    }
}

let monkey = new Mammal("Mark");
monkey.name = 'Marcel';

let chipmunk = Mammal.makeMammal('Chipper');

//inheritance
class Marsupial extends Mammal {
    constructor(name, hasPouch){
        super(name);
        this._hasPouch  = hasPouch;
    }

    get hasPouch(){
        return this._hasPouch;
    }

    set hasPouch(hasPouch){
        this._hasPouch = hasPouch;
    }

    getInfo(){
        return `${this.name} is a marsupial`;
    }
}

let kangaroo = new Marsupial('Jack', true);

//Arrays
let array1 = Array.of(1,2,3);
let array2 = Array.from('word');
let array3 = Array.from(array1, (value) => value *2);
for (let val of array1) console.log(`Array val: ${val}`);

//Sets
var randSet = new Set();
randSet.add(10);
randSet.add('Bob');
console.log(`Has 10: ${randSet.has(10)}`);
console.log(`Set size: ${randSet.size}`);
randSet.delete(10);
for (let val of randSet) console.log(`Set val: ${val}`);

//Maps -  collection of key value pairs
var randMap = new Map();
randMap.set('key1', 'Random String');
randMap.set('key2', 10);
console.log(`key1 : ${randMap.get('key1')}`);
console.log(`Map Size : ${randMap.size()}`);

//forEach
randMap.forEach((value, key) => console.log(`${key} : ${value}`));

//promises - are resolved or rejected
let p1 = new Promise(function(resolve, reject){
    setTimeout(() => resolve('Poop Resolved!'), 5000);
});
p1.then((res) => console.log(`${res}`));

// fulfilled or rejected
let randVal = 18;
var p2 = new Promise(function(resolve, reject){
  if (randVal == 6){
    resolve("Good Value");
  } else {
    reject("Bad Value");
  }
});
 
p2.then((val) => console.log(`${val}`),
        (err) => console.log(`${err}`));
 
// You should add catch to a chain to handle errors
var p4 = new Promise((resolve, reject) => {
  if (randVal <= 17){
    throw new Error("Can't Vote"); // Same as a Reject
  } else {
    resolve("Can Vote");
  }
});
 
p4.then((val) => console.log(`${val}`))
  .catch((err) => console.log(`${err.message}`));