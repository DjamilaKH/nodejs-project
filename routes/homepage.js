var express = require('express');
var router = express.Router();
var homepage = require('../routes/homepage.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage.twig');
});

module.exports = router;


