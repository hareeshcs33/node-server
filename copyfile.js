var fs = require("fs");
fs.readFile("xyz.txt","utf8",receiveFileContent);

function receiveFileContent(error,data){
    if(error)
        console.log(error);
    else {
        fs.writeFile("NewCopiedXyz.txt",data,"utf8",fileWriteComplete);
        function fileWriteComplete(error){
            if(error)
                console.log(error);
            else
                console.log("File Writing Completed");
        }
    }
}