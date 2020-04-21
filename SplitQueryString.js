/*
    쿼리 문자열 나누기
    쿼리 문자열을 URL 모듈과 같이 읽기 쉬운 부분으로 쉽게 분할할 수 있는 모듈이 내장되어 있다.
    http://localhost:3000/?year=2017&month=July
*/

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var q = url.parse(req.url, true).query;
    // http://localhost:3000/?year=2017&month=July
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(3000);