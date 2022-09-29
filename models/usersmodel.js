var mongoose = require('mongoose');
var schema = mongoose.Schema;


Usersschema = new schema({

    password: String,
    email: String,
    fullname: String,
    username: String,


})

module.exports = mongoose.model('Users', Usersschema);
