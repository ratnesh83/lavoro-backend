var express = require("express");
var fs = require("fs");
var path = require("path");
var bodyParser = require("body-parser");
// create an express app
var app = express();


var dbConnect = require("./dao").connect;

dbConnect();

var mountApiRoutes = require("./modules").mountApiRoutes;

app.use(bodyParser.json());

mountApiRoutes(app);

// added route

// default handler or not found handler
app.get("*", function(request, response) {
  console.log(request.url);
  response.status(404).send("Page not found");
});

app.listen(3000, function() {
  console.log("App running at 3000");
});
