var path = require("path");

module.exports = function(app){
    app.get("/tables", function(req, res){
        res.sendFile(path.join(__dirname, "../HTML/tables.html"));
    });

    app.get("/reserve", function(req, res){
        res.sendFile(path.join(__dirname, "../HTML/reserve.html"));
    });

    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../HTML/index.html"));
    });

};