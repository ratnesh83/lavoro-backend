var express = require("express"),
ctrl = require("./api-controller");


var router = express.Router();

module.exports = router;


// Get
router.post("/register", (req, res) => ctrl.register(req,res));

