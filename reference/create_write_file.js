var fs = require("fs");
var path = require("path");

//create folder
// fs.mkdir(path.join(__dirname, 'test'), {}, err => {
//     if(err)
//         throw err;
//     else
//         console.log("folder created...");
// })

//create and write to file
// fs.writeFile(
//     path.join(__dirname, '/test','hello.txt'), "Hello World", err => {
//         if(err)
//             throw err;
//         else
//             console.log("hello file written...");
         
//         //file append
//         fs.appendFile(
//             path.join(__dirname, '/test', "hello.txt"), ' I love node.js', err => {
//                 if(err)
//                     throw err;
//                 console.log("file written to...")
//             }
//         )
//     }
// )

//Read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (error,data) => {
    if(error)
        throw error;
    else
        console.log(data);
})