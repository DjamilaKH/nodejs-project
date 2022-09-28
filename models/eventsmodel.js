var mongoose = require('mongoose');
var schema = mongoose.Schema;


Eventsschema = new schema({
    title: String,
    nbrPlace: String,
    typeEvents: String,


})

module.exports = mongoose.model('events', Usersschema);
