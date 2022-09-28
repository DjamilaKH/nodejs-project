var express = require('express');
var router = express.Router();

var product = require('../models/productsmodel');

router.get('/', function(req, res){

product.find(function(err, data){

    if(err) throw err;
   //res.json(data);
   res.render("showproducts.twig", {data});
});
});
router.get('/delete/:id', function (req, res) {
    var idm = req.params.id;
    product.findOneAndRemove({ _id: idm }, function (err) {
        if (err) throw err;

    });
    res.redirect('/product/')
});
router.get('/addform', function (req, res) {
    res.render("addProducts.twig");

});
router.post('/addaction', function (req, res) {
    var c = new product(req.body);
    c.save();
    res.redirect('/product/');
});
router.get('/updateform/:id', function (req, res) {
    var idm = req.params.id;
    product.find({_id: idm}, function (err,data) {
        // res.json(data);
         res.render('updateProducts.twig', {data});
        console.log({data});
    });


});
router.post('/updateaction', function(req, res){
   
    var idm = req.body.ids;
    product.findById({_id : idm}, function(err, data){
 
     data.ref = req.body.ref;
     data.libel = req.body.libel;
     data.prix = req.body.prix;
     data.type = req.body.type;

     data.save();
    });
    res.redirect('/product/')
     });

module.exports = router;
