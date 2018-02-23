var animals = [
    { name: ‘Waffles’, type: ‘dog’, age: 12 },
    { name: ‘Fluffy’, type: ‘cat’, age: 14 },
    { name: ‘Spelunky’, type: ‘dog’, age: 4 },
    { name: ‘Hank’, type: ‘dog’, age: 11 },
  ];

//old school
var names = [];
for(var i = 0; i < animals.length; i++){
    names.push(animals[i].name);
}

//higher-order funciton: map
var oldDogNames = animals.map((x) => x.name);


console.log(names);
console.log(oldDogNames);