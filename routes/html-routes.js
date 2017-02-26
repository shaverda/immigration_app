// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var exphbs = require("express-handlebars");

// Routes
// =============================================================
module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  //start users at the login page
  app.get("/", function(req, res) {
    res.render('login');
  });

  //lawyers are sent to an list of surveys filled out forms
  app.get("/surveyList", function(req, res) {
    res.render('surveyList');
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
