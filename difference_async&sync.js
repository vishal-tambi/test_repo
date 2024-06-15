// differecne between asyn and sync approach

const {readFileSync, writeFileSync} = require('fs');

console.log('start');

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync('./content/result_write_file.txt', 
    `This is the result : ${first}, ${second}`,
    {flag: 'a'}
);


console.log('Doen with this task');
console.log('starting the new task');


// vs async

const { readFile, writeFile } = require('fs');

console.log('start');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log("This is the error coming", err);
        return;
    }
    const first = result;


    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log("This is the error", err);
            return;
        }
        const second = result;


        writeFile('./content/result_async.txt',
            `Here is the result ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    result;
                }
                console.log('done with this task');
            }
        )
    })
});

console.log('starting the new task');



