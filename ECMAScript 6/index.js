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


