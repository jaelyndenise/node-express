const express = require('express'); //since express is in node_modules, it doesn't need a file path, it does it automatically
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));

//when server receives JSON requests, will use this middleware to handle it
app.use(express.json());

//catches all HTTP verbs, use to set defaults for each of them
app.all('/campsites', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    //pass control of app routing to the next relevant routing method, otherwise it just stops
    next();
});

app.get('/campsits', (req, res) => {
    res.end('Will send all the campsites to you.');
});

app.post('/campsites', (req, res) => {
    res.end(`Will add the campsites: ${req.body.name} with description: ${req.body.description}.`)
});

app.put('/campsites', (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites')
});

//this method should not be handled by users
app.delete('/campsites', (req, res) => {
    res.end('Deleting all campsites.');
});

app.get('/campsites/:campsiteId', (req, res) => {
    res.end(`Will send details of the campsite: ${req.params.campsiteId} to you.`);
});

app.post('/campsites/:campsiteId', (req, res) => {
    res.statusCoe = 403;
    res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
});

app.put('/campsites/:campsiteId', (req, res) => {
    res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
    res.end(`Will update the campsite: ${req.body.name} with description: ${req.body.decription}l`);
});

app.delete('/campsites/:campsiteId', (req, res) => {
    res.end(`Deleting campsite: ${req.params.campsiteId}`)
});


// __dirname refers to the operative path of the current directory of the file that it's in
app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an express server.</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})