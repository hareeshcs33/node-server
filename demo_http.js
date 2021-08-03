var http = require('http');
//create a server object:
http.createServer(function(req,res) {
    console.log("Request Received");
    res.setHeader("Content-Type","text/html");
    res.writeHead(500);
    res.write('<h1>Hello Hareesh</h1>');
    res.write('<h3>Thank You</h3>');
    res.write('Req url is : '+req.url);
    res.write("<br> Request method is : "+req.method);
    res.write("<br> Request Headers: "+req.headers["accept-encoding"]);
    res.end();
}).listen(8000);