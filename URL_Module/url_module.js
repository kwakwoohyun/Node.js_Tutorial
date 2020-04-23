/*
    URL Module
    URL 모듈은 웹 주소를 읽을 수 있는 부분으로 나눈다.
    require()을 사용하여 URL 모듈을 import 한다.
*/
var url = require('url');
var adr = 'http://localhost:3000/default.html?year=2020&month=april';
var q = url.parse(adr, true);

console.log(q);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(qdata.year);
console.log(qdata.month);
