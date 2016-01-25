var express = require("express");
var path = require("path");
var app = express();

// Set this path as accessible to the node application
// Also includes the path to styles and scripts
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res){
    res.sendFile(path.join(__dirname, "public") + "index.html");
});

var server = app.listen(9000, function (){
    var host = server.address().address;
    var port = server.address().port;

    console.log("Started webapp at http://%s:%s", host, port);
});