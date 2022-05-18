var http = require('http');
var fs = require('fs');

var app = http.createServer(function(request,response) {
    var _url = request.url;
    const myURL = new URL('http://localhost:4000'+_url);
    var queryData = myURL.searchParams.get('id');
    var pathname = myURL.pathname;

    if(_url === '/') {
        _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
        return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + _url, "utf8"));

});
app.listen(4000);