/*
    Node.js에는 HTTP라는 내장 모듈이있어 Node.js가 HTTP를 통해 데이터를 전송할 수 있다.
    HTTP 모듈을 import 하려면 require() 방법을 사용한다. 
    
    HTTP 모듈은 서버 포트를 청취하고 클라이언트에 응답을 제공하는 HTTP 서버를 작성할 수 있다.
    createServer() 방법을 사용하여 HTTP 서버를 작성한다. 

    http.createServer() 메소드에 전달 된 함수는 누군가가 포트 3000에서 컴퓨터에 엑세스 하려고 할 때 실행된다. 
    
    HTTP 헤더 추가 
    HTTP 서버의 응답이 HTML로 표시되는 경우 올바른 컨텐츠 유형의 HTTP 헤더를 포함해야 한다. 
    res.writeHead() 메소드의 첫 번째 인수는 상태 코드이며, 200은 모두 정상이며 두 번째 인수는, 응답 헤더를 포함하는 오브젝트이다. 

    쿼리 문자열 읽기 
    http.createServer()에 전달된 함수는 클라이언트의 요청을 나타내는 req 인수를 객체로 가지고 있다. 
    이 개체에는 "url"이라는 속성이 있으며 이 속성은 도메인 이름 뒤에 오는 URL의 일부를 보유한다.
*/
var http = require('http');
var dt = require('./datemodule');

// create a server object 
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' }); 
    res.write("The date and time are currently : " + dt.myDateTime()); // write a response to the client 
    res.write(req.url); // req.url 도메인 뒤에 오는 url의 일부를 보유한다. (port번호 뒤로 모든 path)

    res.end(text); // end the response 
}).listen(3000); // te server object listens on port 3000