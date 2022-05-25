const findWaldo = function (names, found) {
  names.forEach((element) => {
    if (element === 'Waldo') {
      found(names.indexOf(element));
    }
  });
};

findWaldo(['Alice', 'Bob', 'Waldo', 'Winston'], function (index) {
  console.log(`Waldo can be found at index: ${index}`);
});
 