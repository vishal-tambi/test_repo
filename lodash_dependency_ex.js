const _ = require('lodash');

const array = [1,[2,[3,[4]]]]; //converting a multidimentional array in to a single simentional array (this methode is know as flat and deep method in the lodash)
const newarray = _.flattenDeep(array);
console.log(newarray);

console.log("Hello this is vishal tambi ");
