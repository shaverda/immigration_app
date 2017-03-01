var db = require("../models");

module.exports = function(app) {
    app.get("/api/surveyList", function(req, res) {
        // 1. Add a join to include all of each Author's Posts
        db.Survey.findAll({
            include: [db.User]
        }).then(function(response) {
            res.json(response);
            console.log(response);
        });
    });


 
    app.post("/user", function(req, res) {
        console.log(req.body);
        db.User.findOne({
            where: {
                email: req.body.email
            }
        }).then((data) => {
            // console.log(data);
            //console.log(data.dataValues);
            if (data != null) {
                res.json(data.dataValues);
            }
            else {  //if data DOES equal null, create user
              console.log("data is null");
              // creates a user in our DB if not one yet, then returns it
                db.User.create({
                    email: req.body.email
                }).then((data) => {
                    res.json(data.dataValues);
                })
            }
        })
    });

    app.post("/survey", (req, res) => {
        console.log(req.body);
        console.log(req.body['Family/last name:']);
        //TODO; HAVING DIFFICULTY HERE GETTING TO DELVE INTO OBJECTS
        //console.log(req.body.'Family/last name:');
        // db.Survey.create({
        //     email: localStorage.getItem('profile.email'),
        //     last_name: 
        // }).then((data) => {
            
        // })
        res.json(req.body);
    })
};
