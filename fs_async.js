const {readFile, writeFile} = require('fs');

readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log("This is the error coming", err);
        return ;
    }
    const first = result;


readFile('./content/second.txt', 'utf8', (err, result)=>{
    if(err){
        console.log("This is the error", err);
        return;
    }
    const second = result;


writeFile('./content/result_async.txt', 
    `Here is the result ${first}, ${second}`,
    (err, result)=>{
        if(err){
            console.log(err);
            result;
        }
        console.log(result);
    }
)
})
});


