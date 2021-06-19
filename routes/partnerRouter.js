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
    res.end(`Will add ${req.params.partnerId} to your calendar.`);
})
.post((req, res) => {
    res.end(`Will add the partner to your little black book.`)
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT yourself out there.')
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
    res.end('Will bring you all the partners.');
})
.post((req, res) => {
    res.end(`Will add the partners that you like.`)
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT down the machete!')
})
//this method should not be handled by users
.delete((req, res) => {
    res.end('Deleting all partners. Humans deserve sadness.');
});


module.exports = partnerRouter;