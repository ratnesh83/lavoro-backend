var express = require('express');

var flightApiRoutes = require("./auth/api-routes")
module.exports = {
    mountApiRoutes: mountApiRoutes,
}


function mountApiRoutes(expressApp) {
    var api = express.Router();
    
    // Binding to api router
    api.use("/auth", flightApiRoutes);


    // Attaching api to main express app
    expressApp.use("/api", api);

}