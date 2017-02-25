// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var exphbs = require("express-handlebars");

var animals = [
  {
    animalType: "dog",
    pet: true,
    fierceness: 4
  }, {
    animalType: "cat",
    pet: true,
    fierceness: 10
  }, {
    animalType: "giraffe",
    pet: false,
    fierceness: 4
  }, {
    animalType: "zebra",
    pet: false,
    fierceness: 8
  }, {
    animalType: "lion",
    pet: false,
    fierceness: 10
  }
];

// Routes
// =============================================================
module.exports = function(app) {
  app.engine("handlebars", exphbs({ defaultLayout: "main" }));
  app.set("view engine", "handlebars");

  // Each of the below routes just handles the HTML page that the user gets sent to.

  //start users at the login page
  app.get("/", function(req, res) {
    res.render('login');
  });

  //lawyers are sent to an index of filled out forms
  app.get("/index", function(req, res) {
    res.render('index');
  });

  //users are sent to thier survey
  app.get("/user", function(req, res) {
    res.render('user');
  });

  //search for documents to help users fill out the survey
  app.get("/document", function(req, res){
    res.render('document');
  });

};
