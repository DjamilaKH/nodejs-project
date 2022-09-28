var mongoose = require('mongoose');
var schema = mongoose.Schema;


Usersschema = new schema({
    username: String,
    password: String,
    email: String,
    fullname: String,



})

module.exports = mongoose.model('Users', Usersschema);
