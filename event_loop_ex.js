// // first example


// const {readFile} = require("fs");
// const { result, cloneWith } = require("lodash");
// console.log("started the first task");

// // check the file path
// readFile('./content/first.txt','utf8', (err,res)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     else{
//         console.log(result);
//     }
//     console.log('completed the first task');
// })

// console.log("starting the next task");


// second example

// console.log('first');
// setTimeout(() => {
//     console.log('second');
// }, 0);

// console.log('third');

// third example of http server

const http = require('http');

const server = http.createServer((req,res)=>{
    console.log("requret event");
    // res.end('Hello vishal how are you doing');
    res.end("yes this is a nice day");
    if(req.url == '/about'){
        res.end("this is out about seciton")
    }
})

server.listen(5000,()=>{
    console.log("server is listing on the port : 5000..");
});


