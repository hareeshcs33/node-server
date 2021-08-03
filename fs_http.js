var http = require('http');
var fs = require('fs');

var server = http.createServer((req,res) => {
    console.log("request received");
    fs.readFile("india.txt","utf8",(error,data)=>{
        if(error) {
            res.writeHead(500);
            res.write("Unable to read File");
            res.end();
        }
        else {
            res.write(data);
            res.end();
        }
    })
})
server.listen(7000, ()=> {
    console.log("Listening started at port 7070");
})