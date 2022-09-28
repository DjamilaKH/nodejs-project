var mongoose = require('mongoose');
var schema = mongoose.Schema;


Eventsschema = new schema({
    title: String,
    nbrPlace: Number,
    typeEvents: String,


})

module.exports = mongoose.model('events', Eventsschema);
