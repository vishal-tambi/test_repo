const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8'); //utf8 yaha per decoding k liye use kiya jata hai taki node ko pta chale that how to decode fiile.
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);



writeFileSync('./content/result_write_file.txt',
    `Hello now you are reading the result of the write file sync file module ${first} , ${second}`,
    {flag: 'a'}); //ye alst wali third property kai jo append karne k liye lagaye hai;




const result = readFileSync('./content/result_write_file.txt', 'utf8');
console.log(result);
