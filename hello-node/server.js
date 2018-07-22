var http = require('http');
var port = 3000;
var requestHandler = function(request, response){
    console.log('New request to: ' + request.url);
    response.end('Hello,welcome to our World!');
}
var server = http.createServer(requestHandler);
server.listen(port,function(){
    console.log('listening on port' + port);
})
var express = require('express')
var app =  express ();
var port = 3000;
app.listen(port, function(){
    console.log('Express app listening on port' + port)
})