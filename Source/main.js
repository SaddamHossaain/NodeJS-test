var http = require('http');
var URL = require('url');
var fs = require('fs');
//Server Create
var server = http.createServer(function(req, res) {
    if(req.url=="/home") {
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write("<h1>Home Page Url</h1>")
    }else if(req.url=="/About") {
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write("<h1>About Page Url</h1>")
    }else if(req.url=="/Contact") {
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write("<h1>Contact Page Url</h1>")
    }else if(req.url=="/fs") {
        //Async
        fs.readFile('home.html', function(error,data) {
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write(data)
           // res.end()
        });
    }
    res.end('before url section code');

    //URL Module
    var myUrl = "http://makesite.club/blog.html?year=2022&month=January";
    var myUrlObj = URL.parse(myUrl, true);

    var myHostname = myUrlObj.host;
    var myPathname = myUrlObj.pathname;
    var mySearchname = myUrlObj.search;

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("base url: "+myHostname+"<br>");
    res.write("base path: "+myPathname+"<br>");
    res.write("base Search: "+mySearchname+"<br>");
    res.end();
})
//Server Start to Specific Port
server.listen(3000);
console.log("Server Run to 3000 Port<br>localhost:3000");

