var fs = require("fs");
fs.unlink("delete.txt",deleteFile);

function deleteFile(error){
    if(error)
        console.log(error);
    else
        console.log("File deleting completed");
}