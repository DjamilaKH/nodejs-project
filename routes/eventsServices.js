var express = require('express');
var router = express.Router();
var event = require('../models/eventsmodel');


router.get('/', function (req, res, next) {
    event.find(function (err, data) {

        if (err) throw err;
        //res.json(data);
        res.render("showEvents.twig", { data });
    });

});
router.get('/delete/:id', function (req, res) {
    var idm = req.params.id;
    event.findOneAndRemove({ _id: idm }, function (err) {
        if (err) throw err;

    });
    res.redirect('/event/')
});
router.get('/addform', function (req, res) {
    res.render("addEvents.twig");

});
router.post('/addaction', function (req, res) {
    var c = new event(req.body);
    c.save();
    res.redirect('/event/');
});
router.get('/updateform/:id', function (req, res) {
    var idm = req.params.id;
    event.find({ _id: idm }, function (err, data) {
        // res.json(data);
        res.render('updateEvents.twig', { data });
        console.log({ data });
    });


});
router.post('/updateaction', function (req, res) {

    var idm = req.body.ids;
    event.findById({ _id: idm }, function (err, data) {

        data.title = req.body.title;
        data.nbrPlace = req.body.nbrPlace;
        data.typeEvents = req.body.typeEvents;

        data.save();
    });
    res.redirect('/event/')
});

module.exports = router;
