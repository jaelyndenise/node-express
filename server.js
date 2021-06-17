const express = require('express'); //since express is in node_modules, it doesn't need a file path, it does it automatically

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an express server.</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})