var express = require('express');
var router = express.Router();
var user = require('../models/Usersmodel');



router.get('/', function (req, res, next) {
    user.find(function (err, data) {

        if (err) throw err;
        //res.json(data);
        res.render("showUsers.twig", { data });
        console.log(data);
    });

});
router.get('/addform', function (req, res) {
    res.render("addUsers.twig");

});
router.post('/addaction', function (req, res) {
    var c = new user(req.body);
    c.save();
    res.redirect('/user/');
});
router.get('/updateform/:id', function (req, res) {
    var idm = req.params.id;
    user.find({ _id: idm }, function (err, data) {
        // res.json(data);
        res.render('updateUsers.twig', { data });
        console.log({ data });
    });


});
router.post('/updateaction', function (req, res) {

    var idm = req.body.ids;
    user.findById({ _id: idm }, function (err, data) {

        data.password = req.body.password;
        data.email = req.body.email;
        data.fullname = req.body.fullname;
        data.username = req.body.username;

        data.save();
    });
    res.redirect('/user/')
});



module.exports = router;