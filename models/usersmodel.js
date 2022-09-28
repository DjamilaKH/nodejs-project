var mongoose = require('mongoose');
var schema = mongoose.Schema;


Usersschema = new schema({
    login: String,
    password: String,
    email: String,
    fullname: String,



})

module.exports = mongoose.model('users', Usersschema);
