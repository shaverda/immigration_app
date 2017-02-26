// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var exphbs = require("express-handlebars");
var api = require("./survey-api-routes");


// Routes
// =============================================================
module.exports = function(app) {

  //0 user, 1 laywer, 2 test
  var userType = 0;

  switch(userType){
    case 0:
      app.engine('handlebars', exphbs({ defaultLayout: 'user' }));
      break;

    case 1:
      app.engine('handlebars', exphbs({ defaultLayout: 'laywer'}));
      break;

    default:
      app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
  };

  app.set("view engine", "handlebars");

  // Each of the below routes just handles the HTML page that the user gets sent to.

  //start users at the login page
  app.get("/", function(req, res) {
    res.render('login');
  });

  //lawyers are sent to an list of surveys filled out forms
  app.get("/surveyList", function(req, res) {
    res.render('surveyList', {});
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
