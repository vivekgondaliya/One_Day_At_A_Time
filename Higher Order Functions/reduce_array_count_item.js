var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) { 
    if (name in allNames) {
        console.info(allNames[name])
      allNames[name]++;
    }
    else {
      allNames[name] = 1;
    }
    return allNames;
  }, {});

  console.log("countedNames", countedNames);
  // countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }