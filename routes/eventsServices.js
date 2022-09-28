var express = require('express');
var router = express.Router();
var event = require('../models/eventsmodel');
router.get('/', function(req, res, next) {
    event.find(function(err, data){

        if(err) throw err;
       //res.json(data);
       res.render("showEvents.twig", {data});
    });
    
});

module.exports = router;
