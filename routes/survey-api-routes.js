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


    //so im gonna first search to see if they have an email in the db.
    //if they do, it will look for survey, then force them to go to survey if it hasnt been filled out.
    //if they don't have an email/record in db, i'll then create one, then direct them to survey page.
    //

    //TODO TODO TODO! CLEAN THIS ALL UP AND WRAP IN FUNCTIONS
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
            }
        })
    });
};
