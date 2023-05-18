// We are creating our own server using nodeJs

const http = require("http");

const fs = require("fs");

const server = http.createServer(function(req, res){
    // console.log("The request has been made from browser to server");
    // http header
    // console.log(req);
    res.writeHead(200, {'Content-Type': 'text/html'});
    let path = './views';

    switch(req.url){
        case '/':
            path+='/index.html';
            break;
        case '/hobbies':
            path+='/hobbies.html';
            break;
        case '/about':
            path+='/about.html';
            break;
        default:
            path+='/404.html';
    };

    fs.readFile(path, (err, fileData) => {
        if(err){
            console.error(err);
        }
        else{
            res.write(fileData);
            res.end();
        }
    })
});

server.listen(1337, 'localhost', () =>{
    console.log("My server has started listening!");
});



