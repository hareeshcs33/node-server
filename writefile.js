var fs = require("fs");
var content = "Bengaluru is the new developed IT City in India";
fs.writeFile("xyz.txt",content,fileWriteComplete);
function fileWriteComplete(error){
    if(error)
        console.log(error);
    else
        console.log("File Writing Completed");
}