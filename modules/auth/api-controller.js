var User = require("../../models/user").User;
const _ = require('lodash');


module.exports = {
    register: register,
}

function register(req, res) {
    var body = _.pick(req.body,['email','password']);
    console.log(body);
    var user = new User(body);
    user.save().then(function (data) {
        console.log(data);
        res.json(data);
    }).catch((err)=>{
        res.status(400).send(err);
    });
}
