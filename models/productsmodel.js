var mongoose = require('mongoose');
var schema = mongoose.Schema;
var prod = require('../models/productsmodel');


Productsschema = new schema({
    ref: String,
    libel: String,
    prix: Number,
    type: String,



})

module.exports = mongoose.model('products', Productsschema);
