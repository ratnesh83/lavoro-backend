var mongoose = require("mongoose");
module.exports = {
    connect: connect
};


function connect() {
  
    
    mongoose.connect(
        "mongodb://ratnesh:abc123@ds231070.mlab.com:31070/lavoro"
    );
    
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log("Connected");
    });
}