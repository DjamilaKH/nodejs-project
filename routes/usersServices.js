var express = require('express');
var router = express.Router();
var user = require('../models/usersmodel');



router.get('/', function (req, res, next) {
    user.find(function (err, data) {

        if (err) throw err;
        //res.json(data);
        res.render("showUsers.twig", { data });
        console.log(data);
    });

});

module.exports = router;