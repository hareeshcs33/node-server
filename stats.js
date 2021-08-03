var fs = require("fs");
fs.stat("xyz.txt",statReadingCompleted);

function statReadingCompleted(error, data){
    if(error)
        console.log(error);
    else
        console.log(data);
}