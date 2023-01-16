const http = require('http');
const { readFileSync } = require('fs');
//get all files
const homePage = readFileSync('./index.html');
const homeStyles = readFileSync('./index.css');
const homeImage = readFileSync('./assets/logo.svg');
const homeLogic = readFileSync('./first.js');
const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);
    const url = req.url;
    if (url === '/') {
        res.writeHead(200,
            { 'content-type': 'text/html' },
        )
        res.write(homePage);
        res.end()
    }
    else if (url === '/index.css') {
        res.writeHead(200,
            { 'content-type': 'text/css' },
        )
        res.write(homeStyles);
        res.end()

    }
    else if (url === '/assets/logo.svg') {
        res.writeHead(200,
            { 'content-type': 'image/svg+xml' },
        )
        res.write(homeImage);
        res.end()

    }
    else if (url === '/first.js') {
        res.writeHead(200,
            { 'content-type': 'text/javascript' },
        )
        res.write(homeLogic);
        res.end()

    }
    else {
        res.writeHead(
            404,
            { 'content-type': 'text/html' }
        )
        res.write(
            '<h1>Page not found</h1>'
        )
        res.end()

    }

})
server.listen(5000, () => {
    console.log("Server Listening on port 5000....");
})