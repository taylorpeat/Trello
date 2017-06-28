var static = require('node-static');
var http = require('http');
var fs = require('fs');
var path = require('path');
    
var fileServer = new static.Server('.', {indexFile: 'index.html'});

http.createServer(function (request, response) {
    request.addListener('end', function () {
      //mimic htaccess ability to redirect requests to root index.html file
      if (!fs.existsSync('.' + request.url)) request.url = '/';

      fileServer.serve(request, response, function (err, result) {
          if (err) {
              console.error("Error serving " + request.url + " - " + err.message);

              response.writeHead(err.status, err.headers);
              response.end();
          }
      });
    }).resume();
}).listen(3000);