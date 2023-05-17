// We are creating our own server using nodeJs

const http = require("http");

const server = http.createServer(function(req, res){
    // console.log("The request has been made from browser to server");
    // http header
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Heelooo World</h1>');
    res.write('<p>How are you doing?</p>');
    res.end();

});

server.listen(1337, 'localhost', () =>{
    console.log("My server has started listening!");
});



