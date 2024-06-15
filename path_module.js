//using the just below line to using the path module in teh node js
const path = require('path');
//below line provides the path seperator in the node js
console.log(path.sep);

//for joing the path in the node js
const filepath = path.join('/content', 'sub_content', 'test.txt');
console.log(filepath);

//for getting the base path
const basepath = path.basename(filepath);
console.log(basepath);

//for getting the absolute path
const absolute = path.resolve(__dirname, filepath);
console.log(absolute);