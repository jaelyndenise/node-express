const express = require('express');
const campsiteRouter = express.Router();


campsiteRouter.route('/');


//catches all HTTP verbs, use to set defaults for each of them, path is now already set
//Linked routes together
app.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    //pass control of app routing to the next relevant routing method, otherwise it just stops
    next();
})
.get((req, res) => {
    res.end('Will send all the campsites to you.');
})
.post((req, res) => {
    res.end(`Will add the campsites: ${req.body.name} with description: ${req.body.description}.`)
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites')
})
//this method should not be handled by users
.delete((req, res) => {
    res.end('Deleting all campsites.');
});

module.exports = campsiteRouter;