var fs = require("fs");
var content = "Bengaluru is the new developed IT City In India";
fs.writeFileSync("xyz1.txt",content,"utf8");
console.log("File Writing Completed.");