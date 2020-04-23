/*
    파일 업로드 작업에는 "Formidable"(포맷 기능)이라고 불리는 매우 좋은 모듈이 있다.
    NPM을 사용하여 이 기능을 사용할 수 있다. 
    $ npm install formidable
*/
var formidable = require('formidable');
var http = require('http');
var fs = require('fs');


// 1. Create an Upload Form
http.createServer(function (req, res) {

    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            console.log(files.fileupload.path);
            var oldpath = files.fileupload.path;
            var newpath = '/Users/kwak/Documents/node/NodePractice/FileSystem' + files.fileupload.name;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="fileupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(3000);

