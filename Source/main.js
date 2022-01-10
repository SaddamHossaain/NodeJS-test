var http = require('http');
//Server Create
var server = http.createServer(function(req, res) {
    if(req.url=="/") {
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write("<h1>Home Page Url</h1>")
    }else if(req.url=="/About") {
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write("<h1>About Page Url</h1>")
    }else if(req.url=="/Contact") {
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write("<h1>Contact Page Url</h1>")
    }
    res.end('Hello World');
})
//Server Start to Specific Port
server.listen(5050);
console.log("Server Run to 5050 Port<br>localhost:5050");

