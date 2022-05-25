const findWaldo = function (names, found) {
//found is receiving the actionWhenFound as function callback
  names.forEach((element) => {
    if (element === 'Waldo') {
      found(names.indexOf(element));
      //found equals actionWhenFound function due to the second argument passed on line 15
    }
  });
};

const actionWhenFound = function (index) {
  console.log(`Found Waldo at index ${index}!`);
};
const aDifferentFunction = function () {};

findWaldo(['Alice', 'Bob', 'Waldo', 'Winston'], actionWhenFound);
// if we called findWaldo like so: findWaldo(["Jack","Waldo"],aDifferentFunction).
// the found parameter in findWaldo on line 1 would then equal aDifferentFunction and would run that function's code.
