/*
    Node.js로 MySQL 데이터베이스에 엑세스 하려면 드라이버가 필요하다. 
    $ npm install mysql 
    var mysql = require('mysql'); 사용 가능 
*/
var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root'
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected Success!");
    sql = "SELECT * FROM mysql.db";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result : " + result);
    });
});