var animals = [
    { name: ‘Waffles’, type: ‘dog’, age: 12 },
    { name: ‘Fluffy’, type: ‘cat’, age: 14 },
    { name: ‘Spelunky’, type: ‘dog’, age: 4 },
    { name: ‘Hank’, type: ‘dog’, age: 11 },
  ];

//old school
var dogs = [];
for(var i = 0; i < animals.length; i++) {
    if(animals[i].age > 10 && animals[i].type == "dog") {
        dogs.push(animals[i]);
    }
}

//higher-order funciton: filter

