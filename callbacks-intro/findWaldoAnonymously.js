const findWaldo = function (names, found) {
  names.forEach((element) => {
    if (element === 'Waldo') {
      found(names.indexOf(element));
    }
  });
};

const actionWhenFound = function (index) {
  console.log(`Found Waldo at index ${index}!`);
};

findWaldo(['Alice', 'Bob', 'Waldo', 'Winston'], actionWhenFound);
