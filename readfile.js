var fs = require('fs');
fs.readFile("module1.js","utf8",receiveFileContent);

function receiveFileContent(error,data){
    if(error)
        console.log(error);
    else {
        console.log("We will be reading Asynchronously");
        console.log(data);
    }
}