
const http = require('http');
const fs = require('fs');
const path = require('path');


const host = 'localhost';
const port = 8000;

http.createServer(function (req, res) {
    
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url)
    // console.log(filePath);

    let extname = String(path.extname(filePath)).toLowerCase();
    // console.log(extname)
    let mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
    };

    let contentType = mimeTypes[extname];

    fs.readFile(filePath,(error, content)=> {    
        if (error) {
            if (error.code == 'ENOENT') {
                fs.readFile('error.html', (error, data) =>{
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(data);
                });
            }
            else {
                res.writeHead(500);
                res.end('Error');
            }
        }else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });

}).listen(port, host, () => {console.log(`Server is running on http://${host}:${port}`);
})

