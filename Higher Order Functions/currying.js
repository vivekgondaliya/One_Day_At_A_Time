let dragon = 
    name =>
        size =>
            element =>
                name + ' is a ' +
                size + ' dragon that breathes ' +
                element + '!'

let output = dragon('Joey')('tiny')('fire');

console.log(output);