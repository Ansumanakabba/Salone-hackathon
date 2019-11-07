const fs = require('fs');

function getLine(name, line, callback) {
   const data = fs.readFileSync(name, 'utf8');
   const lines = data.split("\n");

    if(+line > lines.length){
        throw new Error('File end reached without finding line');
    }

    callback(null, lines[+line]);
}

getLine('./helloworld.txt', 9, function(err, line){
    console.log('The line: ' + line);
});
