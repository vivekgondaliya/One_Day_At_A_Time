//Styled
console.log('%c This is styled text', 'font-size:50px; background-color:red;');

//Testing - Only triggers when FALSE
console.assert(1 === 2, 'This is Wrong');

const p = document.querySelector('p');
console.assert(p.classList.contains('className'), 'That is wrong!');

//Viewing DOM Elements - gives you all the associated methods
console.log(p);
console.dir(p);

//Grouping Together
var dogs = [
  {name: 'Champion', age: 2},
  {name: 'Jack', age: 3}
];

dogs.forEach( dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`this is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
})

//timing
console.time('fetching data');
fetch('https://swapi.co/api/people')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });
