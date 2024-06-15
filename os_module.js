// buit_in modules in node js

// os module

const os = require('os');
const usinfo = os.userInfo();
console.log(usinfo);

const uptime = os.uptime();
console.log(`The up time of the compiuter is ${uptime} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
};

console.log(currentOS);

 