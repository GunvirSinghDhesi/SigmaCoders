const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true, useUnifiedTopology: true}));
app.use(express.static("public"));


app.get("/", function(req, res){
    res.render(__dirname+"/views/index.ejs", {pageName: "Home - Sigma Coders", date: new Date().getFullYear()});
});
app.get("/pricing", function(req, res){
    res.render(__dirname+"/views/pricing.ejs", {pageName: "Pricing - Sigma Coders", date: new Date().getFullYear()});
});
app.get("/contact", function(req, res){
    res.render(__dirname+"/views/contact.ejs", {pageName: "Contact - Sigma Coders", date: new Date().getFullYear()});
});
app.get("/reviews", function(req, res){
    res.render(__dirname+"/views/reviews.ejs", {pageName: "Reviews - Sigma Coders", date: new Date().getFullYear()});
});
app.get("/hdwes", function(req, res){
    res.render(__dirname+"/views/howdoweensuresuccess.ejs", {pageName: "Ensure Success - Sigma Coders", date: new Date().getFullYear()});
});
app.get("/languages", function(req, res){
    res.render(__dirname+"/views/languages.ejs", {pageName: "Languages - Sigma Coders", date: new Date().getFullYear()});
});
app.listen(process.env.PORT || 3000, function(){
    console.log("port is opened on port 3000");
});
