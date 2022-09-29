var express = require('express');
var router = express.Router();
var loginUser = require('../models/Usersmodel');

// router.get('/', function (req, res, next) {
//     exports.login = async (req, res, next) => {
//         const { username, password } = req.body
//         // Check if username and password is provided
//         if (!username || !password) {
//             return res.status(400).json({
//                 message: "Username or Password not present",
//             })
//         }

//         res.render("homepage.twig", { data });

//     }
// });
router.post('/loginaction', function(req,res,next){
    loginUser.findOne({ username: req.body.username, password: req.body.password })
        .then((user) => {
            if (user) {
                res.render("homepage.twig");      
            } else {
                res.send("pas succés")
            }
        }) 
})
router.get('/', (req, res, next) => {
    res.render("loginShow.twig") 
})

module.exports = router;
