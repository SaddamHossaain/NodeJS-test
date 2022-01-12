var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res) {
    if(req.url=="/") {
        //Async fs system for file read
        fs.readFile('home.html', function(error, data) {
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }else if(req.url=="/syn") {
        //Sync fs system for file read
        let mydata = fs.readFileSync('home.html')
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(mydata)
        res.end()
    }else if(req.url=="/fras") {
        //ASync fs system for file Write
        fs.writeFile('file.txt', 'file write Asyc', function(error) {
            if(error) {
                res.writeHead(200, {'Content-Type':'text/html'})
                res.write("File Write Faild!!!")
                res.end()
            }else{
                res.writeHead(200, {'Content-Type':'text/html'})
                res.write("File Write Successfully Done")
                res.end()
            }
        })
    }else if(req.url=="/frsy") {
        //Sync fs system for file Write
        let frsyn = fs.writeFileSync('file.txt', 'file write syc')
            if(frsyn) {
                res.writeHead(200, {'Content-Type':'text/html'})
                res.write("File Write Faild!!!")
                res.end()
            }else{
                res.writeHead(200, {'Content-Type':'text/html'})
                res.write("File Write Successfully Done")
                res.end()
            }
    }
})

server.listen(2020, function() {
    console.log('Server Run With Port localhost:2020')
})