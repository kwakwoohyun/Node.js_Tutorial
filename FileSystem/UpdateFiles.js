var fs = require('fs');


// Append "This is my text." to the end of the file "mynewfile1.txt"

fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Update!');
});


// Replace the content of the file "mynewfile3.txt"

fs.writeFile('mynewfile3.txt','This is my text', function(err){
    if (err) throw err;
    console.log('Replaced');
})


