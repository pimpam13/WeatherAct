const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    res.redirect("/");
});

app.post("/signUp", function(req, res){
    res.sendFile(__dirname+"/signup.html");
})

app.listen(3000, function(){
    console.log("The server is listening on port 3000.");
})