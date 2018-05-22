var User = require("../../models/user").User;
const _ = require('lodash');


module.exports = {
    register: register,
}

function register(req, res) {
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);
    user.save().then((user) => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth',token).send(user);
    }).catch((err) => {
        res.status(400).send(err);
    });
}
