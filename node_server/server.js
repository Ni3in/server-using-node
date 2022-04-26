var http = require("http");

http.createServer(function(req,res){
    res.end('hello dear you made a server');
}).listen(4000);

console.log("visite http://localhost:4000");
