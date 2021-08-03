var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log("Request Received");
    fs.readFile("india.txt","utf8",(error,data)=>{
        if(error){
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
server.listen(8080, ()=>{
    console.log('Listener started at port 8080');
})