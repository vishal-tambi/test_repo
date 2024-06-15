const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/home'){
       res.end('Hello vishal welcome to our homepage');
    }
    if(req.url === '/about'){
        res.end('Again you are on the about page of our site');
    }
    if(req.url === '/contact'){
        res.end('okey i am giving you my contact now: write-9782066607');
    }
    res.end(`
        <h4>O my god Vishal right now we are not have you are looking for</h4>
        <a href="/home">go back home</a>
    `)
 });

server.listen(5000);