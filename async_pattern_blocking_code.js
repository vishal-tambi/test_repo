const http = require('http');

const server = http.createServer((req, res)=>{


    
    if(req.url === '/' ){
        res.end("Hii you are on the home page");
    }


    if(req.url === '/about' ){
        // trying to add the bloacking code here:-
        for(let i=0;i<1000;i++){
            for(let j=0;j<1000;j++){
                console.log(`the value of the i and j is ${i}, ${j}`);
            }
        }
        res.end("Hii you are on the about page");
    }


    if(req.url === '/contact' ){
        res.end("Hii you are on the contact page and you can contact me on Email:- tambivishal3@gmail.com");
    }


    res.end("error page");

})

server.listen(5000,()=>{
    console.log("server is listing on the port 5000...");
})