var fs = require("fs");
fs.rename("xyz2.txt","xyz3.txt",renameComplete);

function renameComplete(error){
    if(error)
        console.log(error);
    else
        console.log("File xyz rename completed like renamexyz");
}