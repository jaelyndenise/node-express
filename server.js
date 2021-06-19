const express = require('express'); //import express: since express is in node_modules, it doesn't need a file path, it does it automatically
const morgan = require('morgan'); //import morgan: tracks logs of the server activity
const campsiteRouter = require('./routes/campsiteRouter');
const promotionRouter= require('./routes/promotionRouter');
const partnerRouter = require('./routes/partnerRouter');
const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));

//when server receives JSON requests, will use this middleware to handle it
//Q: what does the express.json() middleware do again?
app.use(express.json());

//import the routes for the request types
app.use('/campsites', campsiteRouter); 
app.use('/promotions', promotionRouter);
app.use('/partners', partnerRouter);

// __dirname refers to the operative path of the current directory of the file that it's in
app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an express server.</h1></body></html>');
});

//listen for changes (requests) to call the correct handler
app.listen(port, hostname, () => {
    //this runs when the server first opens. once it is listening, the responses come from the handlers/routers
    console.log(`Server running at http://${hostname}:${port}/`);
})