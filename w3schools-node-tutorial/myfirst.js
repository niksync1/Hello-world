var http = require('http');
var dt = require('./myfirst module');
var url = require('url');
var fs = require('fs');

http.createServer(function(req,res){
    fs.readFile('demofile1.html', function(err,data){
    //content for the status header
    res.writeHead(200,{'Content-Type':'text/html'});
    // content for inserting date and time from dt linked module
   res.write("The current date and time: "+ dt.myDateTime()+"\n" );
    // storing arguments in the url in a variable
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month; //http://localhost:8080/?year=2017&month=July
    res.end();
    })
}).listen(8080);
