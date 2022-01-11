var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res) {
    if(req.url=="/") {
        //Async fs system
        fs.readFile('home.html', function(error, data) {
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }else if(req.url=="/as") {
        //Sync fs system
        let mydata = fs.readFileSync('home.html')
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(mydata)
        res.end()
    }
})

server.listen(2020, function() {
    console.log('Server Run With Port localhost:2020')
})