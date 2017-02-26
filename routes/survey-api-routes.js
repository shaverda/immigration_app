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
    db.Users.findAll({
    	where: {
    		email: req.body.email
    	}
    }).then((data) => {
    	console.log(data.length);
    })
  });
};