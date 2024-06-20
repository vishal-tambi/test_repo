// const {readFile, writeFile} = require('fs');


// also the different thing that i can do to make it more stisfing and short is:-
const {readFile, writeFile} = require('fs').promises





//THIS IS THE PART THAT I CAN EASILY REMVOE TO MAKE IUT MORE SHORT AND SIMPLE


// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

//IT IS THE END (AND BY DOING THIS YOU HAVE TO DO ONE MORE THING AND YOU AHVE TO RENAME THE readFilePromise TO readFile FOR BOTH OF THE READING OPERATIONS DOWN BELOW)



// async patterns : Refactor to Async

const start = async()=>{
    try{
    const first = await readFile('./content/first.txt', 'utf8')
    const second = await readFile('./content/second.txt', 'utf8')

    //now i am making the write file
    await writeFile(
        './content/result_write_file.txt',  
        `THIS IS REALLY AWASOME VISHAL TAMBI YOU DID IT !!: ${first} ${second}`,
        {flag:'a'}
    )
    console.log(first, second);
    }


    catch (error){
        console.log(error);
    }
}

start();

// getText('./content/first.txt')
//     .then((result)=>console.log(result))
//     .catch((err)=>console.log(err))



//eski place pe esko simple banane k liye util ks use karenge 
// const getText = (path)=>{
//     return new Promise((resolve, reject)=>{
//         readFile(path, 'utf8',(err, data)=>{
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(data);
//             }
//         })
//     })
// }
