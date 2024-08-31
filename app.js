const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true, useUnifiedTopology: true}));
app.use(express.static("public"));

require('dotenv').config();
const myEnvVar = process.env.MY_ENV_VARIABLE;

const path = require('path');
app.set('views', path.join(__dirname, '/views'));
app.set('public', path.join(__dirname, '/public'));
app.set('view engine', 'ejs');



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

// Export the app so Vercel can handle it
module.exports = app;

// If running locally, start the server
if (require.main === module) {
    app.listen(process.env.PORT || 3001, function(){
        console.log("Server is running on port 3001");
    });
}
