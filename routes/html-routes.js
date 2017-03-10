// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var exphbs = require("express-handlebars");
var db = require("../models");
const sequelize = require("../models").sequelize;

// Routes
// =============================================================
module.exports = function(app) {
    app.engine('handlebars', exphbs({ defaultLayout: 'homeLogin' }));
        app.set("view engine", "handlebars");

    // Each of the below routes just handles the HTML page that the user gets sent to.

    //start users at the login page
    app.get("/", function(req, res) {
        app.engine('handlebars', exphbs({ defaultLayout: 'homeLogin' }));
        app.set("view engine", "handlebars");
        res.render('login');
    });

    //lawyers are sent to an list of surveys filled out forms
    app.get("/surveyList", function(req, res) {
        app.engine('handlebars', exphbs({ defaultLayout: 'lawyer' }));
        app.set("view engine", "handlebars");
        res.render('surveyList');
    });

    //users are sent to their survey
    app.get("/survey", function(req, res) {
        app.engine('handlebars', exphbs({ defaultLayout: 'user' }));
        app.set("view engine", "handlebars");
        res.render('survey');
    });

    //search for documents to help users fill out the survey
    app.get("/document", function(req, res) {
        app.engine('handlebars', exphbs({ defaultLayout: 'user' }));
        app.set("view engine", "handlebars");
        db.Survey.findOne({}).then((data) => {
          console.log(data.dataValues);
          res.render('document', {data: data.dataValues});
        });
    });
    app.get("/api/show_survey", function(req, res) {
        app.engine('handlebars', exphbs({ defaultLayout: 'lawyer' }));
        app.set("view engine", "handlebars");
        console.log(req.query);
        console.log("above is console log for req.body in line 49.");
        db.Survey.findOne({
            where: {
                email: req.query.email
            }
        }).then((data) => {
            // console.log(data.dataValues);
            var data = data.dataValues
            data.full_name = `${data.first_name} ${data.last_name}`;
            console.log(data.email);
            res.render("show_survey", {data: data});
        })
    });
    // app.get("/show_survey/", function(req, res) {
    //     db.Survey.findOne({}).then((data) => {
    //       console.log(data.dataValues)
    //       app.engine('handlebars', exphbs({ defaultLayout: 'lawyer' }))
    //       app.set("view engine", "handlebars");
    //       res.render('show_survey', {data: data.dataValues});
    //     });

    // }); i don't think this is used but i am too scared to delete it.

  app.get("/uploadImage", function(req, res){
    app.engine('handlebars', exphbs({ defaultLayout: 'user' }));
    app.set("view engine", "handlebars");
    res.render('uploadImage');
  });

  app.post("/show_survey", function(req, res) {
    app.engine('handlebars', exphbs({ defaultLayout: 'user' }));
    app.set("view engine", "handlebars");
    console.log(req.body);
    res.render("show_survey", req.body);
    // router.get("/", (req, res) => {
    //     db.Burger.findAll({}).then(function(data) {
    //         res.render("index", { burgers: data });
    //     });
    });
};