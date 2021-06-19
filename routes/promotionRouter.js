const express = require('express');
const promotionRouter = express.Router();

//CAMPSITE ID
promotionRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    //pass control of app routing to the next relevant routing method, otherwise it just stops
    next();
})
.get((req, res) => {
    //if you use a colon, use ".params"
    res.end(`Will send the promotions ${req.promotions} to your pretty little face.`);
})
.post((req, res) => {
    res.end(`Will add the promotions: ${req.promotions} with description: ${req.promotions}.`)
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions butt.')
})
//this method should not be handled by users
.delete((req, res) => {
    res.end('Deleting all promotions. No bueno!');
});

promotionRouter.route('/:promotionId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    //pass control of app routing to the next relevant routing method, otherwise it just stops
    next();
})
.get((req, res) => {
    //if you use a colon, use ".params"
    res.end(`Will send ${req.params.promotionId} to your uncle Karl.`);
})
.post((req, res) => {
    res.end(`Will add the promotion: ${req.params.promotionId} with description: ${req.params.promotionId.description}.`)
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /:promotionId')
})
//this method should not be handled by users
.delete((req, res) => {
    res.end('Deleting the promotions cuz you suck!');
});

module.exports = promotionRouter