const express = require('express');
const campsiteRouter = express.Router();

//CAMPSITE ID
campsiteRouter.route('/:campsiteId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    //pass control of app routing to the next relevant routing method, otherwise it just stops
    next();
})
.get((req, res) => {
    //if you use a colon, use ".params"
    res.end(`Will send campsite ${req.params.campsiteId} to your sandwich.`);
})
.post((req, res) => {
    res.end(`Will add the campsites: ${req.body.name} with these ingredients: ${req.body.description}.`)
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites - unless it contains mayonaise')
})
//this method should not be handled by users
.delete((req, res) => {
    res.end('Deleting all campsites. Mayonaise is not an instrument.');
});

//CAMPSITES
//catches all HTTP verbs, use to set defaults for each of them, path is now already set
//Linked routes together
campsiteRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    //pass control of app routing to the next relevant routing method, otherwise it just stops
    next();
})
.get((req, res) => {
    res.end('Will send all the campsites to you.');
})
.post((req, res) => {
    res.end(`Will add [${req.body.name}] with butter if you [${req.body.description}].`)
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites because that last comment was gross.')
})
//this method should not be handled by users
.delete((req, res) => {
    res.end('Deleting all campsites. I am better than this.');
});

module.exports = campsiteRouter;