const express = require('express');
const partnerRouter = express.Router();

//CAMPSITE ID
partnerRouter.route('/:partnerId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    //pass control of app routing to the next relevant routing method, otherwise it just stops
    next();
})
.get((req, res) => {
    //if you use a colon, use ".params"
    res.end(`Will send ${req.params.partnerId} to your calculator.`);
})
.post((req, res) => {
    res.end(`Will add the partner: ${req.params.partnerId} with description: ${req.params.partnerId}.`)
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /:partnerId')
})
//this method should not be handled by users
.delete((req, res) => {
    res.end('Deleting your partner cuz you deserve to be alone.');
});

partnerRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    //pass control of app routing to the next relevant routing method, otherwise it just stops
    next();
})
.get((req, res) => {
    res.end('Will send all the partners to you.');
})
.post((req, res) => {
    res.end(`Will add the partner: ${req.body.name} with description: ${req.body.description}.`)
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partners')
})
//this method should not be handled by users
.delete((req, res) => {
    res.end('Deleting all partners. Humans deserve sadness.');
});


module.exports = partnerRouter;